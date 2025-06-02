import React from 'react';
import {
    CheckCircle,
    ArrowRight,
    Zap,
    Shield,
    Cpu,
    Aperture,
    Activity
} from 'lucide-react';
import Link from 'next/link';

const IndustryPage = () => {
    /* ----------------- Semiconductor-fab pain points ----------------- */
    const challenges = [
        'Sub-10 nm line-width variations invisible to rule-based vision',
        'Overlay and focus errors caught only after downstream etch, wasting wafers',
        'Die-level traceability gaps complicate excursion root-cause analysis',
        'Massive inspection image sets overwhelm legacy storage and review workflows',
        'Photo-mask and reticle contamination halts entire lots',
        'Ramp to new node geometries forces months of recipe tuning'
    ];

    /* ------------- How PrompX fixes them for 200 / 300 mm fabs ------------- */
    const solutions = [
        'eBeam, optical & SEM images fused for 99.99 % true-positive defect capture',
        'Real-time AI inference keeps pace with your line speed, delivering instant defect alerts without slowing production.',
        'Natural-language analytics surfaces top failing layers & tools in seconds',
        'Edge cluster runs inside your clean-room VLAN—zero IP leaves site',
        'Auto-generates KLARF & GDSII-aligned defect maps for every lot',
        'Few-shot learning ports the model to a new node in under 24 h'
    ];

    /* ---------------------- Full use-case cards ---------------------- */
    const useCases = [
        {
            title: 'Front-End Wafer Inspection',
            description:
                'PrompX analyses bright-field, dark-field, and DUV images to detect particles, scratches, and pattern collapse down to 5 nm. Defect density trends feed APC loops, cutting line stops and protecting multi-million-dollar masks.'
        },
        {
            title: 'Overlay & CD Metrology',
            description:
                'AI measures critical dimensions and overlay offsets across thousands of sampling sites per wafer. Litho scanners receive correction vectors in real time, reducing rework passes and boosting yield by up to 3 %.'
        },
        {
            title: 'Photomask & Reticle Inspection',
            description:
                'High-resolution SEM images are compared to golden GDSII; PrompX highlights haze, chrome defects, and pellicle damage before a single wafer is exposed—saving entire lots from catastrophic repeaters.'
        },
        {
            title: 'Die-Level Traceability & Yield Ramp',
            description:
                'Each defect, tool ID, and chamber parameter is bound to die coordinates and lot IDs. Engineers ask in plain language—“Show clustering on metal-1 for Lot 42”—and get instant heatmaps to accelerate root-cause and fab ramp.'
        }
    ];

    /* ----------------------- Differentiators ------------------------ */
    const differentiators = [
        {
            icon: <Cpu className="w-6 h-6" />,
            title: 'Node-Ready',
            description: 'Pre-trained down to 3 nm; adaptable to new processes overnight'
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: 'High-Throughput',
            description: 'Processes 3 GB/s image streams without throttling wafer flow'
        },
        {
            icon: <Aperture className="w-6 h-6" />,
            title: 'Atomic Precision',
            description: 'Detects 5 nm particles & line-edge roughness variations'
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: 'IP Locked-Down',
            description: 'Runs on isolated fab networks—no cloud, full NDA compliance'
        }
    ];

    return (
        <div className="min-h-screen bg-black">
            {/* ----------------------------- Hero ----------------------------- */}
            <section
                className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)), url(/Industry/semiconductors.jpg)'
                }}
            >
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                            Zero-Defect{' '}
                            <span className="text-blue-400">Semiconductor Fabrication</span>{' '}
                            with AI Vision
                        </h1>
                        <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                            PrompX unifies wafer, reticle, and metrology data—catching atomic-scale
                            defects in real time and turning terabytes into actionable insight.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/ContactQuality" className="w-full sm:w-auto">
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                                    Get Started Today
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </button>
                            </Link>
                            <Link href="/quality" className="w-full sm:w-auto">
                                <button className="w-full border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                                    Watch Demo
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* --------------------------- Challenges -------------------------- */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Semiconductor Challenges We Solve
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Advanced nodes leave no margin for error. PrompX delivers atomic-scale
                            visibility and fab-wide insight.
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

            {/* ---------------------------- Solutions -------------------------- */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            How Our AI Solves These Challenges
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Vision-Language AI translates petabytes of inspection data into
                            actionable guidance your process engineers love.
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

            {/* --------------------------- Use Cases --------------------------- */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Semiconductor Use Cases
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Leading logic, DRAM, and foundry fabs rely on PrompX to boost yield and
                            accelerate node ramps.
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

            {/* ------------------------ Differentiators ------------------------ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Why Choose PrompX
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Built by litho and process-control veterans for fabs that can’t afford a
                            single killer defect.
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

            {/* ------------------------------- CTA ------------------------------ */}
            <section className="py-20 bg-blue-600">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Drive Record Yield?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join the fabs already using PrompX to eliminate killer defects and shorten
                        time-to-yield.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/ContactQuality" className="w-full sm:w-auto">
                            <button className="w-full border-2 bg-white border-white text-black hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                                Schedule Demo
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IndustryPage;
