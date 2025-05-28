import React from 'react';

const BeverageQualityInspectionWhitePaper: React.FC = () => {
    return (
        <div className="bg-white font-sans py-16">
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Title Section */}
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center animate-fade-in">
                    AI-Powered Quality Inspection for Beverage Manufacturing
                </h1>
                <p className="text-lg text-gray-600 text-center mb-12">
                    Ensuring Safety, Consistency, and Compliance with Advanced Computer Vision and Machine Learning
                </p>

                {/* Executive Summary */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">Executive Summary</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Beverage manufacturing demands uncompromising quality to ensure product safety, consistency, and compliance with stringent regulatory standards. Defects such as bottle cracks, improper fill levels, or labeling errors can lead to health risks, costly recalls, and brand damage. Prompx’s AI-powered quality inspection system leverages advanced computer vision, machine learning, and IoT integration to deliver unparalleled defect detection with 99.9% accuracy, 0.5ms processing speeds, and scalable architecture. Tailored for beverage production, our solution provides real-time monitoring, actionable insights, and compliance with standards like FDA and HACCP, empowering manufacturers to optimize quality and efficiency.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <img src="/placeholder-intro.jpg" alt="Beverage Production Line" className="rounded-lg shadow-lg max-w-full h-auto" />
                    </div>
                </section>

                {/* Industry Challenges */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">Industry Challenges</h2>
                    <p className="text-gray-700 mb-4">
                        Beverage manufacturers face unique challenges in maintaining quality across high-speed production lines:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li><strong>Contamination Risks</strong>: Foreign objects, microbial contamination, or packaging defects pose significant health and safety risks.</li>
                        <li><strong>High-Throughput Production</strong>: Bottling lines processing thousands of units per hour require rapid, accurate inspections to maintain efficiency.</li>
                        <li><strong>Regulatory Compliance</strong>: Strict adherence to FDA, HACCP, and EU food safety regulations demands robust documentation and traceability.</li>
                        <li><strong>Packaging Variability</strong>: Variations in bottle shapes, sizes, or labeling materials complicate consistent quality control across diverse product lines.</li>
                    </ul>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <img src="/placeholder-challenge1.jpg" alt="Bottle Defect" className="rounded-lg shadow-md" />
                        <img src="/placeholder-challenge2.jpg" alt="Beverage Bottling Line" className="rounded-lg shadow-md" />
                    </div>
                </section>

                {/* Technical Solution */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">Our Technical Solution</h2>
                    <p className="text-gray-700 mb-4">
                        Prompx’s quality inspection platform integrates advanced AI technologies to address beverage manufacturing challenges, delivering a robust, scalable, and secure solution.
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Core Components</h3>
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">1. Computer Vision Models</h4>
                            <p className="text-gray-700">
                                Our system employs deep convolutional neural networks (CNNs) with over 500 million parameters, pre-trained on diverse beverage packaging datasets. These models achieve 99.9% accuracy in detecting defects like bottle cracks, improper fill levels, or misaligned labels. Transfer learning enables fine-tuning for specific products, such as glass bottles or aluminum cans, using high-resolution imaging and CAD data for precise validation.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">2. Real-Time Processing</h4>
                            <p className="text-gray-700">
                                Optimized inference engines process high-resolution images at 0.5ms per frame, enabling inspection of thousands of bottles per minute. Edge computing ensures low-latency analysis, with on-premises processing for data security and compliance with GDPR and FDA regulations.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">3. IoT Integration</h4>
                            <p className="text-gray-700">
                                IoT sensors monitor environmental factors like temperature, pressure, or liquid viscosity, which impact product quality. Real-time data fusion with visual inspections identifies defect root causes, enhancing traceability across the supply chain.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">4. Cross-Platform Application</h4>
                            <p className="text-gray-700">
                                A React-based application, deployable on desktop and mobile (iOS, Android), delivers real-time visualizations of production lines, defect alerts, and analytics dashboards. WebSocket integration ensures live updates, with offline capabilities for robust operation in variable production environments.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-center">
                        <img src="/placeholder-solution.jpg" alt="AI Inspection System" className="rounded-lg shadow-lg max-w-full h-auto" />
                    </div>
                </section>

                {/* Implementation Process */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">Implementation Process</h2>
                    <p className="text-gray-700 mb-4">
                        Our streamlined process ensures rapid deployment and seamless integration into beverage production environments.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                            <img src="/placeholder-step1.jpg" alt="Step 1" className="mb-4 rounded-md" />
                            <h4 className="text-xl font-semibold text-blue-600 mb-2">1. Requirements Analysis</h4>
                            <p className="text-gray-700">
                                We collaborate with your team to map production workflows, identify critical quality metrics, and assess hardware needs like high-resolution cameras or streamline inspection systems.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                            <img src="/placeholder-step2.jpg" alt="Step 2" className="mb-4 rounded-md" />
                            <h4 className="text-xl font-semibold text-blue-600 mb-2">2. Model Customization</h4>
                            <p className="text-gray-700">
                                AI models are fine-tuned using sample product data and defect patterns, optimizing performance for specific beverages like carbonated drinks or juices.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                            <img src="/placeholder-step3.jpg" alt="Step 3" className="mb-4 rounded-md" />
                            <h4 className="text-xl font-semibold text-blue-600 mb-2">3. Hardware Integration</h4>
                            <p className="text-gray-700">
                                Flexible hardware options (CCTV, streamline cameras, mobile devices) are supported, with plug-and-play software for easy installation in bottling lines.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                            <img src="/placeholder-step4.jpg" alt="Step 4" className="mb-4 rounded-md" />
                            <h4 className="text-xl font-semibold text-blue-600 mb-2">4. Deployment & Support</h4>
                            <p className="text-gray-700">
                                The system is deployed with a custom app, continuous monitoring, and 24/7 support, ensuring 99.9% uptime and ongoing model optimization.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Advanced Features */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">Advanced Features</h2>
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">Predictive Analytics</h4>
                            <p className="text-gray-700">
                                Machine learning models analyze historical defect data to predict issues like contamination risks or equipment failures, reducing scrap rates by up to 30%.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">Augmented Reality (AR) Visualization</h4>
                            <p className="text-gray-700">
                                AR overlays highlight defect locations on bottles or packaging, enabling operators to address issues in real-time, improving inspection efficiency.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">Blockchain Traceability</h4>
                            <p className="text-gray-700">
                                Immutable quality records ensure compliance with FDA and HACCP standards, providing auditable transparency for raw material sourcing and production.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-blue-600">Sustainability Metrics</h4>
                            <p className="text-gray-700">
                                IoT-driven analytics track water usage, energy consumption, and packaging waste, supporting eco-friendly production and compliance with sustainability goals.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-center">
                        <img src="/placeholder-advanced.jpg" alt="Advanced Features" className="rounded-lg shadow-lg max-w-full h-auto" />
                    </div>
                </section>

                {/* Cat Inspectors Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">Our Precision Inspectors</h2>
                    <p className="text-gray-700 mb-4">
                        Our feline team embodies our commitment to perfection. Meet the cats who inspire our pursuit of flawless beverage quality!
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <img src="/placeholder-cat1.jpg" alt="Cat Inspector 1" className="rounded-lg shadow-md hover:scale-105 transition duration-300" />
                        <img src="/placeholder-cat2.jpg" alt="Cat Inspector 2" className="rounded-lg shadow-md hover:scale-105 transition duration-300" />
                        <img src="/placeholder-cat3.jpg" alt="Cat Inspector 3" className="rounded-lg shadow-md hover:scale-105 transition duration-300" />
                    </div>
                </section>

        /* Case Study */
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">Case Study: PureFlow Beverages</h2>
                    <p className="text-gray-700">
                        PureFlow Beverages, a leading producer of bottled water and soft drinks, integrated Prompx’s AI system to address issues with bottle integrity and labeling errors. Using high-resolution streamline cameras and custom-trained CNNs, they achieved:
                        <ul className="list-disc list-inside mt-4 space-y-2">
                            <li>50% reduction in defective bottles within two months.</li>
                            <li>20% increase in production throughput due to faster inspections.</li>
                            <li>Full compliance with FDA and HACCP audit requirements.</li>
                            <li>Real-time defect alerts via a mobile app, reducing response time by 40%.</li>
                        </ul>
                    </p>
                    <div className="mt-8 flex justify-center">
                        <img src="/placeholder-casestudy.jpg" alt="Case Study Result" className="rounded-lg shadow-lg max-w-full h-auto" />
                    </div>
                </section>

        /* Conclusion */
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">Conclusion</h2>
                    <p className="text-gray-700">
                        Prompx’s AI-powered quality inspection system redefines quality control for beverage manufacturers. By integrating high-accuracy computer vision, real-time processing, and advanced features like predictive analytics and blockchain traceability, we empower manufacturers to ensure product safety, reduce waste, and maintain compliance. Our tailored approach delivers seamless integration, scalability, and ongoing support, making Prompx the ideal partner for driving innovation in beverage manufacturing.
                    </p>
                </section>

        /* Call to Action */
                <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-8 rounded-lg shadow-lg text-center">
                    <h2 className="text-3xl font-bold mb-4">Transform Your Beverage Quality Today</h2>
                    <p className="text-lg mb-6">
                        Discover how Prompx can elevate your beverage manufacturing process with a personalized demo.
                    </p>
                    <a href="/contact" className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-blue-100 transition duration-300 shadow-md">
                        Schedule a Demo
                    </a>
                </section>
            </div>

      /* Inline CSS for Animations */
            <style>
                {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 1s ease-in-out;
          }
        `}
            </style>
        </div>
    );
};

export default BeverageQualityInspectionWhitePaper;