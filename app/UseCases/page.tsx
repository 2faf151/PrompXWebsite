// app/use-cases/page.tsx

import Header from "@/components/ui/header";
import CalendlyBadgeWidget from '@/components/CalendlyBadgeWidget';
export const metadata = {
    title: "Use Cases - PrompX",
    description: "Explore PrompX's powerful use cases across data, audio, image, and code analysis.",
    keywords:
        "PrompX, AI use cases, local LLMs, data analytics, RAG, audio processing, image analysis, code intelligence",
};

type UseCase = {
    id: string;
    title: string;
    tagline: string;
    description: string;
    demo: {
        inputExample: string;
        outputExample: string;
    };
    tech: {
        agents: string[];
    };
};

type UseCaseMap = Record<'data' | 'audio' | 'image' | 'code', UseCase[]>;

const USE_CASES: UseCaseMap = {
    /* ========== DATA ========== */
    data: [
        {
            id: 'persona-analysis',
            title: 'Persona Analysis',
            tagline: 'Derive crystal‑clear personas from messy data.',
            description:
                'Row‑level enrichment adds columns like pain‑points and requests. Batched agents apply hypotheses, merge synonyms, and distill thousands of raw personas into a concise, decision‑ready set.',
            demo: {
                inputExample: '1 M‑row SaaS user table with free‑text feedback',
                outputExample: 'Table with Persona, PainPoints, Requests, FinalPersona (≤8 categories)',
            },
            tech: {
                agents: [
                    'Row‑Enricher',
                    'Batch‑Hypothesis‑Evaluator',
                    'Synonym‑Merger',
                    'Persona‑Condenser',
                ],
            },
        },
        {
            id: 'diagnostic-analysis',
            title: 'Diagnostic Analysis',
            tagline: 'Answer “what happened?” and “why?” in minutes.',
            description:
                'Stat‑scan detects anomalies, then correlation agents link metrics and surface the drivers behind each deviation.',
            demo: {
                inputExample: 'Weekly revenue & marketing spend spreadsheet',
                outputExample: 'Markdown root‑cause report with linked charts.',
            },
            tech: { agents: ['Anomaly‑Finder', 'Correlation‑Explorer', 'Driver‑Ranker'] },
        },
        {
            id: 'cause-analysis',
            title: 'Cause Analysis',
            tagline: 'Map cause‑and‑effect from complex datasets.',
            description:
                'Causal inference engine builds DAGs, scores edge confidence, and generates recommended interventions.',
            demo: {
                inputExample: 'Healthcare CSV with treatments & outcomes',
                outputExample: 'Interactive DAG + narrative on probable causes.',
            },
            tech: { agents: ['Causal‑Discoverer', 'Effect‑Estimator', 'Intervention‑Advisor'] },
        },
    ],

    /* ========== AUDIO ========== */
    audio: [
        {
            id: 'speech-to-text',
            title: 'Speech‑to‑Text',
            tagline: 'Fast, accurate, language‑aware transcription.',
            description:
                'Pipeline combines VAD and ASR to output punctuated transcripts with speaker timestamps.',
            demo: {
                inputExample: 'Call‑center MP3 (45 min)',
                outputExample: 'JSONL {start, end, speaker, text}',
            },
            tech: { agents: ['VAD‑Filter', 'ASR‑Transcriber'] },
        },
        {
            id: 'emotion-recognition',
            title: 'Emotion Recognition',
            tagline: 'Detect caller sentiment frame‑by‑frame.',
            description:
                'Prosodic and lexical cues classify happiness, anger, neutrality, and frustration, enabling live coaching.',
            demo: {
                inputExample: 'Support WAV file',
                outputExample: 'CSV timeline with emotion probability.',
            },
            tech: { agents: ['Prosody‑Extractor', 'Emotion‑Classifier'] },
        },
        {
            id: 'speaker-profiling',
            title: 'Speaker Profiling',
            tagline: 'Who’s talking and what’s their profile?',
            description:
                'Embeddings cluster speakers and label gender, age group, and accent across multi‑party audio.',
            demo: {
                inputExample: 'Podcast FLAC (3 speakers)',
                outputExample: 'Text transcript with Speaker‑IDs + traits.',
            },
            tech: { agents: ['Embedding‑Cluster', 'Profile‑Annotator'] },
        },
    ],

    /* ========== IMAGE ========== */
    image: [
        {
            id: 'object-identification',
            title: 'Object Identification',
            tagline: 'Spot any target at scale.',
            description:
                'Detects specified objects, draws bounding boxes, and sorts images into YES/NO folders automatically.',
            demo: {
                inputExample: '10 k shelf photos, target: “missing item”',
                outputExample: 'Annotated PNGs + folder split.',
            },
            tech: { agents: ['Detector', 'Folder‑Router'] },
        },
        {
            id: 'image-description',
            title: 'Image Description',
            tagline: 'Generate crisp alt‑text and scene summaries.',
            description:
                'Vision‑language agent captions images and outputs structured JSON with key entities and context.',
            demo: {
                inputExample: 'Travel photo JPEG',
                outputExample: '{caption: “…sunset over Dubrovnik…”, entities:["sunset","sea"]}',
            },
            tech: { agents: ['Caption‑Generator'] },
        },
        {
            id: 'text-in-image',
            title: 'Text in Image',
            tagline: 'Extract & search embedded text.',
            description:
                'Hybrid OCR finds text regions, recognizes content, and supports keyword queries across archives.',
            demo: {
                inputExample: 'Scanned receipts PDF',
                outputExample: 'CSV with file, line, text, confidence.',
            },
            tech: { agents: ['OCR‑Detector', 'Keyword‑Indexer'] },
        },
    ],

    /* ========== CODE ========== */
    code: [
        {
            id: 'summary-analysis',
            title: 'Summary Analysis',
            tagline: 'Understand every file at a glance.',
            description:
                'File‑chunker produces concise summaries, key functions, and TODO items for each source file.',
            demo: {
                inputExample: 'Monorepo (4000 files)',
                outputExample: 'CSV {filePath, summary}',
            },
            tech: { agents: ['Chunk‑Analyzer', 'File‑Summarizer'] },
        },
        {
            id: 'vulnerability-scan',
            title: 'Vulnerability Analysis',
            tagline: 'Find security flaws before attackers do.',
            description:
                'Static engine scans code, configs, and secrets, mapping findings to CWE IDs with remediation hints.',
            demo: {
                inputExample: 'Node.js backend',
                outputExample: 'Markdown report with severity and fix suggestions.',
            },
            tech: { agents: ['SAST‑Scanner', 'Remediation‑Advisor'] },
        },
        {
            id: 'dependency-audit',
            title: 'Dependency Audit',
            tagline: 'Tame third‑party risk.',
            description:
                'Graph builder lists direct and transitive dependencies, flags outdated or vulnerable packages, and suggests safe upgrades.',
            demo: {
                inputExample: 'package.json + lockfile',
                outputExample: 'Chart {package, current, latest, riskLevel}',
            },
            tech: { agents: ['Dependency‑Graph', 'Risk‑Scorer'] },
        },
    ],
};

function UseCaseCard({ useCase }: { useCase: UseCase }) {
    return (
        <div className="border rounded-xl p-6 bg-white/95 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{useCase.title}</h3>
            <p className="text-gray-600 mb-3 italic">{useCase.tagline}</p>
            <p className="text-gray-700 mb-4">{useCase.description}</p>
            <div className="bg-gray-50/80 p-4 rounded-lg border border-gray-100">
                <h4 className="font-medium mb-2 text-gray-900">Demo</h4>
                <p className="text-sm text-gray-600">
                    <strong>Input:</strong> {useCase.demo.inputExample}
                </p>
                <p className="text-sm text-gray-600">
                    <strong>Output:</strong> {useCase.demo.outputExample}
                </p>
            </div>
            <div className="mt-4">
                <h4 className="font-medium mb-2 text-gray-900">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                    {useCase.tech.agents.map((agent) => (
                        <span
                            key={agent}
                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-md hover:bg-blue-200 transition-colors"
                        >
                            {agent}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

function UseCaseSection({ title, cases }: { title: string; cases: UseCase[] }) {
    return (
        <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cases.map((useCase) => (
                    <UseCaseCard key={useCase.id} useCase={useCase} />
                ))}
            </div>
        </section>
    );
}

export default function UseCases() {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">

                <CalendlyBadgeWidget
                    url="https://calendly.com/withprompx/30min"
                    text="Schedule Your Demo"
                    color="#0f172a"  // Changed to match dark theme
                    textColor="#ffffff"
                    hideOnMobile={true}
                />
                <div className="max-w-7xl mx-auto px-4 pt-28 pb-20">

                    <h1 className="text-5xl font-bold mb-6 text-gray-900">Use Cases</h1>
                    <p className="text-xl text-gray-600 mb-16 max-w-3xl">
                        Explore how PrompX can transform your workflows across different domains with our powerful AI-driven
                        solutions.
                    </p>
                    <UseCaseSection title="Data Analysis" cases={USE_CASES.data} />
                    <UseCaseSection title="Audio Processing" cases={USE_CASES.audio} />
                    <UseCaseSection title="Image Analysis" cases={USE_CASES.image} />
                    <UseCaseSection title="Code Intelligence" cases={USE_CASES.code} />
                </div>
            </div>
        </>
    );
}
