import React from 'react';
import Link from 'next/link';
import {
    CheckCircle,
    ArrowRight,
    Zap,
    Shield,
    Droplet,
    FlaskConical,
    Repeat2
} from 'lucide-react';
import CalendlyBadgeWidget from '@/components/CalendlyBadgeWidget';
const IndustryPage = () => {
    /* ------------------ Food & Beverage pain points ------------------ */
    const challenges = [
        'Human inspectors miss hairline cracks, dents, or pinholes in bottles & cans',
        'Pathogen and foreign-object contamination triggers costly recalls',
        'Manual date-code & allergen checks slow high-speed packaging lines',
        'Color and bake inconsistency harms brand quality perception',
        'FSMA / HACCP paperwork steals valuable engineer time',
        'Limited lot-level traceability complicates root-cause during outbreaks'
    ];

    /* ------------ How PrompX solves them for F&B processors ----------- */
    const solutions = [
        'Foreign-object & micro-defect detection down to 0.2 mm at 99.9 % accuracy',
        'Real-time AI inference keeps pace with your line speed, delivering instant defect alerts without slowing production',
        'Real-time OCR verifies date codes, allergens & nutrition facts',
        'Edge inference in wash-down enclosures—no cloud, full data control',
        'Auto-generated HACCP / FSMA reports cut compliance effort by 80 %',
        'Digital “batch twin” ties every image to ERP/MES lot records'
    ];

    /* ---------------- Full write-up use-cases (no links) -------------- */
    const useCases = [
        {
            title: 'Fill-Level & Closure Inspection',
            description:
                'High-speed line cameras measure liquid level to ±1 mm, confirm cap torque, and check tamper-evident band integrity at 60 k bottles per hour. Reject signals fire to the diverter within 25 ms—stopping under-fill giveaways and consumer complaints.'
        },
        {
            title: 'Foreign Object & Contaminant Detection',
            description:
                'PrompX fuses RGB, X-ray, and hyperspectral images to spot metal shards, glass fragments, and rubber gaskets in viscous or opaque products. Heat-mapped anomalies trigger automatic line stoppage and quarantined hold pallets for QA review.'
        },
        {
            title: 'Label Accuracy & Allergen Verification',
            description:
                'OCR reads every barcode, best-by date, and ingredient list while NLP cross-checks against the batch recipe. If “peanut” appears on a label for a nut-free SKU, PrompX halts the printer before a single case reaches the palletizer.'
        },
        {
            title: 'Bake/Color Uniformity Monitoring',
            description:
                'Vision analyses the L*a*b* color profile of bread crusts and snacks every five seconds. Deviations auto-adjust oven temp or conveyor speed, reducing over-bake waste by 35 % and ensuring golden-brown consistency consumers expect.'
        }
    ];

    /* ---------------------- Competitive edges ------------------------ */
    const differentiators = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: 'Line-Rate Speed',
            description: 'Inspect 1 000+ items per second without buffering'
        },
        {
            icon: <Droplet className="w-6 h-6" />,
            title: 'Wash-Down Ready',
            description: 'IP69K stainless enclosures survive daily caustic cleaning'
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: 'Food-Safety Compliance',
            description: 'Built for FSMA, BRCGS & 21 CFR Part 11 audits'
        },
        {
            icon: <Repeat2 className="w-6 h-6" />,
            title: 'Rapid SKU Swap',
            description: 'Few-shot learning adapts to new packaging in <1 hour'
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
            {/* ------------------------ Hero ------------------------ */}
            <section
                className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)), url(/Industry/food.jpg)'
                }}
            >
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                            Perfect Your{' '}
                            <span className="text-blue-400">Food & Beverage</span> Line with
                            AI Vision
                        </h1>
                        <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                            PrompX spots every contaminant, label error, and fill anomaly—before
                            it leaves your plant—while auto-filling your HACCP logs.
                        </p>                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
            </section>

            {/* --------------------- Challenges --------------------- */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Food & Beverage Challenges We Solve
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            High-speed, high-hygiene production demands flawless quality. PrompX
                            makes it possible.
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

            {/* ---------------------- Solutions --------------------- */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            How Our AI Solves These Challenges
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Multimodal vision paired with natural language lets your QA team work
                            faster, smarter, and safer.
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

            {/* --------------------- Use-Cases ---------------------- */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Food & Beverage Use Cases
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Global brands use PrompX to guard consumer safety and protect margins.
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

            {/* ------------------ Differentiators ------------------- */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Why Choose PrompX
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Purpose-built for hygienic, high-volume production—and the audits that
                            follow.
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

            {/* ------------------------- CTA ------------------------ */}
            <section className="py-20 bg-blue-600">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Serve Quality Without Compromise?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join the processors already using PrompX to cut waste and protect their
                        brand.
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

export const metadata = {
    title: "Food & Beverage Quality - PrompX",
    description: "Improve beverage and food lines with local LLM-based AI for real-time inspection.",
    keywords: "food beverage quality, AI inspection, local LLM, manufacturing, defect detection",
};

export default IndustryPage;
