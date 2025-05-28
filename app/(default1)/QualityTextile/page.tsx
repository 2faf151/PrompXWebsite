import React from 'react';

/**
 * White-paper style marketing page for PrompX’s
 * Visual-Language-Model (VLM) Quality-Inspection platform
 * tailored to the **textile** industry.
 *
 * Highlights:
 * • ≥500 M-parameter VLMs running on-prem for privacy
 * • Detects weave defects, colour variance, lint, oil stains, mis-prints
 * • Works with roll-to-roll inline cameras, CCTV, mobile & LiDAR
 * • CAD-to-plant mapping + AR overlays + conversational search
 */
const VLMTextileQualityInspectionWhitePaper: React.FC = () => {
    return (
        <div className="bg-white font-sans py-16">
            <div className="container mx-auto px-6 max-w-4xl">

                {/* ───────────────────────── Title ───────────────────────── */}
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center animate-fade-in">
                    Visual-Language-Model&nbsp;AI-Quality&nbsp;Inspection
                    for <span className="whitespace-nowrap">Textile&nbsp;Manufacturing</span>
                </h1>
                <p className="text-lg text-gray-600 text-center mb-12">
                    Identify weave defects, colour drift and contamination&nbsp;—
                    instantly and privately — with on-prem VLMs that
                    <em>see&nbsp;and&nbsp;understand</em> every fabric metre.
                </p>

                {/* ───────────────────── Executive Summary ───────────────────── */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">
                        Executive Summary
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        From high-speed looms to dye houses, textiles face relentless
                        quality pressure. PrompX introduces ≥500 M-parameter
                        <strong>Visual-Language Models</strong> (VLMs)
                        that run entirely on-site. Any inline line-scan camera,
                        CCTV feed, or smartphone becomes an intelligent inspector.
                        The system flags broken weft, mis-prints, shade variation,
                        lint or oil spots in real-time, then notifies operators
                        and highlights defects with augmented-reality (AR) cues.
                        Engineers can <strong>chat</strong> with the VLM —
                        “Show all shade shifts  ΔE 2 today” —
                        and see the answer on an interactive plant map built
                        from your CAD drawings.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <img
                            src="/placeholder-textile-exec.jpg"
                            alt="VLM inspecting fabric roll"
                            className="rounded-lg shadow-lg max-w-full h-auto"
                        />
                    </div>
                </section>

                {/* ───────────────────── Industry Challenges ───────────────────── */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">
                        Industry Challenges
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Textile mills juggle delicate fibres, dyes and finishes
                        while meeting tight lead times:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li><strong>Sub-millimetre defects</strong> such as slubs, holes, float, dropped stitches.</li>
                        <li><strong>Colour consistency</strong> where ΔE tolerance is measured in tenths.</li>
                        <li><strong>High-speed rolls</strong> up to 100 m/min require instant detection.</li>
                        <li><strong>Sustainability & waste</strong> demand early defect capture to cut scrap.</li>
                        <li><strong>Data confidentiality</strong> for branded prints and proprietary blends.</li>
                    </ul>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <img
                            src="/placeholder-textile1.jpg"
                            alt="Fabric inspection close-up"
                            className="rounded-lg shadow-md"
                        />
                        <img
                            src="/placeholder-textile2.jpg"
                            alt="High-speed loom line"
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </section>

                {/* ───────────────────── Technical Solution ───────────────────── */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">
                        Our Technical Solution
                    </h2>
                    <p className="text-gray-700 mb-4">
                        PrompX combines large VLMs, edge compute and intuitive UIs
                        into one fabric-focused quality brain.
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
                                ≥500 M-parameter models interpret images and text
                                together. Fine-tuned on textile defect libraries
                                (weave, knit, dye, print) they detect flaws and
                                understand free-form queries.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">
                                2&nbsp;&nbsp;Inline & Overhead Cameras
                            </h4>
                            <p className="text-gray-700">
                                Integrates with roll-to-roll line-scan cameras,
                                stroboscopic strobes, CCTV and mobile phones.
                                LiDAR add-on measures pile height and surface warp.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">
                                3&nbsp;&nbsp;On-Prem Privacy
                            </h4>
                            <p className="text-gray-700">
                                All inference runs on your GPUs – no internet,
                                no cloud – protecting customer designs and
                                proprietary colour recipes.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">
                                4&nbsp;&nbsp;CAD-Driven Plant Mapping
                            </h4>
                            <p className="text-gray-700">
                                Upload weaving-shed and dye-house CAD files once;
                                a live map then pinpoints any station with
                                quality alarms.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">
                                5&nbsp;&nbsp;Conversational Control
                            </h4>
                            <p className="text-gray-700">
                                Ask&nbsp;“List rolls with oil stains this shift” or
                                “Locate loom with most warp-breaks” and see instant,
                                visual answers.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <img
                            src="/placeholder-textile-solution.jpg"
                            alt="Fabric defect dashboard"
                            className="rounded-lg shadow-lg max-w-full h-auto"
                        />
                    </div>
                </section>

                {/* ───────────────── Implementation Process ───────────────── */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">
                        Implementation Process
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Four steps from first sample to mill-wide guardianship.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                            <img src="/placeholder-step1.jpg" alt="Discovery" className="mb-4 rounded-md" />
                            <h4 className="text-xl font-semibold text-blue-600 mb-2">
                                1&nbsp;&nbsp;Discovery & Sampling
                            </h4>
                            <p className="text-gray-700">
                                Capture representative fabric images, shade cards,
                                CAD layouts, quality KPIs.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                            <img src="/placeholder-step2.jpg" alt="Adaptation" className="mb-4 rounded-md" />
                            <h4 className="text-xl font-semibold text-blue-600 mb-2">
                                2&nbsp;&nbsp;Model Adaptation
                            </h4>
                            <p className="text-gray-700">
                                Fine-tune VLMs on weave/knit patterns and colour
                                profiles unique to your mill.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                            <img src="/placeholder-step3.jpg" alt="Deployment" className="mb-4 rounded-md" />
                            <h4 className="text-xl font-semibold text-blue-600 mb-2">
                                3&nbsp;&nbsp;Edge Deployment
                            </h4>
                            <p className="text-gray-700">
                                Install GPU nodes near looms, stenters and inspection
                                tables; stream feeds via secured LAN.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                            <img src="/placeholder-step4.jpg" alt="Training" className="mb-4 rounded-md" />
                            <h4 className="text-xl font-semibold text-blue-600 mb-2">
                                4&nbsp;&nbsp;Operator Training
                            </h4>
                            <p className="text-gray-700">
                                Staff receive AR tablets and conversational dashboards;
                                we monitor drift and expand to suppliers.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ───────────────────── Advanced Features ───────────────────── */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">
                        Advanced Features
                    </h2>
                    <div className="space-y-6">

                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">
                                Shade-Drift Analytics
                            </h4>
                            <p className="text-gray-700">
                                Track ΔE across every metre; trigger alerts before
                                batches drift out of spec.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">
                                AR Repair Guidance
                            </h4>
                            <p className="text-gray-700">
                                Overlays on fabric show defect coordinates and
                                recommended corrective actions.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">
                                LiDAR Surface Profiling
                            </h4>
                            <p className="text-gray-700">
                                Detect raised knots, tuft height, or emboss depth
                                with smartphone LiDAR scans.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">
                                Supplier Portal
                            </h4>
                            <p className="text-gray-700">
                                Lightweight agent for greige or dyeing partners
                                lets you inspect fabric before shipment.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <img
                            src="/placeholder-textile-advanced.jpg"
                            alt="Shade analytics graph"
                            className="rounded-lg shadow-lg max-w-full h-auto"
                        />
                    </div>
                </section>

                {/* ───────────────────────── Conclusion ───────────────────────── */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">
                        Conclusion
                    </h2>
                    <p className="text-gray-700">
                        PrompX brings conversational, camera-agnostic VLMs
                        to the textile floor — slashing waste, boosting first-pass
                        yield, and safeguarding brand colour integrity without
                        compromising data privacy.
                    </p>
                </section>

                {/* ─────────────────────── Call to Action ─────────────────────── */}
                <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-8 rounded-lg shadow-lg text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Spin a perfect fabric, every time.
                    </h2>
                    <p className="text-lg mb-6">
                        Request a live demo on your own loom footage.
                    </p>
                    <a
                        href="/contact"
                        className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-blue-100 transition duration-300 shadow-md"
                    >
                        Schedule a Demo
                    </a>
                </section>
            </div>

            {/* ─────────────────── Inline Animation CSS ─────────────────── */}
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

export default VLMTextileQualityInspectionWhitePaper;
