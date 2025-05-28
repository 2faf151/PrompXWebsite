import React from 'react';

/**
 * White-paper page for PrompX’s
 * Visual-Language-Model (VLM) Quality-Inspection platform
 * designed to serve **multiple manufacturing industries**—
 * from food & beverage and pharmaceuticals to aerospace,
 * consumer packaged goods, and beyond.
 *
 * • ≥500 M-parameter VLMs run entirely on-prem for data sovereignty
 * • Detects surface flaws, contamination, colour/label drift,
 *   assembly gaps, packaging damage, safety hazards
 * • Works with any camera class: inline, CCTV, drones, mobile, LiDAR
 * • CAD/BIM/plant-layout mapping + AR overlays + conversational search
 */
const VLMUniversalQualityInspectionWhitePaper: React.FC = () => {
    return (
        <div className="bg-white font-sans py-16">
            <div className="container mx-auto px-6 max-w-4xl">

                {/* ───────── Title ───────── */}
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center animate-fade-in">
                    Visual-Language-Model&nbsp;AI-Quality&nbsp;Inspection<br />
                    for <span className="whitespace-nowrap">Multi-Industry&nbsp;Manufacturing</span>
                </h1>
                <p className="text-lg text-gray-600 text-center mb-12">
                    One on-prem VLM platform that understands every camera feed
                    and elevates quality across <em>any</em> production environment.
                </p>

                {/* ───── Executive Summary ───── */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">
                        Executive Summary
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Whether you bottle drinks, compound pharmaceuticals,
                        assemble turbines or package cosmetics, quality lapses
                        cost money and brand trust. PrompX delivers ≥500 M-parameter
                        <strong>Visual-Language Models</strong> (VLMs) that run
                        entirely inside your network. Any inline vision sensor,
                        CCTV stream, drone, or employee smartphone becomes an
                        intelligent inspector. The system flags anomalies in real-time,
                        sends actionable notifications, and lets teams <strong>chat</strong>
                        with the VLM—“Highlight pallets with torn shrink-wrap since 6 AM”
                        or “Locate leaking valve on line 3.” Interactive maps built from
                        your CAD/BIM files pinpoint issues plant-wide and throughout the
                        supply chain.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <img
                            src="/placeholder-universal-exec.jpg"
                            alt="VLM overseeing multiple industries"
                            className="rounded-lg shadow-lg max-w-full h-auto"
                        />
                    </div>
                </section>

                {/* ───── Industry Challenges ───── */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">
                        Cross-Industry Challenges
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Diverse materials, regulations and line speeds create
                        common hurdles:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li><strong>Heterogeneous defects</strong>—from micro-cracks in metal to foreign objects in food.</li>
                        <li><strong>High-mix production</strong> with frequent change-overs demanding rapid model adaptation.</li>
                        <li><strong>Strict compliance</strong> (GMP, HACCP, ISO, AS9100) requiring full traceability.</li>
                        <li><strong>Global supply chains</strong> introducing variable input quality and counterfeit risk.</li>
                        <li><strong>Data privacy</strong> constraints that prohibit cloud processing of proprietary imagery.</li>
                    </ul>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <img
                            src="/placeholder-universal1.jpg"
                            alt="Mixed product line"
                            className="rounded-lg shadow-md"
                        />
                        <img
                            src="/placeholder-universal2.jpg"
                            alt="Inspection variety"
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </section>

                {/* ───── Technical Solution ───── */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">
                        Our Technical Solution
                    </h2>
                    <p className="text-gray-700 mb-4">
                        PrompX unifies large VLMs, edge compute and intuitive UIs
                        into one adaptable quality brain — deployable in any sector.
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                        Core Components
                    </h3>
                    <div className="space-y-6">

                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">
                                1&nbsp;&nbsp;Domain-Adaptive VLMs
                            </h4>
                            <p className="text-gray-700">
                                Foundation models (≥ 500 M params) fine-tune on your
                                defect taxonomy—be it bottle fill levels, PCB solder,
                                textile weave, or turbine blade erosion—and answer
                                natural-language queries.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">
                                2&nbsp;&nbsp;Omni-Camera Ingestion
                            </h4>
                            <p className="text-gray-700">
                                Inline vision, thermal, X-ray, hyperspectral, CCTV,
                                drones, wearable and LiDAR streams analysed in real-time.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">
                                3&nbsp;&nbsp;Secure On-Prem Deployment
                            </h4>
                            <p className="text-gray-700">
                                GPUs on your LAN ensure zero data egress; meet
                                pharma, defence or food-safety privacy mandates.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">
                                4&nbsp;&nbsp;Layout-Driven Mapping & AR
                            </h4>
                            <p className="text-gray-700">
                                Upload any CAD/BIM or plant layout; live maps highlight
                                problem stations and AR glasses overlay defects on assets.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">
                                5&nbsp;&nbsp;Conversational Control
                            </h4>
                            <p className="text-gray-700">
                                Ask&nbsp;“Show pallets above 25 °C in cold-chain” or
                                “Find machines idle 30 min” and receive instant visuals.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <img
                            src="/placeholder-universal-solution.jpg"
                            alt="Universal defect dashboard"
                            className="rounded-lg shadow-lg max-w-full h-auto"
                        />
                    </div>
                </section>

                {/* ───── Implementation Process ───── */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">
                        Implementation Process
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Four steps to multi-facility AI inspection.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                            <img src="/placeholder-step1.jpg" alt="Discovery" className="mb-4 rounded-md" />
                            <h4 className="text-xl font-semibold text-blue-600 mb-2">
                                1&nbsp;&nbsp;Discovery
                            </h4>
                            <p className="text-gray-700">
                                Audit cameras, processes, KPIs and layouts across plants.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                            <img src="/placeholder-step2.jpg" alt="Adaptation" className="mb-4 rounded-md" />
                            <h4 className="text-xl font-semibold text-blue-600 mb-2">
                                2&nbsp;&nbsp;Model Adaptation
                            </h4>
                            <p className="text-gray-700">
                                Fine-tune VLMs on sample defects and process imagery per sector.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                            <img src="/placeholder-step3.jpg" alt="Deployment" className="mb-4 rounded-md" />
                            <h4 className="text-xl font-semibold text-blue-600 mb-2">
                                3&nbsp;&nbsp;Edge Deployment
                            </h4>
                            <p className="text-gray-700">
                                GPU nodes installed near lines; feeds secured via VLAN or fibre.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                            <img src="/placeholder-step4.jpg" alt="Training" className="mb-4 rounded-md" />
                            <h4 className="text-xl font-semibold text-blue-600 mb-2">
                                4&nbsp;&nbsp;Enable & Scale
                            </h4>
                            <p className="text-gray-700">
                                Roll out AR dashboards; monitor drift; add new sites or suppliers.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ───── Advanced Features ───── */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">
                        Advanced Features
                    </h2>
                    <div className="space-y-6">

                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">
                                Multimodal Analytics
                            </h4>
                            <p className="text-gray-700">
                                Fuse vision with sensor and ERP data to predict rejects
                                and optimise OEE.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">
                                AR Process Guidance
                            </h4>
                            <p className="text-gray-700">
                                Overlay step-by-step repair or cleaning instructions on assets.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">
                                Sustainability Metrics
                            </h4>
                            <p className="text-gray-700">
                                Track scrap, energy and water waste tied to quality events.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">
                                Supplier/Logistics Portal
                            </h4>
                            <p className="text-gray-700">
                                Lightweight agent lets partners self-inspect lots before shipping.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <img
                            src="/placeholder-universal-advanced.jpg"
                            alt="Cross-industry analytics"
                            className="rounded-lg shadow-lg max-w-full h-auto"
                        />
                    </div>
                </section>

                {/* ───── Conclusion ───── */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">
                        Conclusion
                    </h2>
                    <p className="text-gray-700">
                        PrompX turns every camera into a sector-agnostic, conversational
                        quality guardian. From pharmaceutical clean rooms to beverage
                        bottling lines, our on-prem VLMs slash defects, ensure compliance,
                        and protect proprietary data—no cloud required.
                    </p>
                </section>

                {/* ───── Call to Action ───── */}
                <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-8 rounded-lg shadow-lg text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        One platform. Endless industries.
                    </h2>
                    <p className="text-lg mb-6">
                        Explore how PrompX adapts to your unique production challenges.
                    </p>
                    <a
                        href="/contact"
                        className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-blue-100 transition duration-300 shadow-md"
                    >
                        Schedule a Demo
                    </a>
                </section>
            </div>

            {/* ───── Inline Animation CSS ───── */}
            <style>
                {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to   { opacity: 1; transform: translateY(0);   }
          }
          .animate-fade-in { animation: fadeIn 1s ease-in-out; }
        `}
            </style>
        </div>
    );
};

export default VLMUniversalQualityInspectionWhitePaper;
