import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#1A1A1E",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.trollie.site"),
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
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
