import React from 'react';
import Link from 'next/link';
import {
    CheckCircle,
    ArrowRight,
    Zap,
    Shield,
    Cpu,
    Activity,
    Layers
} from 'lucide-react';

const IndustryPage = () => {
    /* -------------- Electronics-Parts manufacturing pain points -------------- */
    const challenges = [
        '2-D AOI misses hidden BGA voids and micro-cracks in solder joints',
        'Manual microscope checks slow down high-mix SMT lines',
        'X-ray and SPI data live in silos—no single source of defect truth',
        'False positives trigger costly board rework and yield loss',
        'IPC-A-610 paperwork and traceability consume engineering hours',
        'New board revisions overwhelm rule-based vision libraries'
    ];

    /* ---------------- How PrompX solves them for PCB / EMS ------------------ */
    const solutions = [
        'Multimodal vision (RGB, X-ray, 3-D SPI) fused for 99.97 % true-positive rate',
        'Real-time AI inference keeps pace with your line speed, delivering instant defect alerts without slowing production',
        'Natural-language analytics pinpoints top five defect modes per SKU in seconds',
        'Edge deployment inside ESD-safe racks—no cloud, no IP leakage',
        'Auto-generated IPC-A-610 Class 2/3 conformance reports',
        'Few-shot learning adapts models to a new BOM in under 30 minutes'
    ];

    /* --------------------------- Full use-case cards ------------------------- */
    const useCases = [
        {
            title: 'Solder Paste & Pad Inspection',
            description:
                'PrompX ingests 3-D SPI height maps to flag insufficient or excessive paste, bridging, and pad offset before placement. Real-time feedback loops adjust stencil pressure, cutting solder-related defects by 45 %.'
        },
        {
            title: 'Post-Reflow AOI & X-ray Analysis',
            description:
                'Fuses top-side RGB, side-view, and X-ray to detect tombstones, head-in-pillow, BGA voiding, open vias-in-pad, and hidden copper exposure. Visual heat-maps guide rework only where needed—no blanket reflow.'
        },
        {
            title: 'Component Presence, Polarity & OCR',
            description:
                'High-resolution cameras verify every 0201, check polarity marks on tantalum caps and IC pin 1, and OCR laser-etched date/lot codes. PrompX halts the pick-and-place if a wrong reel is loaded, preventing batch-wide recalls.'
        },
        {
            title: 'Traceability & IPC Compliance',
            description:
                'Each defect image, AOI coordinate, feeder ID, and batch lot is cryptographically tied to the board’s unique UID. One-click export produces Class 3 acceptance reports for aerospace & medical customers in seconds.'
        }
    ];

    /* ------------------------- Competitive advantages ----------------------- */
    const differentiators = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: 'Placement-Line Speed',
            description: 'Inspects 15 Mpix frames in <60 ms—no conveyor pause'
        },
        {
            icon: <Cpu className="w-6 h-6" />,
            title: 'Chip-Level Detail',
            description: 'Detects voids and lifted leads down to 10 µm'
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: 'IP Safe',
            description: 'Runs on-prem under NDA; Gerber and CAD never leave site'
        },
        {
            icon: <Layers className="w-6 h-6" />,
            title: 'BOM Agility',
            description: 'Few-shot learning handles rev changes with no rule rewrite'
        }
    ];

    return (
        <div className="min-h-screen bg-black">
            {/* ------------------------------ Hero ------------------------------ */}
            <section
                className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)), url(/Industry/electronic.jpg)'
                }}
            >
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="text-white">
                            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Zero-Defect{' '}
                                <span className="text-blue-400">Electronics Manufacturing</span>{' '}
                                with AI Vision
                            </h1>
                            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                                PrompX unifies SPI, AOI, and X-ray into one brain—catching every
                                solder defect and trace anomaly before the board ships.
                            </p>                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Link href="/ContactQuality" className="w-full sm:w-auto">
                                    <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                                        Get Started Today
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </button>
                                </Link>
                                <Link href="/quality" className="w-full sm:w-auto">
                                    <button className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                                        Watch Demo
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --------------------------- Challenges --------------------------- */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Electronics QA Challenges We Solve
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            High-density boards and shrinking tolerances demand more than rule-based
                            AOI. PrompX delivers.
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

            {/* ---------------------------- Solutions --------------------------- */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            How Our AI Solves These Challenges
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Vision-Language AI sees every solder joint and explains every trend—in
                            real words your engineers understand.
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
                            Electronics Use Cases
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            EMS, OEM, and semiconductor back-end fabs rely on PrompX to boost first-
                            pass yield and slash RMA.
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
                            Built by SMT veterans for zero-defect electronics production.
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

            {/* ------------------------------ CTA ------------------------------ */}
            <section className="py-20 bg-blue-600">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Boost First-Pass Yield?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join the SMT lines worldwide that trust PrompX for bulletproof quality and
                        faster NPI.
                    </p>                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/ContactQuality" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto border-2 bg-white border-white text-black hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
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
