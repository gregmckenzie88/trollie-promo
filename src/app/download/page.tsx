import type { Metadata } from "next";
import DownloadClient from "./download-client";

export const metadata: Metadata = {
  title: "Download Trollie for macOS",
  description:
    "Download Trollie, the free macOS app for audio-guided focus sessions. Requires macOS 12 or later.",
};

export default function DownloadPage() {
  return <DownloadClient />;
}
