// app/(default)/quality/page.tsx

import { Camera, ShieldCheck, Activity } from "lucide-react";
import { motion } from "framer-motion";

export const metadata = {
    title: "AI Quality Inspection | PrompX",
    description:
        "Real-time computer-vision inspection for flawless mass-production quality control.",
};

export default function QualityHome() {
    return (
        <main className="bg-white text-gray-900">
            {/* Hero */}
            <section className="relative isolate overflow-hidden bg-gradient-to-b from-sky-100/40 to-white py-28">
                <div className="absolute inset-y-0 w-full skew-y-6 bg-sky-50/60" aria-hidden="true" />
                <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-5xl font-extrabold tracking-tight md:text-6xl"
                    >
                        AI Quality Inspection
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
                        className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-700"
                    >
                        Computer-vision scanners fine-tuned on your production line deliver instant
                        pass / fail decisions at <span className="font-semibold">&gt;200 fps</span>,
                        cutting defects to zero while capturing rich analytics for continuous
                        improvement.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                        className="mt-10 flex items-center justify-center gap-x-6"
                    >
                        <button className="rounded-2xl bg-sky-600 text-white px-8 py-4 text-base font-semibold hover:bg-sky-700">
                            Request a Demo
                        </button>
                        <a
                            href="#how-it-works"
                            className="text-base font-medium underline-offset-4 hover:underline"
                        >
                            How it works ↗
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-24">
                <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                    Why choose PrompX Quality AI?
                </h2>

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    <Feature
                        icon={<Camera className="h-6 w-6" />}
                        title="Vision Optimised"
                        description="High-resolution cameras capture every angle; our model flags microscopic defects invisible to the human eye."
                    />
                    <Feature
                        icon={<Activity className="h-6 w-6" />}
                        title="Real-time Decisions"
                        description="Latency under 5 ms ensures faulty items are rejected before leaving the line — no bottlenecks."
                    />
                    <Feature
                        icon={<ShieldCheck className="h-6 w-6" />}
                        title="On-Prem Privacy"
                        description="Runs entirely on your local edge devices. No cloud. Your proprietary designs never leave the factory."
                    />
                </div>
            </section>

            {/* CTA */}
            <section className="bg-sky-50 py-20">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <h3 className="text-3xl font-semibold md:text-4xl">
                        Ready to eliminate defects?
                    </h3>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
                        Talk to our engineers about integrating PrompX Quality AI into your existing
                        production line or new facility.
                    </p>
                    <button className="mt-8 rounded-2xl bg-sky-600 text-white px-10 py-4 text-base font-semibold hover:bg-sky-700">
                        Book Consultation
                    </button>
                </div>
            </section>
        </main>
    );
}

function Feature({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl bg-white p-8 shadow-md hover:shadow-lg"
        >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
                {icon}
            </div>
            <h3 className="mb-2 text-xl font-medium">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
}
