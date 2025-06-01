"use client";

import { useState, useEffect } from 'react';
import { Camera, Cpu, CheckCircle, Zap, Shield, BarChart, Upload, Eye, Scan, Monitor } from 'lucide-react';
import { MdSpeakerPhone, MdOutlineCameraRear } from 'react-icons/md';
import { GiCctvCamera } from 'react-icons/gi';


// Extend File interface to include base64 property
interface ExtendedFile extends File {
    base64?: string;
}

export default function QualityHome() {
    // State for image upload and API interaction
    const [selectedImage, setSelectedImage] = useState<ExtendedFile | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [damageDescription, setDamageDescription] = useState<string>('');
    const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [imageDimensions, setImageDimensions] = useState<{
        natural: { width: number; height: number };
        display: { width: number; height: number };
    }>({
        natural: { width: 0, height: 0 },
        display: { width: 0, height: 0 }
    });

    const [containerDimensions, setContainerDimensions] = useState<{
        width: number;
        height: number;
    }>({
        width: 0,
        height: 0
    });

    // Add state for caption
    const [caption, setCaption] = useState<string | null>(null);

    // Handle file selection and Base64 encoding
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // Validate file type and size (max 10MB for safety)
            const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif'];
            if (!validTypes.includes(file.type)) {
                setError('Please upload a valid image (JPG, PNG, WEBP, GIF, or AVIF).');
                return;
            }
            if (file.size > 10 * 1024 * 1024) {
                setError('Image size exceeds 10MB. Please upload a smaller image.');
                return;
            }

            const extendedFile: ExtendedFile = file;
            setSelectedImage(extendedFile);
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
            setPoints([]); // Reset points when a new image is selected
            setError(null);

            // Convert image to Base64
            const reader = new FileReader();
            reader.onload = () => {
                const base64String = reader.result?.toString();
                if (base64String) {
                    extendedFile.base64 = base64String;
                    setSelectedImage({ ...extendedFile });
                } else {
                    setError('Failed to encode image. Please try another image.');
                }
            };
            reader.onerror = () => {
                setError('Failed to read image. Please try another image.');
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle description change
    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDamageDescription(event.target.value);
    };

    // Handle API call to Moondream API with retry logic
    const handleAnalyze = async () => {
        if (!selectedImage || !damageDescription) {
            setError('Please select an image and enter a description.');
            return;
        }
        if (!selectedImage.base64) {
            setError('Image encoding failed. Please try another image.');
            return;
        }
        if (!process.env.NEXT_PUBLIC_MOONDREAM_API_KEY) {
            setError('Invalid API key. Please configure a valid Moondream API key.');
            return;
        }

        const apiKey = process.env.NEXT_PUBLIC_MOONDREAM_API_KEY;

        setLoading(true);
        setError(null);

        try {
            // Call the point API
            const pointResponse = await fetch('https://api.moondream.ai/v1/point', {
                method: 'POST',
                headers: {
                    'X-Moondream-Auth': apiKey,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    image_url: selectedImage.base64,
                    object: damageDescription,
                    stream: false,
                }),
            });

            if (!pointResponse.ok) {
                const errorText = await pointResponse.text();
                throw new Error(`Point API request failed with status ${pointResponse.status}: ${errorText}`);
            }

            const pointData = await pointResponse.json();
            setPoints(pointData.points || []);

            // Call the caption API
            const captionResponse = await fetch('https://api.moondream.ai/v1/caption', {
                method: 'POST',
                headers: {
                    'X-Moondream-Auth': apiKey,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    image_url: selectedImage.base64,
                }),
            });

            if (!captionResponse.ok) {
                const errorText = await captionResponse.text();
                throw new Error(`Caption API request failed with status ${captionResponse.status}: ${errorText}`);
            }

            const captionData = await captionResponse.json();
            setCaption(captionData.caption || null);

        } catch (err: any) {
            setError(`Failed to analyze image: ${err.message}. Try again later.`);
            console.error('API Error:', err);
        } finally {
            setLoading(false);
        }
    };

    // Update the handleImageLoad function
    const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
        const img = event.currentTarget;
        const container = img.parentElement;
        if (!container) return;

        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        setContainerDimensions({ width: containerWidth, height: containerHeight });

        // Calculate display dimensions maintaining aspect ratio
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        let displayWidth = containerWidth;
        let displayHeight = containerWidth / aspectRatio;

        if (displayHeight > containerHeight) {
            displayHeight = containerHeight;
            displayWidth = containerHeight * aspectRatio;
        }

        setImageDimensions({
            natural: {
                width: img.naturalWidth,
                height: img.naturalHeight
            },
            display: {
                width: displayWidth,
                height: displayHeight
            }
        });
    };

    // Clean up object URL
    useEffect(() => {
        return () => {
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);

    return (
        <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 min-h-screen text-white">
            {/* Hero Section */}
            <header className="container mx-auto px-6 pt-24 pb-8">
                <div className="text-center mb-8">
                    <div className="flex flex-col items-center">
                        <h1 className="text-7xl font-black mb-2 bg-gradient-to-r from-blue-400 via-white to-blue-300 bg-clip-text text-transparent">
                            <span className="text-2xl block ">Vision-Language Models</span>
                            AI Quality Inspection

                        </h1>
                    </div>
                    <p className="text-xl max-w-3xl mx-auto text-blue-200/80 leading-relaxed">
                        VLMs redefine inspection — vision and language, perfectly aligned.
                    </p>
                </div>

                {/* Main Analysis Dashboard */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                        {/* Upload Section - Left Column */}
                        <div className="xl:col-span-2 space-y-6">
                            {/* Image Upload Card */}
                            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 shadow-2xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <Upload className="w-6 h-6 text-blue-400" />
                                    <h2 className="text-2xl font-bold text-white">Experience AI Quality Inspection</h2>
                                </div>

                                {/* Image Preview Area */}
                                <div className="relative w-full h-80 mb-6 bg-gradient-to-br from-slate-900/50 to-blue-900/20 rounded-xl border-2 border-dashed border-blue-400/30 overflow-hidden group hover:border-blue-400/60 transition-all duration-300">
                                    {previewUrl ? (
                                        <>
                                            <img
                                                src={previewUrl}
                                                alt="Uploaded preview"
                                                className="w-full h-full object-contain"
                                                onLoad={handleImageLoad}
                                            />
                                            {/* Overlay for new upload */}
                                            <label className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
                                                <div className="text-center">
                                                    <Upload className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                                                    <span className="text-blue-200">Change Image</span>
                                                </div>
                                                <input
                                                    type="file"
                                                    accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
                                                    onChange={handleFileChange}
                                                    className="hidden"
                                                />
                                            </label>
                                        </>
                                    ) : (
                                        <label className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group-hover:bg-blue-900/10 transition-colors">
                                            <div className="p-6 rounded-full bg-blue-500/20 mb-4 group-hover:bg-blue-500/30 transition-colors">
                                                <Upload className="w-12 h-12 text-blue-400" />
                                            </div>
                                            <span className="text-lg font-semibold text-blue-200 mb-2">Upload Image</span>
                                            <span className="text-sm text-blue-300/70">Drag & drop or click to browse</span>
                                            <input
                                                type="file"
                                                accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
                                                onChange={handleFileChange}
                                                className="hidden"
                                            />
                                        </label>
                                    )}

                                    {/* Quality Issue Points */}
                                    {points.map((point, index) => (
                                        <div
                                            key={index}
                                            className="absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2"
                                            style={{
                                                left: `${(point.x * imageDimensions.display.width) +
                                                    ((containerDimensions.width - imageDimensions.display.width) / 2)}px`,
                                                top: `${(point.y * imageDimensions.display.height) +
                                                    ((containerDimensions.height - imageDimensions.display.height) / 2)}px`,
                                            }}
                                        >
                                            <div className="w-6 h-6 bg-red-500 rounded-full animate-ping opacity-75"></div>
                                            <div className="absolute inset-0 w-6 h-6 bg-red-400 rounded-full border-2 border-white shadow-lg"></div>
                                        </div>
                                    ))}
                                </div>

                                {/* Input and Analyze Section */}
                                <div className="space-y-4">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={damageDescription}
                                            onChange={handleDescriptionChange}
                                            placeholder="Describe the defect or quality issue to detect..."
                                            className="w-full p-4 bg-slate-800/50 text-white rounded-xl border border-blue-500/30 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 placeholder-blue-300/50 transition-all"
                                        />
                                        <Scan className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400/60" />
                                    </div>

                                    <button
                                        onClick={handleAnalyze}
                                        disabled={loading}
                                        className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-bold hover:from-blue-500 hover:to-blue-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-500/25 hover:shadow-xl transform hover:-translate-y-0.5"
                                    >
                                        {loading ? (
                                            <div className="flex items-center justify-center gap-2">
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                Analyzing...
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center gap-2">
                                                <Eye className="w-5 h-5" />
                                                Detect Quality Issues
                                            </div>
                                        )}
                                    </button>

                                    {error && (
                                        <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-200">
                                            {error}
                                        </div>
                                    )}

                                    {/* Add caption display under the "Detect Quality Issues" button */}
                                    {caption && (
                                        <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl text-blue-200">
                                            <h3 className="text-lg font-semibold mb-2">Generated Caption:</h3>
                                            <p>{caption}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="space-y-6">
                            {/* Live Monitoring Card */}
                            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 shadow-2xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <Monitor className="w-6 h-6 text-blue-400" />
                                    <h3 className="text-xl font-bold text-white">Live Stream</h3>
                                </div>

                                <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                                    <img
                                        src="/cctv.gif"
                                        alt="CCTV Monitoring"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                                <span className="text-green-400 text-sm font-semibold">LIVE</span>
                                            </div>
                                            <p className="text-white text-sm">Real-time Quality Monitoring</p>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-blue-200/80 text-sm">
                                    Watch AI-powered inspection systems analyzing products in real-time
                                </p>
                            </div>

                            {/* Feature Cards */}
                            <div className="space-y-3">
                                {[
                                    {
                                        icon: <MdSpeakerPhone className="w-5 h-5" />,
                                        title: "Mobile ",
                                        desc: "AI scan via phone camera & lidar",
                                        color: "from-blue-500/20 to-cyan-500/20 border-blue-400/30"
                                    },
                                    {
                                        icon: <MdOutlineCameraRear className="w-5 h-5" />,
                                        title: "Inline Camera",
                                        desc: "AI check via inline scanner",
                                        color: "from-purple-500/20 to-blue-500/20 border-purple-400/30"
                                    },
                                    {
                                        icon: <GiCctvCamera className="w-5 h-5" />,
                                        title: "CCTV ",
                                        desc: "AI detects issues via CCTV",
                                        color: "from-green-500/20 to-blue-500/20 border-green-400/30"
                                    }



                                ].map((item, i) => (
                                    <div key={i} className={`bg-gradient-to-r ${item.color} backdrop-blur-sm border rounded-xl p-4 hover:scale-105 transition-all duration-300 group`}>
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                                                <p className="text-blue-200/70 text-xs">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center mt-16 mb-10">
                        <a
                            href="/ContactQuality"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-white to-blue-50 text-slate-900 rounded-xl font-bold hover:from-blue-50 hover:to-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-1"
                        >

                            Schedule Demo
                        </a>
                    </div>
                </div>
            </header>

            {/* Stats and Content Section */}
            <main className="bg-gradient-to-b from-white to-blue-50 text-slate-900 rounded-t-3xl -mt-8 relative z-10">
                <div className="container mx-auto px-6 py-20">
                    {/* Stats Section */}
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {[
                            { value: "99.9%", label: "Detection Accuracy", color: "text-blue-600" },
                            { value: "0.5ms", label: "Processing Speed", color: "text-purple-600" },
                            { value: "24/7", label: "Uptime Monitoring", color: "text-green-600" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                                <div className={`text-5xl font-black mb-3 ${stat.color}`}>{stat.value}</div>
                                <div className="text-slate-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </section>

                    {/* How It Works */}
                    <section className="mb-20 max-w-4xl mx-auto">
                        <h2 className="text-5xl font-black text-center mb-16 text-slate-900">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Journey to Excellence
                            </span>
                        </h2>
                        <div className="relative">
                            {/* Enhanced gradient line with glow effect */}
                            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full opacity-30 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>

                            <div className="space-y-12">
                                {[
                                    {
                                        icon: <CheckCircle className="w-6 h-6" />,
                                        title: "Requirements Analysis",
                                        desc: "Custom specifications for your industry",
                                        color: "bg-blue-500",
                                        gradient: "from-blue-500 to-cyan-400"
                                    },
                                    {
                                        icon: <Scan className="w-6 h-6" />,
                                        title: "Discovery",
                                        desc: "Audit cameras, network, and quality KPIs",
                                        color: "bg-purple-500",
                                        gradient: "from-purple-500 to-pink-400"
                                    },
                                    {
                                        icon: <Cpu className="w-6 h-6" />,
                                        title: "AI Model Selection",
                                        desc: "Choose from our suite of specialized vision models",
                                        color: "bg-indigo-500",
                                        gradient: "from-indigo-500 to-blue-400"
                                    },
                                    {
                                        icon: <BarChart className="w-6 h-6" />,
                                        title: "Model Fine-tuning",
                                        desc: "Custom training with your product specifications",
                                        color: "bg-cyan-500",
                                        gradient: "from-cyan-500 to-teal-400"
                                    },
                                    {
                                        icon: <Monitor className="w-6 h-6" />,
                                        title: "System Deployment",
                                        desc: "Cross-platform integration: Admin, CCTV, Mobile & Inline",
                                        color: "bg-teal-500",
                                        gradient: "from-teal-500 to-green-400"
                                    },
                                    {
                                        icon: <Zap className="w-6 h-6" />,
                                        title: "Go Live",
                                        desc: "Seamless integration and 24/7 monitoring",
                                        color: "bg-green-500",
                                        gradient: "from-green-500 to-emerald-400"
                                    }
                                ].map((step, i) => (
                                    <div key={i} className="flex items-start group">
                                        <div className="w-16 flex justify-center relative">
                                            <div className={`w-4 h-4 rounded-full ${step.color} group-hover:scale-150 transition-all duration-500 shadow-lg shadow-${step.color}/50`}></div>
                                        </div>
                                        <div className="flex-1 ml-6 bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 group-hover:border-blue-100">
                                            <div className="flex items-start gap-4">
                                                <div className={`p-3 bg-gradient-to-r ${step.gradient} text-white rounded-lg transform group-hover:scale-110 transition-all duration-300`}>
                                                    {step.icon}
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-xl text-slate-900 mb-2">{step.title}</h3>
                                                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Benefits Section */}
                    <section className="mb-20">
                        <h2 className="text-5xl font-black text-center mb-16">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                The Future of Quality Control
                            </span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
                                <div className="relative bg-slate-900 p-8 rounded-2xl border border-blue-500/30">
                                    <div className="mb-6 inline-block p-3 bg-blue-500/10 rounded-xl">
                                        <Eye className="w-8 h-8 text-blue-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Smart Vision Technology</h3>
                                    <p className="text-blue-200 leading-relaxed mb-6">
                                        Our system sees what humans can't, processing visual data with unprecedented accuracy
                                        right where production happens - no cloud required.
                                    </p>
                                    <div className="flex items-center text-blue-300 text-sm">
                                        <Shield className="w-4 h-4 mr-2" />
                                        <span>100% On-Premise Processing</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
                                <div className="relative bg-slate-900 p-8 rounded-2xl border border-purple-500/30">
                                    <div className="mb-6 inline-block p-3 bg-purple-500/10 rounded-xl">
                                        <Cpu className="w-8 h-8 text-purple-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Natural Communication</h3>
                                    <p className="text-blue-200 leading-relaxed mb-6">
                                        Communicate with our AI in plain language. It understands your quality requirements
                                        and translates them into precise visual inspections.
                                    </p>
                                    <div className="flex items-center text-purple-300 text-sm">
                                        <Zap className="w-4 h-4 mr-2" />
                                        <span>Real-time Language Processing</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
                                <div className="relative bg-slate-900 p-8 rounded-2xl border border-cyan-500/30">
                                    <div className="mb-6 inline-block p-3 bg-cyan-500/10 rounded-xl">
                                        <BarChart className="w-8 h-8 text-cyan-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Factory-Scale Performance</h3>
                                    <p className="text-blue-200 leading-relaxed mb-6">
                                        Built for industrial scale, our system handles high-volume production lines while
                                        maintaining millisecond-level response times.
                                    </p>
                                    <div className="flex items-center text-cyan-300 text-sm">
                                        <Monitor className="w-4 h-4 mr-2" />
                                        <span>Enterprise-grade Architecture</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
                                <div className="relative bg-slate-900 p-8 rounded-2xl border border-green-500/30">
                                    <div className="mb-6 inline-block p-3 bg-green-500/10 rounded-xl">
                                        <CheckCircle className="w-8 h-8 text-green-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Seamless Integration</h3>
                                    <p className="text-blue-200 leading-relaxed mb-6">
                                        From mobile devices to CCTV cameras, our system integrates with your existing
                                        infrastructure for a complete quality control solution.
                                    </p>
                                    <div className="flex items-center text-green-300 text-sm">
                                        <Scan className="w-4 h-4 mr-2" />
                                        <span>Multi-platform Support</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Final CTA Section */}
                    <section className="text-center bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-16 text-white shadow-2xl">
                        <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
                            Ready to Transform Your Production?
                        </h2>
                        <p className="mb-10 text-xl text-blue-200/90 max-w-2xl mx-auto leading-relaxed">
                            Experience the future of quality control with our personalized AI inspection demo
                        </p>
                        <a
                            href="/ContactQuality"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full font-bold hover:from-blue-400 hover:to-cyan-300 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-1"
                        >

                            Schedule Demo
                        </a>
                    </section>
                </div>
            </main>
        </div>
    );
}