"use client";
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";
import { useState, useEffect } from "react";
export default function HeroHome() {
  return (
    <section className="relative">

      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >

            </div>
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Agentic AI Studio for Big-Data Insight <br className="max-lg:hidden" />

            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Analyze millions of rows, images, audio files & codebases — offline, privately, visually.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto flex max-w-xs flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    href="/PrompX Setup 0.0.1.exe"
                    download
                    className="btn group w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:w-auto flex items-center justify-center"
                  >
                    <FaWindows className="mr-2" />
                    Download for Windows
                  </a>
                  <button className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:w-auto flex items-center justify-center">
                    <FaApple className="mr-2" />
                    Download for macOS
                  </button>
                  <button className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:w-auto flex items-center justify-center">
                    <FaLinux className="mr-2" />
                    Download for Linux
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <UnifiedAnalysis />
          </div>
        </div>
      </div>
    </section>
  );
}

const analysisData = {
  data: [
    { type: "Data", content: ["Market Analysis", "User Behavior", "Sales Trends", "Performance Metrics", "Growth Patterns"] },
    { type: "Features", content: ["Segmentation", "Clustering", "Prediction", "Optimization", "Insights"] },
    { type: "Results", content: ["27% Growth", "85% Accuracy", "12% Improvement", "3x ROI", "95% Confidence"] }
  ],
  images: [
    { type: "Image", content: ["Portrait.jpg", "Product.png", "Scene.jpg", "Document.png", "Diagram.jpg"] },
    { type: "Objects", content: ["Face detected", "Product identified", "Scene analyzed", "Text extracted", "Chart parsed"] },
    { type: "Actions", content: ["Processing", "Analyzing", "Classifying", "Detecting", "Segmenting"] }
  ],
  voice: [
    { type: "Audio", content: ["Call-1.mp3", "Meeting.wav", "Notes.m4a", "Interview.mp3", "Speech.wav"] },
    { type: "Text", content: ["Converting audio", "Transcribing", "Analyzing tone", "Detecting mood", "Summarizing"] },
    { type: "Sentiment", content: ["Positive", "Neutral", "Enthusiastic", "Professional", "Engaging"] }
  ],
  code: [
    { type: "File", content: ["main.py", "index.js", "app.cpp", "utils.rs", "core.go"] },
    { type: "Analysis", content: ["Complexity: O(n)", "Security audit", "Performance check", "Memory usage", "Code quality"] },
    { type: "Status", content: ["Optimizing", "Securing", "Refactoring", "Testing", "Reviewing"] }
  ]
};

function UnifiedAnalysis() {
  const [currentType, setCurrentType] = useState("data");
  const [currentRow, setCurrentRow] = useState(0);

  useEffect(() => {
    const typeInterval = setInterval(() => {
      setCurrentType(prev => {
        const types = ["data", "images", "voice", "code"];
        const nextIndex = (types.indexOf(prev) + 1) % types.length;
        return types[nextIndex];
      });
      setCurrentRow(0);
    }, 3000);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    const rowInterval = setInterval(() => {
      setCurrentRow(prev => (prev + 1) % 5);
    }, 500);

    return () => clearInterval(rowInterval);
  }, []);

  const getBackgroundColor = (type: string) => {
    const colors = {
      data: "bg-blue-100",
      images: "bg-green-100",
      voice: "bg-yellow-100",
      code: "bg-orange-100"
    };
    return colors[type as keyof typeof colors];
  };

  return (
    <div className={`relative aspect-video rounded-2xl ${getBackgroundColor(currentType)} px-5 py-3 shadow-xl overflow-hidden`}>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-opacity-50 bg-white">
          <tr>
            {analysisData[currentType as keyof typeof analysisData].map((col, i) => (
              <th key={i} scope="col" className="px-6 py-3">{col.type}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[0, 1, 2, 3, 4].map((row) => (
            <tr
              key={row}
              className={`bg-white bg-opacity-75 border-b transition-all duration-200 ${row === currentRow ? "bg-opacity-100 shadow-md" : ""
                }`}
            >
              {analysisData[currentType as keyof typeof analysisData].map((col, i) => (
                <td key={i} className="px-6 py-4">
                  {col.content[row]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
