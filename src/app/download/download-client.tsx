"use client";

import { useEffect, useState } from "react";

const DOWNLOAD_URL =
  "https://github.com/gregmckenzie88/trollie-promo/releases/download/0.5.18/Trollie-0.5.18.dmg";

export default function DownloadClient() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true);
      window.location.href = DOWNLOAD_URL;
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="mx-auto max-w-md text-center">
        <div className="mb-8">
          <a
            href="/"
            className="text-xl font-semibold tracking-tight text-foreground"
          >
            Trollie
          </a>
        </div>

        {/* Spinner */}
        <div className="mb-8 flex justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-border border-t-primary" />
        </div>

        <h1 className="mb-3 text-2xl font-semibold text-foreground">
          {started
            ? "Your download has started."
            : "Your download will begin in just a moment."}
        </h1>

        <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
          Trollie requires macOS 12 or later.
        </p>

        <p className="text-sm text-muted-foreground">
          If your download does not start,{" "}
          <a
            href={DOWNLOAD_URL}
            download
            className="text-primary underline underline-offset-4 transition-colors hover:brightness-110"
          >
            please click here
          </a>
          .
        </p>
      </div>
    </div>
  );
}
