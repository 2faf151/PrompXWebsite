import Link from "next/link";
import Logo1 from "./logo1";
import { useState, useEffect } from "react";
import { IoCarSportOutline } from "react-icons/io5";
import { IoFastFoodOutline, IoHardwareChipOutline, IoShirtOutline } from "react-icons/io5";
import { MdOutlineBiotech, MdLocalPrintshop, MdOutlineAirplanemodeActive } from "react-icons/md";
import { HiOutlineDotsHorizontal, HiMenu, HiX } from "react-icons/hi";
import { GiComputerFan } from "react-icons/gi";

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
    };

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

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden rounded-lg p-2 text-gray-600 hover:bg-gray-100"
                    >
                        {isMobileMenuOpen ? (
                            <HiX className="h-6 w-6" />
                        ) : (
                            <HiMenu className="h-6 w-6" />
                        )}
                    </button>

                    {/* Desktop navigation */}
                    <ul className="hidden md:flex flex-1 items-center justify-end gap-3">
                        {/* Use Cases Dropdown */}
                        <li className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50 flex items-center gap-1"
                            >
                                Industries
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
                                <div className="absolute right-0 mt-2 w-[700px] rounded-lg bg-white/95 shadow-xl backdrop-blur-sm transition-all duration-200 ease-in-out border border-gray-100">
                                    <div className="grid grid-cols-3 gap-2 p-3">
                                        <Link
                                            href="/QualityAutomotive"
                                            className="flex items-center gap-3 rounded-lg px-4 py-3.5 hover:bg-gray-50 transition duration-150"
                                        >
                                            <IoCarSportOutline className="w-6 h-6 text-gray-600 shrink-0" />
                                            <div className="text-sm font-medium text-gray-900">Automotive</div>
                                        </Link>
                                        <Link
                                            href="/QualityBeverage"
                                            className="flex items-center gap-3 rounded-lg px-4 py-3.5 hover:bg-gray-50 transition duration-150"
                                        >
                                            <IoFastFoodOutline className="w-6 h-6 text-gray-600 shrink-0" />
                                            <div className="text-sm font-medium text-gray-900">Food & Beverage</div>
                                        </Link>
                                        <Link
                                            href="/QualityElectronics"
                                            className="flex items-center gap-3 rounded-lg px-4 py-3.5 hover:bg-gray-50 transition duration-150"
                                        >
                                            <GiComputerFan className="w-6 h-6 text-gray-600 shrink-0" />
                                            <div className="text-sm font-medium text-gray-900">Electronics Parts</div>
                                        </Link>
                                        <Link
                                            href="/QualityTextile"
                                            className="flex items-center gap-3 rounded-lg px-4 py-3.5 hover:bg-gray-50 transition duration-150"
                                        >
                                            <IoShirtOutline className="w-6 h-6 text-gray-600 shrink-0" />
                                            <div className="text-sm font-medium text-gray-900">Textile</div>
                                        </Link>
                                        <Link
                                            href="/QualitySemiconductors"
                                            className="flex items-center gap-3 rounded-lg px-4 py-3.5 hover:bg-gray-50 transition duration-150"
                                        >
                                            <IoHardwareChipOutline className="w-6 h-6 text-gray-600 shrink-0" />
                                            <div className="text-sm font-medium text-gray-900">Semiconductors</div>
                                        </Link>
                                        <Link
                                            href="/QualityPharma"
                                            className="flex items-center gap-3 rounded-lg px-4 py-3.5 hover:bg-gray-50 transition duration-150"
                                        >
                                            <MdOutlineBiotech className="w-6 h-6 text-gray-600 shrink-0" />
                                            <div className="text-sm font-medium text-gray-900">Pharmaceuticals</div>
                                        </Link>
                                        <Link
                                            href="/QualityPrinting"
                                            className="flex items-center gap-3 rounded-lg px-4 py-3.5 hover:bg-gray-50 transition duration-150"
                                        >
                                            <MdLocalPrintshop className="w-6 h-6 text-gray-600 shrink-0" />
                                            <div className="text-sm font-medium text-gray-900">Printing & Packaging</div>
                                        </Link>
                                        <Link
                                            href="/QualityAirspace"
                                            className="flex items-center gap-3 rounded-lg px-4 py-3.5 hover:bg-gray-50 transition duration-150"
                                        >
                                            <MdOutlineAirplanemodeActive className="w-6 h-6 text-gray-600 shrink-0" />
                                            <div className="text-sm font-medium text-gray-900">Airspace</div>
                                        </Link>
                                        <Link
                                            href="/Other"
                                            className="flex items-center gap-3 rounded-lg px-4 py-3.5 hover:bg-gray-50 transition duration-150"
                                        >
                                            <HiOutlineDotsHorizontal className="w-6 h-6 text-gray-600 shrink-0" />
                                            <div className="text-sm font-medium text-gray-900">Other</div>
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
                                href="/ContactQuality"
                                className="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile menu */}
                    {isMobileMenuOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 md:hidden">
                            <div className="p-4 space-y-4">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-50 rounded-lg flex items-center justify-between"
                                >
                                    Industries
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
                                    <div className="mt-2 space-y-2">
                                        <Link href="/QualityAutomotive" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg" onClick={closeMobileMenu}>
                                            <div className="flex items-center gap-3">
                                                <IoCarSportOutline className="w-5 h-5" />
                                                Automotive
                                            </div>
                                        </Link>
                                        <Link href="/QualityBeverage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg" onClick={closeMobileMenu}>
                                            <div className="flex items-center gap-3">
                                                <IoFastFoodOutline className="w-5 h-5" />
                                                Food & Beverage
                                            </div>
                                        </Link>
                                        <Link href="/QualityElectronics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg" onClick={closeMobileMenu}>
                                            <div className="flex items-center gap-3">
                                                <GiComputerFan className="w-5 h-5" />
                                                Electronics Parts
                                            </div>
                                        </Link>
                                        <Link href="/QualityTextile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg" onClick={closeMobileMenu}>
                                            <div className="flex items-center gap-3">
                                                <IoShirtOutline className="w-5 h-5" />
                                                Textile
                                            </div>
                                        </Link>
                                        <Link href="/QualitySemiconductors" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg" onClick={closeMobileMenu}>
                                            <div className="flex items-center gap-3">
                                                <IoHardwareChipOutline className="w-5 h-5" />
                                                Semiconductors
                                            </div>
                                        </Link>
                                        <Link href="/QualityPharma" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg" onClick={closeMobileMenu}>
                                            <div className="flex items-center gap-3">
                                                <MdOutlineBiotech className="w-5 h-5" />
                                                Pharmaceuticals
                                            </div>
                                        </Link>
                                        <Link href="/QualityPrinting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg" onClick={closeMobileMenu}>
                                            <div className="flex items-center gap-3">
                                                <MdLocalPrintshop className="w-5 h-5" />
                                                Printing & Packaging
                                            </div>
                                        </Link>
                                        <Link href="/QualityAirspace" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg" onClick={closeMobileMenu}>
                                            <div className="flex items-center gap-3">
                                                <MdOutlineAirplanemodeActive className="w-5 h-5" />
                                                Airspace
                                            </div>
                                        </Link>
                                        <Link href="/Other" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg" onClick={closeMobileMenu}>
                                            <div className="flex items-center gap-3">
                                                <HiOutlineDotsHorizontal className="w-5 h-5" />
                                                Other
                                            </div>
                                        </Link>
                                    </div>
                                )}

                                <Link
                                    href="/AboutUsQuality"
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-50 rounded-lg"
                                    onClick={closeMobileMenu}
                                >
                                    About Us
                                </Link>

                                <Link
                                    href="/ContactQuality"
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-50 rounded-lg"
                                    onClick={closeMobileMenu}
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
