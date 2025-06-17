export const metadata = {
    title: "About PrompX Quality AI",
    description: "Learn how our vision-language models redefine defect inspection with local LLM tech.",
    keywords: "about us, PrompX, vision-language AI, local LLM, manufacturing quality",
};
import {
    Users,
    Target,
    Award,
    Lightbulb,
    Globe,
    TrendingUp,
    Shield,
    Zap,
    Heart,
    Brain,
    Eye,
    Cpu,
    Building,
    Calendar,
    MapPin,
    Mail,
    Linkedin,
    Github
} from 'lucide-react';

export default function AboutUs() {
    const values = [
        {
            icon: <Eye className="w-8 h-8" />,
            title: "Precision Vision",
            description: "We see what others miss, detecting the smallest defects with unmatched accuracy",
            gradient: "from-gray-500 to-gray-400"
        },
        {
            icon: <Brain className="w-8 h-8" />,
            title: "Intelligent Innovation",
            description: "Pushing the boundaries of AI to solve real-world manufacturing challenges",
            gradient: "from-gray-500 to-gray-400"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Reliability First",
            description: "Building systems that manufacturers can trust for their most critical processes",
            gradient: "from-gray-500 to-gray-400"
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Customer Success",
            description: "Your success is our mission - we're partners in your quality journey",
            gradient: "from-gray-500 to-gray-400"
        }
    ];

    return (
        <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white">
            {/* Hero Section */}
            <header className="container mx-auto px-6 pt-24 pb-16">
                <div className="text-center mb-16">
                    <h1 className="text-7xl font-black mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                        About Our Vision
                    </h1>
                    <p className="text-xl max-w-4xl mx-auto text-gray-300/80 leading-relaxed">
                        We're pioneering the future of manufacturing quality control through cutting-edge
                        vision-language AI technology, transforming how industries ensure product excellence.
                    </p>
                </div>
            </header>

            {/* Mission Statement */}
            <section className="container mx-auto px-6 pb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-500/20 rounded-3xl p-12 mb-16 shadow-2xl">
                        <div className="text-center mb-12">
                            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                                Our Mission
                            </h2>
                            <p className="text-2xl text-gray-300/90 leading-relaxed max-w-4xl mx-auto">
                                To eliminate quality defects in manufacturing through intelligent AI systems that
                                understand both visual patterns and human language, making perfect quality accessible to every manufacturer.
                            </p>
                        </div>
                    </div>

                    {/* Company Story */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                        <div className="space-y-8">
                            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-500/10">
                                <h3 className="text-3xl font-bold mb-4 text-gray-300">The Problem We Saw</h3>
                                <p className="text-gray-200/80 leading-relaxed text-lg">
                                    Manufacturing quality control was stuck in the past. Manual inspections were slow,
                                    inconsistent, and expensive. Traditional computer vision solutions were rigid and
                                    required extensive programming for each new defect type.
                                </p>
                            </div>

                            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/10">
                                <h3 className="text-3xl font-bold mb-4 text-purple-300">Our Breakthrough</h3>
                                <p className="text-gray-200/80 leading-relaxed text-lg">
                                    We realized that combining computer vision with natural language processing could
                                    create systems that understand quality requirements the way humans do - through
                                    simple descriptions rather than complex programming.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
                            <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-500/20">
                                <img
                                    src="/Industry/other.jpg"
                                    alt="Advanced Manufacturing"
                                    className="w-full h-64 object-cover rounded-2xl mb-6"
                                />
                                <h3 className="text-2xl font-bold mb-4 text-white">Today's Reality</h3>
                                <p className="text-gray-200/80 leading-relaxed">
                                    Our vision-language models now power quality control systems across industries,
                                    from automotive to electronics, detecting defects with superhuman accuracy while
                                    speaking the language of quality engineers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="container mx-auto px-6 pb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                            Our Core Values
                        </h2>
                        <p className="text-xl text-gray-300/80 max-w-3xl mx-auto">
                            The principles that guide everything we do, from research and development to customer relationships.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, i) => (
                            <div key={i} className="group relative">
                                <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-gray-500/20 rounded-3xl p-8 hover:border-gray-400/40 transition-all duration-300">
                                    <div className="flex items-start gap-6">
                                        <div className={`p-4 bg-gradient-to-r ${value.gradient} text-white rounded-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                                            {value.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                                            <p className="text-gray-200/80 leading-relaxed text-lg">{value.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-gradient-to-b from-gray-100 to-white text-black rounded-t-3xl -mt-8 relative z-10">
                <div className="container mx-auto px-6 py-20 text-center">
                    <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">
                        Experience the Future of Quality Control
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        See how our vision-language AI technology can transform your manufacturing quality processes.
                    </p>
                    <a
                        href="/ContactQuality"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-gray-900 to-black text-white rounded-full font-bold hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-gray-500/30 transform hover:-translate-y-1"
                    >
                        <Eye className="w-6 h-6" />
                        Schedule Your Demo
                    </a>
                </div>
            </section>
        </div>
    );
}