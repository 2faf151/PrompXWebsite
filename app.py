import tkinter as tk
from tkinter import filedialog
import math
from PIL import Image, ImageDraw, ImageTk

class BoomerangApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Boomerang Creator")
        self.canvas_width = 600
        self.canvas_height = 600

        self.angle = 0.0
        self.boomerang_points = [(-50, -20), (0, -10), (30, 0), (0, 10), (-50, 20), (-40, 0)]
        self.drawn_strokes = []
        self.current_stroke = []

        self.offset_x_var = tk.DoubleVar(value=0)
        self.offset_y_var = tk.DoubleVar(value=0)
        self.rotation_speed_var = tk.DoubleVar(value=2)
        self.scale_var = tk.DoubleVar(value=1.0)
        self.trace_mode_var = tk.BooleanVar(value=False)

        # PIL image for drawing
        self.img = Image.new("RGBA", (self.canvas_width, self.canvas_height), (0,0,0,0))
        self.draw = ImageDraw.Draw(self.img)

        # Controls
        cf = tk.Frame(root)
        cf.pack(side=tk.LEFT, fill=tk.Y)
        tk.Label(cf, text="X Offset").pack(pady=5)
        tk.Scale(cf, from_=-300, to=300, orient=tk.HORIZONTAL, variable=self.offset_x_var).pack(pady=5)
        tk.Label(cf, text="Y Offset").pack(pady=5)
        tk.Scale(cf, from_=-300, to=300, orient=tk.HORIZONTAL, variable=self.offset_y_var).pack(pady=5)
        tk.Label(cf, text="Rotation Speed").pack(pady=5)
        tk.Scale(cf, from_=-360, to=360, orient=tk.HORIZONTAL, variable=self.rotation_speed_var).pack(pady=5)
        tk.Label(cf, text="Scale").pack(pady=5)
        tk.Scale(cf, from_=0.1, to=3.0, resolution=0.1, orient=tk.HORIZONTAL, variable=self.scale_var).pack(pady=5)
        tk.Checkbutton(cf, text="Trace Mode", variable=self.trace_mode_var).pack(pady=5)
        tk.Button(cf, text="Edit Drawing", command=self.open_drawing_window).pack(fill=tk.X, pady=2)
        tk.Button(cf, text="Clear", command=self.clear_all).pack(fill=tk.X, pady=2)
        tk.Button(cf, text="Save PNG", command=self.save_png).pack(fill=tk.X, pady=2)

        # Canvas
        self.canvas = tk.Canvas(root, width=self.canvas_width, height=self.canvas_height, bg="white")
        self.canvas.pack(side=tk.RIGHT)
        self.photo = None

        self.animate()

    def clear_all(self):
        self.drawn_strokes.clear()
        self.trace_mode_var.set(False)
        self.img = Image.new("RGBA", (self.canvas_width, self.canvas_height), (0,0,0,0))
        self.draw = ImageDraw.Draw(self.img)

    def transform_point(self, x, y):
        theta = math.radians(self.angle)
        xr = x * math.cos(theta) - y * math.sin(theta)
        yr = x * math.sin(theta) + y * math.cos(theta)
        xr *= self.scale_var.get()
        yr *= self.scale_var.get()
        cx = self.canvas_width / 2 + self.offset_x_var.get()
        cy = self.canvas_height / 2 + self.offset_y_var.get()
        return xr + cx, yr + cy

    def draw_frame(self):
        if not self.trace_mode_var.get():
            self.img = Image.new("RGBA", (self.canvas_width, self.canvas_height), (0,0,0,0))
            self.draw = ImageDraw.Draw(self.img)

        # boomerang outline only
        pts = [self.transform_point(x, y) for x, y in self.boomerang_points]
        # draw polygon outline without fill
        try:
            self.draw.polygon(pts, outline=(0,0,0,255), fill=None, width=2)
        except TypeError:
            # fallback for older Pillow versions
            self.draw.line(pts + [pts[0]], fill=(0,0,0,255), width=2)

        # strokes
        for stroke in self.drawn_strokes:
            pts = [self.transform_point(x, y) for x, y in stroke]
            self.draw.line(pts, fill=(0,0,0,255), width=2)

        # render to tkinter canvas
        self.photo = ImageTk.PhotoImage(self.img)
        self.canvas.create_image(0, 0, anchor="nw", image=self.photo)

    def animate(self):
        self.draw_frame()
        self.angle = (self.angle + self.rotation_speed_var.get()) % 360
        self.root.after(30, self.animate)

    def open_drawing_window(self):
        win = tk.Toplevel(self.root)
        win.title("Edit Drawing")
        size = 300
        cvs = tk.Canvas(win, width=size, height=size, bg="white")
        cvs.pack()
        tk.Label(win, text="Draw on the canvas. Center = (0,0).").pack()
        cvs.bind("<ButtonPress-1>", lambda e: self.start_stroke(e, cvs, size))
        cvs.bind("<B1-Motion>", lambda e: self.draw_stroke(e, cvs, size))
        cvs.bind("<ButtonRelease-1>", lambda e: self.end_stroke(e))
        tk.Button(win, text="Save", command=win.destroy).pack(pady=5)

    def start_stroke(self, event, cvs, size):
        self.current_stroke = []
        self.add_point(event, cvs, size)

    def draw_stroke(self, event, cvs, size):
        self.add_point(event, cvs, size)
        if len(self.current_stroke) > 1:
            x1, y1 = self.current_stroke[-2]
            x2, y2 = self.current_stroke[-1]
            cx = cy = size / 2
            cvs.create_line(x1+cx, y1+cy, x2+cx, y2+cy, fill="black", width=2)

    def end_stroke(self, event):
        if self.current_stroke:
            self.drawn_strokes.append(self.current_stroke.copy())
            self.current_stroke = []

    def add_point(self, event, cvs, size):
        cx = cy = size / 2
        x = event.x - cx
        y = event.y - cy
        self.current_stroke.append((x, y))

    def save_png(self):
        path = filedialog.asksaveasfilename(defaultextension=".png",
                                            filetypes=[("PNG", "*.png")])
        if not path:
            return
        bbox = self.img.getbbox()
        if not bbox:
            print("Error: Cannot save an empty image.")
            return
        cropped_img = self.img.crop(bbox)
        scale_factor = 16
        big_img = cropped_img.resize(
            (cropped_img.width * scale_factor,
             cropped_img.height * scale_factor),
            resample=Image.LANCZOS)
        big_img.save(path)
        print(f"Saved high-res image to {path}")

if __name__ == "__main__":
    root = tk.Tk()
    app = BoomerangApp(root)
    root.mainloop()
