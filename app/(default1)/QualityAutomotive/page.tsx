import React from 'react';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Zap, Shield, Users, BarChart3, Wrench } from 'lucide-react';

const IndustryPage = () => {
    // Automotive-specific pain points on the factory floor
    const challenges = [
        'Manual visual inspection misses tiny paint, weld, or panel defects',
        'Difficulty guaranteeing 100 % air-bag and safety-critical component integrity',
        'High cost of unplanned line stops due to late defect discovery',
        'Lack of real-time traceability for VIN-level audit and recall',
        'Inconsistent torque and fitting validation across multiple models',
        'Ramp-up of new vehicle variants overwhelms legacy vision systems',
    ];

    // How PrompX solves them for automotive manufacturers
    const solutions = [
        'AI-powered defect detection with ≤0.05 mm resolution at 99.9 % precision',
        'Real-time AI inference keeps pace with your line speed, delivering instant defect alerts without slowing production',
        'Natural-language dashboards highlight root-cause trends instantly',
        'On-prem edge deployment safeguards proprietary design data',
        'Modular cameras retrofit to stamping, body-in-white, paint, and final assembly lines',
        'Auto-generated compliance reports cut audit prep by 70 %',
    ];

    // High-impact automotive use-cases (now with full write-ups)
    const useCases = [
        {
            title: 'Paint & Surface Inspection',
            description:
                'Line-scan and area cameras stream 8 K images at conveyor speed while PrompX flags dust nibs ≥20 µm, color-shift, orange peel, runs, and sags. Built-in gloss, DOI, and color-delta metrics feed closed-loop feedback to spray robots—delivering Class-A finishes without manual polishing or booth slow-downs.',
        },
        {
            title: 'Weld Quality Verification',
            description:
                'Thermal imagers and vision sensors capture over 5 000 spot welds per body shell. PrompX detects missing nuggets, undercut, expulsion, porosity, and over-weld in <80 ms, overlaying heat-maps on the weld map and triggering automatic cell stops or robot tip-dress cycles before the next job enters the station.',
        },
        {
            title: 'Assembly & Torque Validation',
            description:
                'The platform cross-checks every critical fastener by reading digital torque wrench results, visual thread engagement, and QR-embedded part codes. If a single parameter is out-of-spec—wrong bolt length, under-torque, missing clip—PrompX signals the PLC and gates the station, cutting downstream re-work to near-zero.',
        },
        {
            title: 'VIN-Level Traceability',
            description:
                'For every detected anomaly, PrompX pairs hi-res imagery, timestamp, station ID, and the scanned VIN/part barcode, then cryptographically signs and pushes the record to your MES/QMS. Field-service or recall teams can search by VIN and see the exact defect, station, and supplier in seconds—turning weeks of root-cause hunting into minutes.',
        },
    ];

    // What sets PrompX apart for automotive OEMs & Tier-1s
    const differentiators = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: 'Line-Rate Processing',
            description: 'Stay in takt – process 10 + Mpix frames under 100 ms on edge GPUs',
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: 'Data Sovereignty',
            description: 'ABS, ESC & ECU images never leave your plant – full on-prem deployment',
        },
        {
            icon: <Wrench className="w-6 h-6" />,
            title: 'Retrofit Friendly',
            description: 'Works with any existing camera, PLC, or MES without costly re-tooling',
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: 'Automotive IQ',
            description: 'Pre-trained on millions of welds, bolts & panels for out-of-the-box accuracy',
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section
                className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(/Industry/automative.jpg)',
                }}
            >
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="text-white">
                            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Transform Your <span className="text-blue-400">Automotive Manufacturing</span> with AI Vision
                            </h1>
                            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                                Eliminate defects before they leave the line. PrompX brings real-time Visual-Language AI
                                to paint, body-shop, and final assembly—all inside your plant.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/ContactQuality">
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                                        Get Started Today
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </button>
                                </Link>
                                <Link href="/quality">
                                    <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                                        Watch Demo
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industry Challenges */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Automotive Challenges We Solve</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From stamping to final roll-off, every stage carries unique visual QA hurdles. Here’s how PrompX tackles them head-on.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {challenges.map((challenge, index) => (
                            <div
                                key={index}
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

            {/* How Our AI Solves It */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">How Our AI Solves These Challenges</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our Vision-Language Model brings human-level perception and context to your production line, without the human bottleneck.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution, index) => (
                            <div
                                key={index}
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Automotive Use Cases</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Leading OEMs and Tier-1 suppliers use PrompX to cut re-work, scrap, and warranty claims.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {useCases.map((useCase, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{useCase.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We're Different */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose PrompX</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We combine deep automotive know-how with state-of-the-art AI—built for your plant, not the cloud.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {differentiators.map((diff, index) => (
                            <div key={index} className="text-center p-6">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                                    {diff.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{diff.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{diff.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Automotive Lines?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join the OEMs and suppliers already using PrompX to drive zero-defect manufacturing.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/ContactQuality">
                            <button className="border-2 border-white text-blue-600 bg-white hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
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
