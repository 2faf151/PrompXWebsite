import tkinter as tk
from tkinter import filedialog
import math
from PIL import Image, ImageDraw, ImageTk

EXPORT_SIZE = 2000  # target export resolution (px)

class BoomerangApp:
    def __init__(self, root):
        self.root = root
        self.root.attributes('-fullscreen', True)
        self.canvas_width = 600 # This will be updated later
        self.canvas_height = 600

        self.angle = 0.0
        self.boomerang_points = [(-50, -20), (0, -10), (30, 0), (0, 10), (-50, 20), (-40, 0)]
        self.drawn_strokes = []
        self.flag_polygons = []
        self.current_stroke = []
        self.flag_mode = False

        self.offset_x_var = tk.DoubleVar(value=0)
        self.offset_y_var = tk.DoubleVar(value=0)
        self.rotation_speed_var = tk.DoubleVar(value=2)
        self.scale_var = tk.DoubleVar(value=1.0)
        self.trace_mode_var = tk.BooleanVar(value=False)

        # Update canvas size to match screen size
        self.canvas_width = self.root.winfo_screenwidth()
        self.canvas_height = self.root.winfo_screenheight()

        # PIL image for drawing preview
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
        tk.Label(cf, text="Scale (0.1 to 20.0)").pack(pady=5)
        tk.Scale(cf, from_=0.1, to=20.0, resolution=0.1, orient=tk.HORIZONTAL, variable=self.scale_var).pack(pady=5)
        tk.Checkbutton(cf, text="Trace Mode", variable=self.trace_mode_var).pack(pady=5)
        tk.Button(cf, text="Edit Drawing", command=self.open_drawing_window).pack(fill=tk.X, pady=2)
        tk.Button(cf, text="Auto Israeli Flag", command=self.auto_israel).pack(fill=tk.X, pady=2)
        tk.Button(cf, text="Clear", command=self.clear_all).pack(fill=tk.X, pady=2)
        tk.Button(cf, text="Save PNG", command=self.save_png).pack(fill=tk.X, pady=2)

        # Canvas for live preview
        self.canvas = tk.Canvas(root, width=self.canvas_width, height=self.canvas_height, bg="white", highlightthickness=0)
        self.canvas.pack(side=tk.RIGHT)
        self.photo = None

        self.animate()

    def clear_all(self):
        self.drawn_strokes.clear()
        self.flag_polygons.clear()
        self.flag_mode = False
        self.trace_mode_var.set(False)
        self.img = Image.new("RGBA", (self.canvas_width, self.canvas_height), (0,0,0,0))
        self.draw = ImageDraw.Draw(self.img)

    def transform_point(self, x, y):
        theta = math.radians(self.angle)
        xr = x * math.cos(theta) - y * math.sin(theta)
        yr = x * math.sin(theta) + y * math.cos(theta)
        xr *= self.scale_var.get()
        yr *= self.scale_var.get()
        cx = self.canvas_width/2 + self.offset_x_var.get()
        cy = self.canvas_height/2 + self.offset_y_var.get()
        return xr + cx, yr + cy

    def draw_frame(self):
        if not self.trace_mode_var.get():
            self.img = Image.new("RGBA", (self.canvas_width, self.canvas_height), (0,0,0,0))
            self.draw = ImageDraw.Draw(self.img)

        # boomerang shape
        if not self.flag_mode:
            pts = [self.transform_point(x,y) for x,y in self.boomerang_points]
            self.draw.polygon(pts, fill=(0,0,0,255), outline=(0,0,0,255))

        # strokes
        for stroke in self.drawn_strokes:
            pts = [self.transform_point(x,y) for x,y in stroke]
            self.draw.line(pts, fill=(0,0,0,255), width=8)  # Make lines fatter

        # flag triangles
        for poly in self.flag_polygons:
            pts = [self.transform_point(x,y) for x,y in poly]
            self.draw.polygon(pts, outline=(0,0,0,255), fill=None, width=8)

        # render to tkinter canvas
        self.photo = ImageTk.PhotoImage(self.img)
        self.canvas.create_image(0,0,anchor="nw",image=self.photo)

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
            cx = cy = size/2
            cvs.create_line(x1+cx, y1+cy, x2+cx, y2+cy, fill="black", width=2)

    def end_stroke(self, event):
        if self.current_stroke:
            self.drawn_strokes.append(self.current_stroke.copy())
            self.current_stroke = []

    def add_point(self, event, cvs, size):
        cx = cy = size/2
        x = event.x - cx
        y = event.y - cy
        self.current_stroke.append((x,y))

    def auto_israel(self):
        self.clear_all()
        self.rotation_speed_var.set(10)
        self.trace_mode_var.set(True)
        self.flag_mode = True
        # stripes
        self.drawn_strokes.append([(-40,25),(40,25)])
        self.drawn_strokes.append([(-40,-25),(40,-25)])
        # Star of David
        up = [(0,30),(-26,-15),(26,-15)]
        dn = [(0,-30),(-26,15),(26,15)]
        self.flag_polygons = [up, dn]

    def _render_image(self, size_px: int) -> Image.Image:
        # Render a fresh high-res image at size_px × size_px
        sf = size_px / self.canvas_width
        img = Image.new("RGBA", (size_px, size_px), (255,255,255,255)) # Make background white for export
        draw = ImageDraw.Draw(img)
        # transform for high-res
        def tx(x, y):
            theta = math.radians(self.angle)
            xr = (x * math.cos(theta) - y * math.sin(theta)) * self.scale_var.get()
            yr = (x * math.sin(theta) + y * math.cos(theta)) * self.scale_var.get() # Use the same scale factor for y
            cx = size_px / 2 + self.offset_x_var.get() * sf # Scale offset
            cy = size_px / 2 + self.offset_y_var.get() * sf
            return xr * sf + cx, yr * sf + cy
        # draw shapes
        if not self.flag_mode:
            draw.polygon([tx(x,y) for x,y in self.boomerang_points], fill="black", outline="black")
        for stroke in self.drawn_strokes:
            draw.line([tx(x,y) for x,y in stroke], fill="black", width=max(1, int(8*sf))) # Fatter lines for export
        for poly in self.flag_polygons:
            draw.polygon([tx(x,y) for x,y in poly], outline="black", width=int(8*sf))
        return img

    def save_png(self):
        path = filedialog.asksaveasfilename(defaultextension=".png", filetypes=[("PNG","*.png")])
        if path:
            self._render_image(EXPORT_SIZE).save(path, optimize=True)

if __name__ == "__main__":
    root = tk.Tk()
    app = BoomerangApp(root)
    root.mainloop()
