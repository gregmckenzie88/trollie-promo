import Link from "next/link";
import ScrollVideo from "./components/ScrollVideo";
import Waveform from "./components/Waveform";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-xl font-semibold tracking-tight text-foreground">
            Trollie
          </span>
          <a
            href="/download"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:brightness-110"
          >
            Download
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
        {/* Vignette glow effect */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div
            className="absolute top-0 left-1/2 h-[600px] w-full max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(ellipse, rgba(200, 184, 50, 0.15) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-1/2 h-[400px] w-full max-w-[600px] -translate-x-1/2 translate-y-1/2 rounded-full opacity-[0.15]"
            style={{
              background:
                "radial-gradient(ellipse, rgba(200, 184, 50, 0.1) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium tracking-wider uppercase text-muted-foreground">
            For macOS
          </p>
          <h1 className="mb-6 text-4xl font-light leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Stay on track.
            <br />
            <span className="text-primary">Stay focused.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Audio-guided focus sessions for your workday. Voice reminders,
            ambient soundscapes, and a visual focus tunnel keep you anchored to
            what matters.
          </p>
          <a
            href="/download"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition-colors hover:brightness-110"
          >
            <DownloadIcon />
            Download for Mac
          </a>
        </div>

        {/* Audio waveform visualization */}
        <Waveform />
      </section>

      {/* Scroll-driven video demo */}
      <ScrollVideo />

      {/* Features */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-medium tracking-wider uppercase text-primary">
            Features
          </p>
          <h2 className="mb-16 max-w-lg text-3xl font-semibold leading-snug text-foreground sm:text-4xl">
            An immersive focus environment, not just another timer.
          </h2>

          <div className="grid gap-px sm:grid-cols-2">
            <FeatureCard
              icon={<VoiceIcon />}
              title="Voice Reminders"
              description="A gentle voice periodically reminds you of your current task and remaining time, keeping your attention anchored without breaking flow."
            />
            <FeatureCard
              icon={<SoundscapeIcon />}
              title="Ambient Soundscapes"
              description="Choose from brown noise, rain, ocean waves, crackling fire, or ambient electronic — with smooth crossfades between tasks."
            />
            <FeatureCard
              icon={<SessionIcon />}
              title="Session Planning"
              description="Queue up your tasks before you start, set time blocks for each, and let Trollie guide you through them one by one — no context-switching required."
            />
            <FeatureCard
              icon={<GlowIcon />}
              title="Visual Focus Tunnel"
              description="A subtle screen-edge glow creates a peripheral reminder that you're in focus mode — like blinders for your digital workspace."
            />
          </div>
        </div>
      </section>

      {/* CTA / Download */}
      <section
        id="download"
        className="relative border-t border-border px-6 py-24 sm:py-32"
      >
        {/* Subtle glow behind CTA */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div
            className="absolute top-1/2 left-1/2 h-[500px] w-full max-w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse, rgba(200, 184, 50, 0.06) 0%, transparent 70%)",
              animation: "glow-pulse 4s ease-in-out infinite",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-semibold text-foreground sm:text-4xl">
            Ride the track.
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
            Create a trolley of tasks, press play, and let Trollie guide you
            through your workday. No distractions. Just focus.
          </p>
          <a
            href="/download"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition-colors hover:brightness-110"
          >
            <DownloadIcon />
            Download for Mac
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            Requires macOS 12 or later
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-sm font-medium text-muted-foreground">
            Trollie
          </span>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms
            </Link>
            <Link
              href="/refunds"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Refunds
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Trollie. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="border border-border bg-background p-5 sm:p-8 transition-colors hover:bg-popover">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-border text-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-[15px] leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function VoiceIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

function SoundscapeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12h2" />
      <path d="M6 8v8" />
      <path d="M10 4v16" />
      <path d="M14 6v12" />
      <path d="M18 8v8" />
      <path d="M22 12h-2" />
    </svg>
  );
}

function SessionIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </svg>
  );
}

function GlowIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}
