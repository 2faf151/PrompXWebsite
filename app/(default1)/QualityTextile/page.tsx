import React from 'react';
import Link from 'next/link';
import {
    CheckCircle,
    ArrowRight,
    Zap,
    Shield,
    Scissors,
    Layers
} from 'lucide-react';
import CalendlyBadgeWidget from '@/components/CalendlyBadgeWidget';
export const metadata = {
    title: 'Textile Quality Inspection - PrompX',
    description:
        'Enhance textile production with PrompX local LLM-based vision for flawless fabrics.',
    keywords:
        'textile quality, AI inspection, local LLM, manufacturing, defect detection'
};

const IndustryPage = () => {
    /* -------------------- Textile-manufacturing pain points -------------------- */
    const challenges = [
        'Broken ends, missing picks, and slubs escape human loom watchers',
        'Colour-lot drift and shade variation harm brand consistency',
        'Mis-registration in rotary/flatbed print ruins patterned fabric',
        'Stains and oil spots appear late, forcing costly second-quality write-offs',
        'Manual measurement of GSM, skew, and shrinkage slows QA labs',
        'Traceability gaps from greige to finished garment obstruct recalls'
    ];

    /* ---------------- How PrompX cures them for mills & cut-and-sew ------------- */
    const solutions = [
        'Inline cameras detect defects ≥0.1 mm at 2 000 m/min loom speed',
        'ΔE < 0.8 real-time spectro controls dye pad and stenter settings',
        'Pattern-matching AI holds print register to ±0.2 mm on every repeat',
        'Edge inference in lint-heavy, no-cloud environments—IP stays on site',
        'Auto-generated GSM, skew, and shrinkage reports cut lab time 70 %',
        'Digital “roll twin” links every metre to lot, dye bath, and operator'
    ];

    /* ------------------------- Full use-case cards -------------------------- */
    const useCases = [
        {
            title: 'Loom-Side Fabric Defect Detection',
            description:
                'High-speed line scanners capture warp and weft in real time, flagging broken ends, floats, miss-draws, and holes. PrompX links defect maps to loom ID and stop code, reducing off-loom inspection by 50 % and boosting first-quality yield.'
        },
        {
            title: 'Dyeing & Finishing Colour Control',
            description:
                'Spectral cameras watch the pad/stenter exit, measuring ΔE, skew, and shrinkage on the fly. When drift appears, PrompX adjusts dye feed, pick-up, or oven temp automatically—guaranteeing lot-to-lot colour harmony.'
        },
        {
            title: 'Print Registration & Pattern Accuracy',
            description:
                'For rotary, flatbed, or digital printers, AI aligns every repeat to the CAD pattern, detects smudges and colour drag, and halts the press if tolerance exceeds 0.2 mm—saving metres of premium fabric from scrap.'
        },
        {
            title: 'Garment QC & Label Verification',
            description:
                'Vision checks seam integrity, stitch density, and size-label accuracy on cut-and-sew lines. OCR verifies care labels and barcodes, while NLP cross-checks fibre content claims—ensuring compliance with global regulations.'
        }
    ];

    /* ----------------------- Differentiators for mills ---------------------- */
    const differentiators = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: 'Loom-Speed AI',
            description: 'Inspects 2 000 m/min webs without slowing production'
        },
        {
            icon: <Layers className="w-6 h-6" />,
            title: 'Lab-Grade Colour',
            description: 'ΔE < 0.8 inline—no lab reruns'
        },
        {
            icon: <Layers className="w-6 h-6" />,
            title: 'Pattern Precision',
            description: '±0.2 mm register on prints & jacquards'
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: 'Data Sovereignty',
            description: 'Runs on-prem with full supply-chain traceability'
        }
    ];

    return (
        <div className="min-h-screen bg-black">
            <CalendlyBadgeWidget
                url="https://calendly.com/withprompx/30min"
                text="Schedule Your Demo"
                color="#0f172a"  // Changed to match dark theme
                textColor="#ffffff"
                hideOnMobile={true}
            />
            {/* Hero */}
            <section
                className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)), url(/Industry/textile.jpg)'
                }}
            >
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="text-white">
                            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Zero-Defect{' '}
                                <span className="text-blue-400">Textile Manufacturing</span> with
                                AI Vision
                            </h1>
                            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                                PrompX guards every metre—from loom to garment—spotting defects,
                                locking colour, and automating compliance paperwork.
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
                </div>
            </section>

            {/* ---------------------------- Challenges --------------------------- */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Textile Challenges We Solve
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            High-speed looms and demanding brands leave no room for imperfection—
                            PrompX delivers the certainty you need.
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

            {/* ----------------------------- Solutions --------------------------- */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            How Our AI Solves These Challenges
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Vision-Language AI translates billions of yarn pixels into clear,
                            actionable guidance for your operators.
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

            {/* ---------------------------- Use Cases --------------------------- */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Textile Use Cases
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Mills, printers, and apparel makers worldwide rely on PrompX to reduce
                            rework and win brand loyalty.
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
                            Developed with textile engineers for the speed, lint, and colour
                            challenges unique to your mill.
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

            {/* -------------------------------- CTA ------------------------------ */}
            <section className="py-20 bg-blue-600">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Weave Perfection?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join mills and brands using PrompX to slash seconds and wow customers with
                        flawless fabric.
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
