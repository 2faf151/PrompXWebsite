// app/(default)/quality/page.tsx
import { Camera, Cpu, CheckCircle, Zap, Shield, BarChart } from 'lucide-react';

export const metadata = {
    title: "Quality Inspection with AI – PrompX",
    description: "On-premise AI scanning and CCTV quality checks for mass production lines.",
};

export default function QualityHome() {
    return (
        <div className="bg-black min-h-screen text-white">
            {/* Hero Section */}
            <header className="container mx-auto px-6 py-24 text-center">
                <h1 className="text-6xl font-extrabold mb-6">Quality Inspection with AI</h1>
                <p className="text-xl max-w-3xl mx-auto mb-8">
                    Transform your quality control process with AI-powered inspection systems.
                </p>

                {/* GIF Showcase Section */}
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div className="relative group">
                        <div className="overflow-hidden rounded-xl">
                            <img src="/phone.gif" alt="Phone Lidar Scanning" className="w-full h-64 object-cover" />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl font-bold">Mobile Lidar Scanning</h3>
                            <p className="text-gray-400">Advanced phone-based quality inspection using AI and Lidar technology</p>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="overflow-hidden rounded-xl">
                            <img src="/stream.gif" alt="Production Line Scanning" className="w-full h-64 object-cover" />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl font-bold">Production Line Integration</h3>
                            <p className="text-gray-400">Real-time scanning and quality checks during manufacturing</p>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="overflow-hidden rounded-xl">
                            <img src="/cctv.gif" alt="CCTV Monitoring" className="w-full h-64 object-cover" />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl font-bold">CCTV Monitoring</h3>
                            <p className="text-gray-400">24/7 automated quality surveillance with AI-enhanced CCTV</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-4 mt-12">
                    <a href="/ContactQuality" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all hover:scale-105">
                        Schedule a Demo
                    </a>
                </div>
            </header>

            <main className="container mx-auto px-6 py-16 bg-white rounded-t-3xl -mt-12 text-black">
                {/* Stats Section */}
                <section className="grid grid-cols-3 gap-8 mb-20">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-gray-800 mb-2">99.9%</div>
                        <div className="text-gray-600">Defect Detection Rate</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-gray-800 mb-2">0.5ms</div>
                        <div className="text-gray-600">Processing Time</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-gray-800 mb-2">24/7</div>
                        <div className="text-gray-600">Continuous Monitoring</div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="mb-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-black to-gray-300"></div>

                        {/* Timeline steps */}
                        <div className="space-y-12">
                            {[
                                {
                                    icon: <Cpu className="w-6 h-6" />,
                                    title: "Base Model Selection",
                                    desc: "500M+ parameter AI models"
                                },
                                {
                                    icon: <CheckCircle className="w-6 h-6" />,
                                    title: "Requirements Analysis",
                                    desc: "Tailored to your needs"
                                },
                                {
                                    icon: <BarChart className="w-6 h-6" />,
                                    title: "Model Fine-tuning",
                                    desc: "Customized for your products"
                                },
                                {
                                    icon: <Zap className="w-6 h-6" />,
                                    title: "Development",
                                    desc: "Cross-platform deployment"
                                },
                                {
                                    icon: <Shield className="w-6 h-6" />,
                                    title: "Deployment",
                                    desc: "Plug & play installation"
                                }
                            ].map((step, i) => (
                                <div key={i} className="flex items-start group">
                                    <div className="w-16 flex justify-center relative">
                                        <div className="w-4 h-4 rounded-full bg-black group-hover:scale-125 transition-transform duration-300"></div>
                                        <div className="absolute top-0 left-0 w-16 h-16 -mt-6 -ml-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {step.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1 ml-4 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <h3 className="font-bold text-lg">{step.title}</h3>
                                        <p className="text-gray-600">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="mb-20">
                    <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our System</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { icon: <Zap className="w-6 h-6" />, title: "Lightning Fast", desc: "Process thousands of items per minute" },
                            { icon: <Shield className="w-6 h-6" />, title: "Secure & Private", desc: "All processing happens on your premises" },
                            { icon: <BarChart className="w-6 h-6" />, title: "Detailed Analytics", desc: "Track quality metrics in real-time" },
                            { icon: <Cpu className="w-6 h-6" />, title: "Custom Training", desc: "AI model tailored to your products" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start p-6 bg-gray-50 rounded-xl">
                                <div className="bg-gray-200 p-3 rounded-lg mr-4">{item.icon}</div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center bg-black rounded-2xl p-12 text-white">
                    <h2 className="text-4xl font-bold mb-4">Ready to Perfect Your Production Line?</h2>
                    <p className="mb-8 text-lg">
                        See our AI Quality Inspection system in action with a personalized demo.
                    </p>
                    <a
                        href="/ContactQuality"
                        className="inline-block px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition"
                    >
                        Schedule a Demo
                    </a>
                </section>
            </main>
        </div>
    );
}
