// app/(default)/quality/page.tsx
export const metadata = {
    title: "Quality – PrompX",
    description: "Quality dashboard placeholder",
};

export default function QualityHome() {
    return (
        <section className="mx-auto max-w-4xl px-4 py-24">
            <h1 className="mb-6 text-5xl font-bold">Quality Portal</h1>
            <p className="text-lg leading-7 text-gray-700">
                👋 Welcome! This is a standalone page served on{' '}
                <strong>quality.prompx.com</strong>.
            </p>
        </section>
    );
}
