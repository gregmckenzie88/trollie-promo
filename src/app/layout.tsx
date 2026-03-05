import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trollie — Audio-guided focus sessions for your workday",
  description:
    "Trollie is a macOS desktop app that combats digital distraction through immersive, audio-guided focus sessions. Voice reminders, ambient soundscapes, and visual anchoring keep you on track.",
  openGraph: {
    title: "Trollie — Audio-guided focus sessions for your workday",
    description:
      "Combat digital distraction with immersive audio-guided focus sessions. Voice reminders, ambient soundscapes, and a visual focus tunnel keep you anchored to what matters.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
