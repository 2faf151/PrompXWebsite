import Link from "next/link";
import Logo1 from "./logo1";
import { useState, useEffect } from "react";

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <header className="fixed top-2 z-30 w-full md:top-6">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                    {/* Site branding */}
                    <div className="flex flex-1 items-center">
                        <div className="flex items-center">
                            <Logo1 />
                            <span className="ml-2 font-semibold">
                                Quality
                            </span>
                        </div>
                    </div>

                    {/* Desktop sign in links */}
                    <ul className="flex flex-1 items-center justify-end gap-3">
                        {/* Use Cases Dropdown */}
                        <li className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50 flex items-center gap-1"
                            >
                                Use Cases
                                <svg
                                    className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-64 rounded-lg bg-white/95 shadow-xl backdrop-blur-sm transition-all duration-200 ease-in-out border border-gray-100">
                                    <div className="py-2">
                                        <Link
                                            href="/QualityTextile"
                                            className="block px-6 py-2.5 hover:bg-gray-50 transition duration-150 text-gray-700 hover:text-gray-900"
                                        >
                                            Textile
                                        </Link>
                                        <Link
                                            href="/QualityElectronics"
                                            className="block px-6 py-2.5 hover:bg-gray-50 transition duration-150 text-gray-700 hover:text-gray-900"
                                        >
                                            Electronics
                                        </Link>
                                        <Link
                                            href="/QualityAutomotive"
                                            className="block px-6 py-2.5 hover:bg-gray-50 transition duration-150 text-gray-700 hover:text-gray-900"
                                        >
                                            Automotive
                                        </Link>
                                        <Link
                                            href="/QualityBeverage"
                                            className="block px-6 py-2.5 hover:bg-gray-50 transition duration-150 text-gray-700 hover:text-gray-900"
                                        >
                                            Beverage
                                        </Link>
                                        <Link
                                            href="/Other"
                                            className="block px-6 py-2.5 hover:bg-gray-50 transition duration-150 text-gray-700 hover:text-gray-900"
                                        >
                                            Other
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li>
                            <Link
                                href="/AboutUsQuality"
                                className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/News"
                                className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
                            >
                                News
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/ContactQuality"
                                className="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
