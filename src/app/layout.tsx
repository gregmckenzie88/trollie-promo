import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.trollie.site"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Trollie — Audio-guided focus sessions for your workday",
    template: "%s | Trollie",
  },
  description:
    "Trollie is a macOS desktop app that combats digital distraction through immersive, audio-guided focus sessions. Voice reminders, ambient soundscapes, and visual anchoring keep you on track.",
  openGraph: {
    title: "Trollie — Audio-guided focus sessions for your workday",
    description:
      "Combat digital distraction with immersive audio-guided focus sessions. Voice reminders, ambient soundscapes, and a visual focus tunnel keep you anchored to what matters.",
    type: "website",
    siteName: "Trollie",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trollie — Audio-guided focus sessions for your workday",
    description:
      "Combat digital distraction with immersive audio-guided focus sessions for macOS.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Trollie",
  description:
    "A macOS desktop app that combats digital distraction through immersive, audio-guided focus sessions.",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "macOS 12+",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  url: "https://www.trollie.site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
