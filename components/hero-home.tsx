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
                  <div className="group relative">
                    <button
                      className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:w-auto flex items-center justify-center"
                      disabled
                    >
                      <FaApple className="mr-2" />
                      Download for macOS
                    </button>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-sm px-2 py-1 rounded">
                      Unavailable
                    </div>
                  </div>
                  <div className="group relative">
                    <button
                      className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:w-auto flex items-center justify-center"
                      disabled
                    >
                      <FaLinux className="mr-2" />
                      Download for Linux
                    </button>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-sm px-2 py-1 rounded">
                      Unavailable
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Hero video */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <video
              className="w-full rounded-2xl shadow-xl"
              controls
              src="/PrompX Video.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
