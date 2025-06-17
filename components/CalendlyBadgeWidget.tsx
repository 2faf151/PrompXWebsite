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
    color = "#1e293b", // Changed to match slate-800
    textColor = "#ffffff",
    hideOnMobile = true,
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

    // Add custom style to hide Calendly widget on mobile
    useEffect(() => {
        if (hideOnMobile) {
            // Add custom style to hide the widget on mobile
            const style = document.createElement("style");
            style.textContent = `
        @media (max-width: 767px) {
          .calendly-badge-widget {
            display: none !important;
          }
        }
      `;
            document.head.appendChild(style);

            return () => {
                document.head.removeChild(style);
            };
        }
    }, [hideOnMobile]);

    // Initialize Calendly widget after scripts are loaded
    useEffect(() => {
        // Only initialize if the script is loaded and Calendly is available
        if (isScriptLoaded && window.Calendly) {
            window.Calendly.initBadgeWidget({
                url,
                text: `<div style="display: flex; align-items: center; gap: 8px; font-family: 'Inter', sans-serif; padding: 2px 4px;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    ${text}
                </div>`,
                color,
                textColor,
                branding: false,
                styles: {
                    body: {
                        background:
                            "linear-gradient(135deg, rgb(15, 23, 42), rgb(30, 41, 59))", // Changed to slate-900 to slate-800
                        padding: "12px 24px",
                        borderRadius: "50px",
                        boxShadow:
                            "0 10px 25px -5px rgba(15, 23, 42, 0.3)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        transform: "scale(1)",
                        transition: "all 0.2s ease",
                    },
                },
            });
        }
    }, [url, text, color, textColor, isScriptLoaded]);

    // Update hover effect colors
    useEffect(() => {
        const style = document.createElement("style");
        style.textContent = `
            .calendly-badge-widget {
                transition: all 0.2s ease !important;
            }
            .calendly-badge-widget:hover {
                transform: translateY(-2px) scale(1.02) !important;
                box-shadow: 0 15px 30px -5px rgba(15, 23, 42, 0.4) !important;
                background: linear-gradient(135deg, rgb(30, 41, 59), rgb(51, 65, 85)) !important;
            }
            .calendly-badge-widget .calendly-badge-content {
                font-weight: 600 !important;
                letter-spacing: 0.3px !important;
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
                            text: `<div style="display: flex; align-items: center; gap: 8px; font-family: 'Inter', sans-serif; padding: 2px 4px;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    ${text}
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
