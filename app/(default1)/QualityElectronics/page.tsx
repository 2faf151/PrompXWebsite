import React from 'react';

/**
 * White-paper page for PrompX’s
 * Visual-Language-Model (VLM) Quality-Inspection platform
 * focused on **electronics-parts manufacturing**.
 *
 * • ≥500 M-parameter VLMs run on-prem for IP security
 * • Detects solder-joint voids, tombstones, bridging, missing parts,
 *   PCB trace burns, BGA mis-alignment, component counterfeit
 * • Works with AOI/AXI machines, microscopes, CCTV, mobile & LiDAR
 * • CAD/Gerber mapping + AR overlays + conversational search
 */
const VLMElectronicsQualityInspectionWhitePaper: React.FC = () => {
    return (
        <div className="bg-white font-sans py-16">
            <div className="container mx-auto px-6 max-w-4xl">

                {/* ───────── Title ───────── */}
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center animate-fade-in">
                    Visual-Language-Model&nbsp;AI-Quality&nbsp;Inspection<br />
                    for <span className="whitespace-nowrap">Electronics&nbsp;Parts&nbsp;Manufacturing</span>
                </h1>
                <p className="text-lg text-gray-600 text-center mb-12">
                    Spot every solder fault and PCB anomaly in milliseconds —
                    privately — with on-prem VLMs that
                    <em>see&nbsp;and&nbsp;understand</em> your entire SMT line.
                </p>

                {/* ───── Executive Summary ───── */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">
                        Executive Summary
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Electronics manufacturing tolerances shrink while
                        component variety explodes. PrompX deploys ≥500 M-parameter
                        <strong>Visual-Language Models</strong> (VLMs)
                        entirely on-site. AOI cameras, X-ray imagers, HD microscopes,
                        CCTV or smartphones become intelligent inspectors that
                        flag tombstones, voids, bridging, scorch marks, missing or
                        counterfeit parts in real-time. Operators receive push
                        notifications and <strong>chat</strong> with the VLM —
                        “Show all boards with open solder on pad A2” —
                        while an interactive factory map (built from CAD/Gerber files)
                        pins each event.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <img
                            src="/placeholder-electronics-exec.jpg"
                            alt="VLM inspecting SMT line"
                            className="rounded-lg shadow-lg max-w-full h-auto"
                        />
                    </div>
                </section>

                {/* ───── Industry Challenges ───── */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">
                        Industry Challenges
                    </h2>
                    <p className="text-gray-700 mb-4">
                        PCB and component makers confront nano-scale precision,
                        rapid cycle times and strict traceability:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li><strong>Fine-pitch defects</strong> (≤ 0.2 mm) invisible to the naked eye.</li>
                        <li><strong>High-mix SMT lines</strong> changing setups multiple times daily.</li>
                        <li><strong>Counterfeit & ESD damage</strong> threatening reliability.</li>
                        <li><strong>Regulatory compliance</strong> (IPC-A-610, ISO 9001, J-STD-001) demanding complete image archives.</li>
                        <li><strong>IP confidentiality</strong> for proprietary board layouts and firmware.</li>
                    </ul>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <img
                            src="/placeholder-electronics1.jpg"
                            alt="Micro-solder inspection"
                            className="rounded-lg shadow-md"
                        />
                        <img
                            src="/placeholder-electronics2.jpg"
                            alt="SMT line high speed"
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
                        PrompX fuses large VLMs, edge compute and intuitive UIs
                        into one quality brain for every board and component.
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                        Core Components
                    </h3>
                    <div className="space-y-6">

                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">
                                1&nbsp;&nbsp;Large Visual-Language Models
                            </h4>
                            <p className="text-gray-700">
                                Foundation models (≥ 500 M params) interpret images
                                and text together. Fine-tuned on solder-joint libraries,
                                X-ray datasets and CAD/Gerber geometry, they detect
                                defects and answer free-form queries.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">
                                2&nbsp;&nbsp;Multi-Sensor Ingestion
                            </h4>
                            <p className="text-gray-700">
                                Integrates with AOI, AXI, UV inspection, microscopes,
                                CCTV and mobile/LiDAR for field-return checks.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">
                                3&nbsp;&nbsp;Secure On-Prem Deployment
                            </h4>
                            <p className="text-gray-700">
                                GPUs on your factory LAN ensure zero data leaves
                                your secure enclave, satisfying OEM & military contracts.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">
                                4&nbsp;&nbsp;Gerber-Driven Map & AR
                            </h4>
                            <p className="text-gray-700">
                                Upload assembly CAD and Gerber; a live map highlights
                                reflow ovens, pick-and-place, AOI stations and reels
                                where issues arise. AR glasses show defect pads in situ.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">
                                5&nbsp;&nbsp;Conversational Control
                            </h4>
                            <p className="text-gray-700">
                                Ask&nbsp;“Trace this lot through solder-paste and reflow”
                                and receive visual lineage, yield stats and images.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <img
                            src="/placeholder-electronics-solution.jpg"
                            alt="Electronics defect dashboard"
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
                        Four steps to turn every station into an AI inspector.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                            <img src="/placeholder-step1.jpg" alt="Discovery" className="mb-4 rounded-md" />
                            <h4 className="text-xl font-semibold text-blue-600 mb-2">
                                1&nbsp;&nbsp;Audit & Sampling
                            </h4>
                            <p className="text-gray-700">
                                Gather AOI images, X-ray scans, process KPIs, Gerber files.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                            <img src="/placeholder-step2.jpg" alt="Adaptation" className="mb-4 rounded-md" />
                            <h4 className="text-xl font-semibold text-blue-600 mb-2">
                                2&nbsp;&nbsp;Model Adaptation
                            </h4>
                            <p className="text-gray-700">
                                Fine-tune VLMs on defect taxonomy (IPC class II/III) and
                                component SKUs unique to your facility.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                            <img src="/placeholder-step3.jpg" alt="Deployment" className="mb-4 rounded-md" />
                            <h4 className="text-xl font-semibold text-blue-600 mb-2">
                                3&nbsp;&nbsp;Edge Deployment
                            </h4>
                            <p className="text-gray-700">
                                Install GPU nodes near SMT lines; secure feeds via VLAN
                                or isolated fibre.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                            <img src="/placeholder-step4.jpg" alt="Training" className="mb-4 rounded-md" />
                            <h4 className="text-xl font-semibold text-blue-600 mb-2">
                                4&nbsp;&nbsp;Operator Training
                            </h4>
                            <p className="text-gray-700">
                                AR viewers & dashboards deployed; we monitor drift and
                                broaden to final assembly or field returns.
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
                                X-Ray Defect Analysis
                            </h4>
                            <p className="text-gray-700">
                                Inspect hidden solder voids and BGA alignment without
                                extra programming.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">
                                AR Rework Guidance
                            </h4>
                            <p className="text-gray-700">
                                Overlay hotspots on boards showing pads needing touch-up.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">
                                Counterfeit Detection
                            </h4>
                            <p className="text-gray-700">
                                VLM compares marking, lead frame and X-ray signature
                                against golden parts.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">
                                Supplier Portal
                            </h4>
                            <p className="text-gray-700">
                                PCB fabs and EMS partners run a lightweight agent so
                                you can vet lots before shipment.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <img
                            src="/placeholder-electronics-advanced.jpg"
                            alt="X-ray analysis overlay"
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
                        PrompX brings camera-agnostic, conversational VLMs to the
                        electronics floor — eliminating hidden defects, boosting
                        first-pass yield and securing your IP, all without the cloud.
                    </p>
                </section>

                {/* ───── Call to Action ───── */}
                <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-8 rounded-lg shadow-lg text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Build flawless boards, every run.
                    </h2>
                    <p className="text-lg mb-6">
                        See PrompX on your own SMT footage — book a live demo.
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

export default VLMElectronicsQualityInspectionWhitePaper;
