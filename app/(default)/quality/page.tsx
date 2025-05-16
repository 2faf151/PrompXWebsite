// app/(default)/quality/page.tsx
import { Camera, Cpu, CheckCircle } from 'lucide-react';

export const metadata = {
    title: "AI Quality Inspection – PrompX",
    description: "On-premise AI scanning and CCTV quality checks for mass production lines.",
};

export default function QualityHome() {
    return (
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 min-h-screen text-white">
            {/* Hero */}
            <header className="container mx-auto px-6 py-24 text-center">
                <h1 className="text-6xl font-extrabold mb-4">AI Quality Inspection</h1>
                <p className="text-xl max-w-2xl mx-auto">
                    Revolutionize your production line with on-premise AI scanners and CCTV
                    that detect defects in real time—no cloud required.
                </p>
            </header>

            {/* Features */}
            <main className="container mx-auto px-6 py-16 bg-white rounded-t-3xl -mt-12 text-gray-800 space-y-16">
                <section className="grid gap-8 md:grid-cols-3">
                    <div className="p-8 bg-gray-50 rounded-2xl shadow-lg text-center">
                        <Camera className="mx-auto mb-4 w-12 h-12 text-indigo-600" />
                        <h3 className="text-2xl font-semibold mb-2">High-Speed Scanning</h3>
                        <p>
                            Capture every product detail on the line with real-time image analysis.
                        </p>
                    </div>

                    <div className="p-8 bg-gray-50 rounded-2xl shadow-lg text-center">
                        <Cpu className="mx-auto mb-4 w-12 h-12 text-indigo-600" />
                        <h3 className="text-2xl font-semibold mb-2">Local AI Engine</h3>
                        <p>
                            Deploy our fine-tuned AI model entirely on-premise for maximum privacy.
                        </p>
                    </div>

                    <div className="p-8 bg-gray-50 rounded-2xl shadow-lg text-center">
                        <CheckCircle className="mx-auto mb-4 w-12 h-12 text-indigo-600" />
                        <h3 className="text-2xl font-semibold mb-2">Real-Time Alerts</h3>
                        <p>
                            Instantly detect defects and anomalies, ensuring flawless output every time.
                        </p>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center">
                    <h2 className="text-4xl font-bold mb-4">Ready to Elevate Quality?</h2>
                    <p className="mb-8">
                        Book a demo to see how our AI Quality Inspection transforms your production.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition"
                    >
                        Request a Demo
                    </a>
                </section>
            </main>
        </div>
    );
}
