import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import { site } from "@/lib/site";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: '%s — Kordex Technologies',
    default: 'Kordex Technologies — Education technology for African schools',
  },
  description:
    'Kordex Technologies builds school management systems, AI lesson planning tools, admissions websites and student data security for Ghanaian schools. Founded by a former GES teacher.',
  metadataBase: new URL(site.url),
  keywords: [
    'school management system Ghana',
    'education technology Ghana',
    'school software Ghana',
    'NaCCA curriculum software',
    'lesson planning AI Ghana',
    'school website design Ghana',
  ],
  openGraph: {
    siteName: 'Kordex Technologies',
    type: 'website',
    locale: 'en_GH',
    title: 'Education technology for African schools',
    description:
      'School management, AI lesson planning, admissions websites and student data protection — built for Ghanaian schools by a former GES teacher.',
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
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
