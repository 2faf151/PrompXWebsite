import React from 'react';
import {
    CheckCircle,
    ArrowRight,
    Zap,
    Shield,
    Wrench,
    Layers,
    Globe,
    ArrowUpRight
} from 'lucide-react';

const IndustryPage = () => {
    /* ---------------- Generic / “Other” manufacturing pain points ---------------- */
    const challenges = [
        'Casting, molding, or machining defects slip past manual inspectors',
        'Complex, low-volume parts make rule-based vision brittle and slow to retune',
        'Dimensional variation and surface finish issues discovered only at final QA',
        'Paper-based traceability across mixed processes hinders root-cause analysis',
        'High scrap and rework costs when defects surface late in the value stream',
        'Data silos between PLCs, MES, and QC labs hide production trends'
    ];

    /* --------------- How PrompX fixes them for diverse factories --------------- */
    const solutions = [
        'Multi-sensor AI (RGB, 3-D, thermal) detects <0.1 mm flaws on cast, machined, or molded parts',
        'Real-time AI inference keeps pace with your line speed, delivering instant defect alerts without slowing production.',
        'Few-shot learning adapts the model to a brand-new SKU in under one hour',
        'Edge deployment survives dust, coolant splash, and foundry heat—no cloud required',
        'Natural-language dashboards tie defects to tool wear, cavity ID, or spindle load',
        'Auto-generated FAIR / PPAP reports slash audit prep by up to 70 %'
    ];

    /* ------------------------------ Use cases -------------------------------- */
    const useCases = [
        {
            title: 'Casting & Forging Defect Detection',
            description:
                'PrompX fuses thermal and visible light imaging to spot cold shuts, porosity, sand inclusions, and cracks right at the shakeout or trim press. Defect heat-maps feed back to gating and die design, boosting first-pass yield by 20 %.'
        },
        {
            title: 'CNC & Additive Machining Verification',
            description:
                'High-resolution 3-D scans and vision measure dimensional accuracy, burrs, and surface roughness on complex five-axis parts. Out-of-spec dimensions trigger automatic tool-change or spindle offset, preventing scrap of high-value alloys.'
        },
        {
            title: 'Injection & Blow Molding QA',
            description:
                'AI tracks short shots, sink marks, flash, and warpage in real time. Cavity-level analytics identify hot runners or cooling circuits drifting out of spec, allowing maintenance before scrap spikes.'
        },
        {
            title: 'Assembly Presence & Torque Validation',
            description:
                'Vision confirms correct component insertion, fastener torque, and lubricant bead geometry across mixed-model lines. NLP queries let supervisors ask, “Show missed fasteners on Line 3 today,” and get instant ranked images.'
        }
    ];

    /* -------------------------- Differentiators --------------------------- */
    const differentiators = [
        {
            icon: <Layers className="w-6 h-6" />,
            title: 'Sensor-Agnostic',
            description: 'RGB, 3-D, X-ray, or thermal—one model handles them all'
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: 'Line-Rate Speed',
            description: 'Inspects up to 15 Mpix frames in <120 ms'
        },
        {
            icon: <Wrench className="w-6 h-6" />,
            title: 'Harsh-Floor Ready',
            description: 'IP65 enclosures shrug off coolant, dust, and vibration'
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: 'Data Sovereignty',
            description: 'Runs fully on-prem—no proprietary designs leave the plant'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* -------------------------------- Hero -------------------------------- */}
            <section
                className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)), url(/Industry/other.jpg)'
                }}
            >
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-white text-center max-w-3xl mx-auto">
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Reinvent{' '}
                            <span className="text-blue-400">Manufacturing Quality</span> with AI
                            Vision
                        </h1>
                        <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                            From castings to complex assemblies, PrompX gives every factory a
                            zero-defect superpower—without rewriting a single machine recipe.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/ContactQuality"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                            >
                                Get Started Today
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                            <a
                                href="/quality"
                                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
                            >
                                Watch Demo
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------------------ Challenges ------------------------------ */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Manufacturing Challenges We Solve
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Regardless of process—casting, machining, molding, or assembly—PrompX
                            finds defects fast and keeps them off your shipping dock.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {challenges.map((c, i) => (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
                            >
                                <div className="flex items-start">
                                    <div className="bg-red-100 p-2 rounded-lg mr-4 mt-1">
                                        <div className="w-4 h-4 bg-red-500 rounded-full" />
                                    </div>
                                    <p className="text-gray-700 font-medium">{c}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* -------------------------------- Solutions ------------------------------ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            How Our AI Solves These Challenges
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Vision-Language AI gives any production line a tireless inspector and an
                            insightful engineer—rolled into one.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((s, i) => (
                            <div
                                key={i}
                                className="bg-blue-50 p-6 rounded-xl border border-blue-100 hover:bg-blue-100 transition-colors duration-200"
                            >
                                <div className="flex items-start">
                                    <CheckCircle className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                                    <p className="text-gray-800 font-medium">{s}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ------------------------------- Use Cases ------------------------------- */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Manufacturing Use Cases
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            No matter your process, PrompX helps you cut scrap, rework, and warranty
                            claims.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {useCases.map((u, i) => (
                            <div
                                key={i}
                                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {u.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                    {u.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ----------------------------- Differentiators ---------------------------- */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Why Choose PrompX
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            One platform. Any sensor. Every process.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {differentiators.map((d, i) => (
                            <div key={i} className="text-center p-6">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                                    {d.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {d.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">{d.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --------------------------------- CTA ---------------------------------- */}
            <section className="py-20 bg-blue-600">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Stamp Out Scrap?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join the manufacturers already using PrompX to ship perfect parts every
                        time.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

                        <a
                            href="/ContactQuality"
                            className="border-2 border-white bg-white text-black hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
                        >
                            Schedule Demo
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IndustryPage;
