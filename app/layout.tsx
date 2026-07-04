import ScrollToTop from "./components/ScrollToTop";
import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";








const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});


export const metadata: Metadata = {
  title: {
    template: '%s — Kordex Technologies',
    default: 'Kordex Technologies — Execute with Intelligence',
  },
  description: 'Kordex Technologies builds world-class web apps, AI tools, cybersecurity solutions, and education technology — crafted in Ghana, delivered globally.',
  metadataBase: new URL('https://kordextechnologies.vercel.app'),
  openGraph: {
    siteName: 'Kordex Technologies',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${dmSans.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
