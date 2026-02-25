import "./globals.css";
import { Jost, Lato } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Script from "next/script";
import LatestEvents from "@/components/LatestEvents";
import WhyChoose from "@/components/WhyChoose";
import CallToAction from "@/components/CallToAction";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Eventsdirectory",
  description: "ClassiGrids - Classified Ads and Listing Website Template.",
};
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/LineIcons.2.0.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/tiny-slider.css" />
        <link rel="stylesheet" href="/css/glightbox.min.css" />
        <link rel="stylesheet" href="/css/main.css" />
      </head>
      <body className={`${jost.variable} ${lato.variable}`}>
        <Header />

        {children}

        <Footer />

        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
