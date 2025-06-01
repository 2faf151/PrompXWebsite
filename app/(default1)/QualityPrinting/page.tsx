import React from 'react';
import Link from 'next/link';
import {
    CheckCircle,
    ArrowRight,
    Zap,
    Shield,
    PackageCheck,
    Ruler,
    Palette
} from 'lucide-react';

const IndustryPage = () => {
    /* ------------------ Printing & Packaging pain points ------------------ */
    const challenges = [
        'Human spot-checks miss colour drift, register mis-alignment, and die-cut variance',
        'Barcode, QR, and variable-data errors escape rule-based vision, causing rejects at filling sites',
        'Mis-placed glue or weak seals trigger leaks and shelf-life failures',
        'Changeovers to short-run SKUs slow lines and waste substrate',
        'Defect root-cause is hard to trace across press, lamination, and converting stages',
        'Brand owners demand 100 % inspection certificates and digital print reports'
    ];

    /* --------------- How PrompX fixes them for print/pack lines -------------- */
    const solutions = [
        '360-dpi vision + spectro scans detect ΔE < 1.0 colour drift in real time',
        'Real-time AI inference keeps pace with your line speed, delivering instant defect alerts without slowing production',
        'Edge AI measures glue pattern, seal width & pressure to 0.1 mm tolerance',
        'Auto job-setup with few-shot learning slashes changeover to <5 min',
        'Dashboards link press roll, slit position, and pouch lot to each defect',
        'One-click PDF certificate proves 100 % inspection to CPG brand owners'
    ];

    /* ----------------------- Full use-case cards ----------------------- */
    const useCases = [
        {
            title: 'Colour & Register Control',
            description:
                'Inline cameras compare every frame to the digital proof, measuring ΔE, dot gain, and register shift on CMYK + spot colours. When drift exceeds tolerance, PrompX sends closed-loop ink-key or servo tweaks, cutting makeready waste 30 %.'
        },
        {
            title: 'Variable Data & Barcode Verification',
            description:
                'OCR engines read lot, expiry, and promo codes while 2-D scanners grade every GS1 or QR to ISO 15415 in real time. Bad codes trigger press roll map or reject gating—avoiding downstream pallet re-labelling costs.'
        },
        {
            title: 'Die-Cut & Crease Accuracy',
            description:
                'High-speed stroboscopic imaging measures carton die-cut profile, crease depth, and window patch placement to ±0.05 mm. Out-of-spec blanks are diverted before folding/gluing, preventing jam-ups and brand rejections.'
        },
        {
            title: 'Seal Integrity & Glue Pattern',
            description:
                'Thermal and RGB cameras audit heat-seal width, temperature distribution, and glue bead shape on flow-wraps, pouches, and trays. PrompX flags weak seals instantly, preventing leaks, contamination, and consumer returns.'
        }
    ];

    /* ------------------- Differentiators for converters ------------------ */
    const differentiators = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: 'Press-Speed AI',
            description: 'Inspects up to 1000 fpm webs without stroboscopic lag'
        },
        {
            icon: <Palette className="w-6 h-6" />,
            title: 'ΔE < 1.0 Precision',
            description: 'Lab-grade colour control, inline on any substrate'
        },
        {
            icon: <Ruler className="w-6 h-6" />,
            title: 'Micron-Level Cuts',
            description: '0.05 mm tolerance on die-cut, crease & slit'
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: 'Brand-Owner Trust',
            description: 'Digital certificates & traceability for every reel and box'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* ------------------------------- Hero ------------------------------ */}
            <section
                className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)), url(/Industry/packaging.jpg)'
                }}
            >
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="text-white">
                            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Flawless{' '}
                                <span className="text-blue-400">Printing & Packaging</span> with
                                AI Vision
                            </h1>
                            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                                PrompX delivers 100 % inline inspection—from first sheet to finished
                                pouch—while auto-generating the QA reports your brand owners demand.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="/ContactQuality" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                                    Get Started Today
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </a>
                                <a href="/quality" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                                    Watch Demo
                                </a>
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
                            Printing & Packaging Challenges We Solve
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            High-speed presses and zero-defect demands leave no room for error.
                            PrompX keeps you ahead.
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
                            Vision-Language AI combines spectro-grade optics with intuitive
                            analytics, so your operators catch every defect—without slowing down.
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
                            Printing & Packaging Use Cases
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From flexo labels to foil pouches, converters worldwide rely on PrompX.
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
                            Purpose-built for converters and corrugators who can’t afford brand
                            recalls.
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

            {/* -------------------------------- CTA ----------------------------- */}
            <section className="py-20 bg-blue-600">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready for Zero-Defect Print & Pack?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join the converters already saving substrate and protecting brand equity
                        with PrompX.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/ContactQuality">
                            <button className="border-2 bg-white border-white text-black  hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
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
