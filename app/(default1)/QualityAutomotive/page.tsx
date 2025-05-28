"use client";
import React, { useState, useEffect } from 'react';
import { Camera, Cpu, Shield, Zap, Eye, MessageCircle, MapPin, Scan, ArrowRight, Play, CheckCircle, AlertTriangle, BarChart3 } from 'lucide-react';

const VLMQualityInspectionPlatform = () => {
    const [isVisible, setIsVisible] = useState({});
    const [currentDemo, setCurrentDemo] = useState(0);
    const [activeFeature, setActiveFeature] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(prev => ({
                            ...prev,
                            [entry.target.id]: true
                        }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('[id]').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const demoFrames = [
        { type: 'scanning', defects: 0, status: 'Scanning...' },
        { type: 'detected', defects: 3, status: 'Defects Found' },
        { type: 'analyzed', defects: 3, status: 'Analysis Complete' }
    ];

    const features = [
        {
            icon: <Eye className="w-8 h-8" />,
            title: "500M+ Parameter VLMs",
            description: "Advanced visual-language models that understand both images and natural language instructions",
            metric: "99.7% Accuracy"
        },
        {
            icon: <Camera className="w-8 h-8" />,
            title: "Multi-Camera Fusion",
            description: "CCTV, inline sensors, mobile devices, and LiDAR unified in real-time",
            metric: "< 100ms Response"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "On-Prem Security",
            description: "Air-gapped deployment keeps your IP and data completely private",
            metric: "Zero Cloud Exposure"
        },
        {
            icon: <MessageCircle className="w-8 h-8" />,
            title: "Conversational AI",
            description: "Chat with your factory floor - ask questions, get instant visual answers",
            metric: "Natural Language"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDemo((prev) => (prev + 1) % demoFrames.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % features.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden pt-20">
            {/* Added 'pt-12' to create space at the top */}
            {/* Animated Background */}
            <div className="fixed inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${2 + Math.random() * 3}s`
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">

                                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                        Visual-Language
                                    </span>
                                    <br />
                                    <span className="text-white">Intelligence</span>
                                    <br />
                                    <span className="text-2xl lg:text-3xl font-normal text-blue-300">
                                        for Automotive Manufacturing
                                    </span>
                                </h1>
                                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                                    Deploy 500M+ parameter VLMs on-premises. Turn every camera into an intelligent inspector
                                    that flags defects in real-time and lets your team chat with the factory floor.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                                    <span className="flex items-center">
                                        Schedule Demo
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                                <button className="group px-8 py-4 border border-blue-400/30 rounded-full font-semibold hover:bg-blue-500/10 transition-all duration-300 backdrop-blur-sm">
                                    <span className="flex items-center">
                                        <Play className="w-5 h-5 mr-2" />
                                        Watch Demo
                                    </span>
                                </button>
                            </div>

                            <div className="grid grid-cols-3 gap-6 pt-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-400 mb-1">99.7%</div>
                                    <div className="text-sm text-gray-400">Accuracy Rate</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-400 mb-1">&lt;100ms</div>
                                    <div className="text-sm text-gray-400">Response Time</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-400 mb-1">Zero</div>
                                    <div className="text-sm text-gray-400">Cloud Exposure</div>
                                </div>
                            </div>
                        </div>

                        {/* Animated Demo Panel */}
                        <div className="relative">
                            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-blue-400/20 backdrop-blur-sm">
                                <img
                                    src="/Capture2.jpg"
                                    alt="Live Quality Monitor"
                                    className="rounded-2xl w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-6 relative">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Intelligent Vision
                            </span>
                            <br />
                            <span className="text-white">Beyond Human Capability</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Revolutionary VLM technology that transforms every camera into a conversational quality expert
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`group p-6 rounded-2xl transition-all duration-500 cursor-pointer ${activeFeature === index
                                        ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 transform scale-105'
                                        : 'bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50'
                                        }`}
                                    onClick={() => setActiveFeature(index)}
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className={`p-3 rounded-lg ${activeFeature === index
                                            ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                                            : 'bg-slate-700'
                                            } transition-all duration-300`}>
                                            {feature.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-xl font-semibold">{feature.title}</h3>
                                                <span className="text-sm text-blue-400 font-medium">{feature.metric}</span>
                                            </div>
                                            <p className="text-gray-300">{feature.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-blue-400/20">
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-2xl font-bold">Real-Time Analytics</h3>
                                        <BarChart3 className="w-6 h-6 text-blue-400" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-slate-700/50 rounded-lg p-4">
                                            <div className="text-2xl font-bold text-green-400 mb-1">847</div>
                                            <div className="text-sm text-gray-400">Parts Inspected</div>
                                        </div>
                                        <div className="bg-slate-700/50 rounded-lg p-4">
                                            <div className="text-2xl font-bold text-red-400 mb-1">3</div>
                                            <div className="text-sm text-gray-400">Defects Found</div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-300">Detection Accuracy</span>
                                            <span className="text-sm font-medium text-green-400">99.7%</span>
                                        </div>
                                        <div className="w-full bg-slate-700 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full w-[99.7%]"></div>
                                        </div>
                                    </div>

                                    <div className="border-t border-slate-600 pt-4">
                                        <div className="text-sm text-gray-300 mb-2">Recent Queries:</div>
                                        <div className="space-y-2">
                                            <div className="text-sm bg-slate-700/30 rounded p-2">
                                                "Show bearing defects from Station 4"
                                            </div>
                                            <div className="text-sm bg-slate-700/30 rounded p-2">
                                                "Trace batch #47291 quality issues"
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section id="process" className="py-20 px-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-6">
                            <span className="text-white">Deploy in</span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Weeks, Not Months
                            </span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: <Scan className="w-8 h-8" />, title: "Discovery", desc: "Audit cameras, network, and quality KPIs" },
                            { icon: <Cpu className="w-8 h-8" />, title: "Adaptation", desc: "Fine-tune VLMs on your defect catalog" },
                            { icon: <Shield className="w-8 h-8" />, title: "Deployment", desc: "Install edge clusters next to production" },
                            { icon: <CheckCircle className="w-8 h-8" />, title: "Go-Live", desc: "Train operators and monitor performance" }
                        ].map((step, index) => (
                            <div key={index} className="text-center group">
                                <div className="relative mb-6">
                                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>
                                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-sm font-bold text-slate-900">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-300">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold mb-6">
                                Ready to Transform Your Quality Inspection?
                            </h2>
                            <p className="text-xl mb-8 text-blue-100">
                                See our VLM technology in action with your own production footage
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                                    Schedule Live Demo
                                </button>
                                <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                                    Download Whitepaper
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VLMQualityInspectionPlatform;