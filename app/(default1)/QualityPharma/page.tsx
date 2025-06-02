import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    CheckCircle,
    ArrowRight,
    Zap,
    Shield,
    Pill,
    RefreshCcw,
    ClipboardCheck
} from 'lucide-react';

const IndustryPage = () => {
    /* ---------------- Pharmaceutical-manufacturing pain points -------------- */
    const challenges = [
        'Human inspectors miss sub-100 µm particulates in parenteral vials',
        'Mis-printed labels, lot codes, and expiry dates trigger FDA 483s',
        'Missing tablets or foil pin-holes in blister packs escape camera rules',
        'Batch record review takes days and slows QP release to market',
        '21 CFR Part 11 & Annex 11 data-integrity audits drain QA resources',
        'Line changeovers risk cross-contamination and wrong-component mix-ups'
    ];

    /* --------------- How PrompX solves them for GxP environments ------------- */
    const solutions = [
        'High-speed 400 fps imaging detects 50 µm particles & bubbles with 99.98 % recall',
        'OCR/OCV verifies label text, Braille, and 2-D codes at 99.99 % accuracy',
        'Real-time blister analysis flags missing, broken, or discoloured units',
        'Edge inference inside GMP grade A/B isolators—no cloud required',
        'Automatic eBR creation & review-by-exception cuts batch-release time 60 %',
        'Few-shot learning adapts to a new SKU or language in <30 minutes'
    ];

    /* ------------------------ Full use-case cards --------------------------- */
    const useCases = [
        {
            title: 'Parenteral Vial Inspection',
            description:
                'Synchronised dark-field and strobe lighting reveal glass chips, fibres, air bubbles, and fill-height deviations in every vial at 400 vials/min. PrompX outputs a reject signal in <25 ms while logging image evidence for lifelong batch records.'
        },
        {
            title: 'Blister Pack Integrity',
            description:
                'Top and infra-red cameras inspect each cavity for presence, shape, colour, and foil pin-holes. Broken tablets or crushed capsules trigger an eject before cartoning—reducing consumer complaints and product returns by 40 %.'
        },
        {
            title: 'Label & Carton Verification',
            description:
                'OCR/OCV engines read lot, expiry, GTIN, and Braille while NLP cross-checks against the electronic master. Any mismatch pauses the printer, preventing a single mis-labelled unit from reaching the pallet.'
        },
        {
            title: 'Line Clearance & Changeover',
            description:
                'Before releasing the line, PrompX scans conveyors, hoppers, and work-tables to confirm removal of prior-batch components and presence of the correct die sets, caps, and leaflets—documenting with timestamped images for QA sign-off.'
        }
    ];

    /* -------------------------- Differentiators ---------------------------- */
    const differentiators = [
        {
            icon: <Shield className="w-6 h-6" />,
            title: 'GxP-Ready Data',
            description: 'Audit-trail, e-sig, and Part 11 compliant out-of-the-box'
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: 'Sterile-Line Speed',
            description: 'Inspects 400 vials/ min without slowing the filler'
        },
        {
            icon: <Pill className="w-6 h-6" />,
            title: 'Sub-Visual Precision',
            description: 'Detects particles down to 50 µm in clear & amber glass'
        },
        {
            icon: <RefreshCcw className="w-6 h-6" />,
            title: 'Rapid SKU Swap',
            description: 'Model adapts to new dose forms in <30 min'
        }
    ];

    return (
        <div className="min-h-screen bg-black">
            {/* ------------------------------ Hero ------------------------------ */}
            <section className="relative min-h-screen flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Industry/pharma.jpg"
                        alt="Pharmaceutical Manufacturing"
                        fill
                        priority
                        quality={85}
                        sizes="100vw"
                        style={{
                            objectFit: 'cover',
                        }}
                        className="brightness-50"
                    />
                </div>
                <div className="container mx-auto px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="text-white">
                            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                GMP-Grade{' '}
                                <span className="text-blue-400">Pharma Inspection</span> with AI
                            </h1>
                            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                                PrompX safeguards patient safety and accelerates batch release—
                                catching every defect and logging every action for compliance.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/ContactQuality" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                                    Get Started Today
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                                <Link href="/quality" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                                    Watch Demo
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
                            Pharmaceutical Challenges We Solve
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Sterile production demands flawless quality and perfect paperwork—PrompX
                            delivers both.
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
                            Vision-Language AI pairs sub-visual optics with natural language to
                            simplify compliance and boost yield.
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
                            Pharmaceutical Use Cases
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Global pharma leaders trust PrompX to protect patients and speed batch
                            release.
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
                            Built for GMP floors and compliance officers alike.
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
                        Ready for Faster, Safer Batch Release?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join the sterile lines already using PrompX to ensure patient safety and
                        streamline compliance.
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
