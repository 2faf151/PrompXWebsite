"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { CalendarDays } from "lucide-react";

interface CalendlyBadgeWidgetProps {
    url: string;
    text: string;
    color: string;
    textColor: string;
    hideOnMobile?: boolean;
}

export default function CalendlyBadgeWidget({
    url = "https://calendly.com/withprompx/30min",
    text = "Schedule Your Demo",
    color = "#1e293b",
    textColor = "#ffffff",
    hideOnMobile = false, // Changed default to false
}: Partial<CalendlyBadgeWidgetProps>) {
    const [isMobile, setIsMobile] = useState(false);
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);

    // Check if we're on mobile screen
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // Standard mobile breakpoint
        };

        // Check on initial render
        checkMobile();

        // Set up event listener for window resize
        window.addEventListener("resize", checkMobile);

        // Clean up
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Remove the hideOnMobile effect and replace with mobile styling
    useEffect(() => {
        const style = document.createElement("style");
        style.textContent = `
            @media (max-width: 767px) {
                .calendly-badge-widget .calendly-badge-content {
                    width: 48px !important;
                    height: 48px !important;
                    padding: 0 !important;
                    border-radius: 50% !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    position: fixed !important;
                    right: 20px !important;
                    bottom: 20px !important;
                    background: #0f172a !important;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
                    transition: transform 0.2s ease !important;
                }
                .calendly-badge-widget .calendly-badge-content > div {
                    margin: 0 !important;
                }
                .calendly-badge-widget .calendly-badge-content span {
                    display: none !important;
                }
                .calendly-badge-widget .calendly-badge-content svg {
                    width: 24px !important;
                    height: 24px !important;
                    margin: 0 !important;
                }
                .calendly-badge-widget .calendly-badge-content:hover {
                    transform: scale(1.1) !important;
                }
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    // Initialize Calendly widget after scripts are loaded
    useEffect(() => {
        // Only initialize if the script is loaded and Calendly is available
        if (isScriptLoaded && window.Calendly) {
            window.Calendly.initBadgeWidget({
                url,
                text: `<div style="display: flex; align-items: center; gap: 8px;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>${text}</span>
                </div>`,
                color,
                textColor,
                branding: false,
                position: "bottom-right", // Added to place the badge at the bottom-right
                styles: {
                    body: {
                        background: "#0f172a",
                        padding: "12px 20px",
                        borderRadius: "12px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        transition: "all 0.2s ease",
                    },
                },
            });
        }
    }, [url, text, color, textColor, isScriptLoaded]);

    // Simpler hover effect
    useEffect(() => {
        const style = document.createElement("style");
        style.textContent = `
            .calendly-badge-widget {
                transition: transform 0.2s ease !important;
            }
            .calendly-badge-widget:hover {
                transform: translateY(-2px) !important;
            }
            .calendly-badge-widget .calendly-badge-content {
                font-weight: 600 !important;
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <>
            <link
                href="https://assets.calendly.com/assets/external/widget.css"
                rel="stylesheet"
            />
            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="afterInteractive"
                onLoad={() => {
                    setIsScriptLoaded(true);
                    if (window.Calendly) {
                        window.Calendly.initBadgeWidget({
                            url,
                            text: `<div style="display: flex; align-items: center; gap: 8px;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>${text}</span>
                </div>`,
                            color,
                            textColor,
                        });
                    }
                }}
            />
        </>
    );
}

// Add Calendly to the Window interface
declare global {
    interface Window {
        Calendly: any;
    }
}
// Add Calendly to the Window interface
declare global {
    interface Window {
        Calendly: any;
    }
}


// Add Calendly to the Window interface
declare global {
    interface Window {
        Calendly: any;
    }
}
// Add Calendly to the Window interface
declare global {
    interface Window {
        Calendly: any;
    }
}
