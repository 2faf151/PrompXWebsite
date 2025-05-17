import Link from "next/link";
import Logo1 from "./logo1";

export default function Footer({ border = false }: { border?: boolean }) {
    return (
        <footer>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* Top area: Blocks */}
                <div
                    className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]" : ""}`}
                >
                    {/* 1st block */}
                    <div className="space-y-2 sm:col-span-12 lg:col-span-4 lg:col-start-3">
                        <div className="text-center lg:text-left">
                            <Logo1 />
                        </div>
                        <div className="text-center text-sm text-gray-600 lg:text-left">
                            &copy; PrompX.com - All rights reserved.
                        </div>
                    </div>

                    {/* 2nd block */}
                    <div className="space-y-4 sm:col-span-6 md:col-span-3 lg:col-span-2">
                        <h3 className="text-center text-sm font-medium lg:text-left">Links</h3>
                        <ul className="space-y-2 text-center text-sm lg:text-left">
                            <li>
                                <Link
                                    className="text-gray-600 transition hover:text-gray-900"
                                    href="/ContactQuality"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social block */}
                    <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
                        <h3 className="text-center text-sm font-medium lg:text-left">Social</h3>
                        <ul className="flex justify-center gap-1 lg:justify-start">
                            <li>
                                <Link
                                    className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                                    href="https://x.com/withPrompX"
                                    aria-label="Twitter"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg
                                        className="h-8 w-8 fill-current"
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                                    href="https://www.youtube.com/@PrompX"
                                    aria-label="YouTube"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg
                                        className="h-8 w-8 fill-current"
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M24.325 8.309s-2.655-.334-8.357-.334c-5.517 0-8.294.334-8.294.334A2.675 2.675 0 0 0 5 10.984v10.034a2.675 2.675 0 0 0 2.674 2.676s2.582.332 8.294.332c5.709 0 8.357-.332 8.357-.332A2.673 2.673 0 0 0 27 21.018V10.984a2.673 2.673 0 0 0-2.675-2.675zM13.061 19.975V12.03L20.195 16l-7.134 3.975z" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Big text */}
            <div className="relative -mt-16 h-60 w-full" aria-hidden="true">
                <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-linear-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['PrompX'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['PrompX'] after:[text-shadow:0_1px_0_white]"></div>
                {/* Glow */}
                <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
                    aria-hidden="true"
                >
                    <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
                </div>
            </div>
        </footer>
    );
}
