"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script";

import Header from "@/components/ui/header1";
import Footer from "@/components/ui/footer1";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-PV01NN456D"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-PV01NN456D');`}
      </Script>

      <Header />

      <main className="grow">{children}</main>

      <Footer border={true} />
    </>
  );
}
