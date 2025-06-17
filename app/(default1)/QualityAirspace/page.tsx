import React from 'react';
import Link from 'next/link';
import {
    CheckCircle,
    ArrowRight,
    Zap,
    Shield,
    Target,
    Link2,
    Rocket
} from 'lucide-react';
import CalendlyBadgeWidget from '@/components/CalendlyBadgeWidget';
export const metadata = {
    title: "Aerospace Quality - PrompX",
    description: "Elevate aerospace manufacturing with local LLM-based AI vision for sub-50 µm precision.",
    keywords: "aerospace quality, AI inspection, local LLM, manufacturing, defect detection",
};

const IndustryPage = () => {
    // Aerospace-specific pain points
    const challenges = [
        'Manual borescope and visual checks miss sub-surface cracks and pits',
        'AS9100 / FAA Part 21 paperwork consumes thousands of engineer hours',
        'Late non-conformance detection scraps high-value composite parts',
        'Traceability gaps across decades-long programs hinder root-cause',
        'Aircraft-on-ground (AOG) costs sky-rocket when defects appear post-assembly',
        'Rule-based vision falters on low-volume, high-mix part geometries'
    ];

    // How PrompX resolves them for aerospace OEMs & MROs
    const solutions = [
        'Sub-50 µm defect detection on metallic & composite skins at 99.95 % recall',
        'Real-time AI inference keeps pace with your line speed, delivering instant defect alerts without slowing production',
        'Natural-language dashboards reveal defect clusters and process drift',
        'Edge inference in air-gapped DO-178C-aligned environments (no cloud)',
        'Instant AS9102 FAIR & FAI report generation—paperwork hours → minutes',
        'Few-shot learning ports the model to new part numbers in under a day'
    ];

    // High-impact aerospace use-cases—full write-ups, no “Learn More”
    const useCases = [
        {
            title: 'Fuselage & Skin Surface Inspection',
            description:
                'Line-scan cameras sweep each panel for micro-cracks, hail dents, lightning-strike burn-through, blistering paint, and sealant voids. PrompX maps every anomaly to CAD coordinates and feeds the MES, enabling repair before the next production milestone and cutting re-work hours by 40 %.'
        },
        {
            title: 'Turbine Blade & Hot-Section Analysis',
            description:
                'High-resolution borescope and CT images flow through PrompX to detect tip rub, creep, cooling-hole blockage, and TBC spallation. Results sync with life-limited-parts (LLP) logs so engineering can decide on-wing repair vs. shop visit within minutes—minimizing AOG.'
        },
        {
            title: 'Composite Lay-up & Cure Verification',
            description:
                'Vision and ultrasonic data confirm fiber orientation, resin-rich zones, foreign object debris, and post-cure porosity. The system flags any out-of-spec laminate in <90 s, before costly autoclave time is wasted, and exports automated cure charts for NADCAP audits.'
        },
        {
            title: 'Final Assembly & Fastener Audit',
            description:
                'PrompX cross-checks torque values, verifies collar gap, and ensures correct Length-on-Grip for every rivet, Hi-Lok, and bolt. Each reading, image, and tool ID is tied to the airframe serial, giving you an immutable digital thread for lifetime compliance.'
        }
    ];

    // Unique advantages for aerospace manufacturers
    const differentiators = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: 'Flight-Line Speed',
            description: 'Process 20 MP images in <120 ms—no takt-time penalty'
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: 'Aerospace Compliance',
            description: 'Designed for AS9100, DO-178C & ITAR work-cells'
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: 'Sub-Pixel Precision',
            description: 'Detect flaws down to 0.05 mm without X-ray overexposure'
        },
        {
            icon: <Link2 className="w-6 h-6" />,
            title: 'Digital-Thread Ready',
            description: 'Feeds PLM/MES for cradle-to-grave part traceability'
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
                        'linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)), url(/Industry/airospace.jpg)'
                }}
            >
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="text-white">
                            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Elevate Your{' '}
                                <span className="text-blue-400">Aerospace Manufacturing</span>{' '}
                                with AI Vision
                            </h1>
                            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                                From wing skins to turbine blades, PrompX delivers real-time
                                Visual-Language AI that catches every flaw before first flight—all
                                on your secure shop network.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

            {/* Challenges */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Aerospace Challenges We Solve
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Whether you build new airframes or overhaul engines, PrompX eliminates
                            the hidden defects and paperwork bottlenecks that drag programmes down.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {challenges.map((challenge, i) => (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
                            >
                                <div className="flex items-start">
                                    <div className="bg-red-100 p-2 rounded-lg mr-4 mt-1">
                                        <div className="w-4 h-4 bg-red-500 rounded-full" />
                                    </div>
                                    <p className="text-gray-700 font-medium">{challenge}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            How Our AI Solves These Challenges
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            PrompX pairs multimodal vision with natural language to give your
                            inspectors super-human speed and accuracy—without adding headcount.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution, i) => (
                            <div
                                key={i}
                                className="bg-blue-50 p-6 rounded-xl border border-blue-100 hover:bg-blue-100 transition-colors duration-200"
                            >
                                <div className="flex items-start">
                                    <CheckCircle className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                                    <p className="text-gray-800 font-medium">{solution}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Aerospace Use Cases
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Leading OEMs, Tier-1s, and MROs rely on PrompX to keep fleets flying
                            safely and programmes on schedule.
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

            {/* Differentiators */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Why Choose PrompX
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Built by aerospace veterans, our platform meets the toughest standards
                            out-of-the-box.
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
                                <p className="text-gray-600 leading-relaxed">
                                    {d.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-blue-600">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Launch Zero-Defect Aerospace Production?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join the programmes already using PrompX to accelerate certification and
                        slash re-work.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/ContactQuality">
                            <button className="border-2 border-white text-black bg-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
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
