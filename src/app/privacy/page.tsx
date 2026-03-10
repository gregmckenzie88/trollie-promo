import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Trollie privacy policy — how we handle your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-foreground"
          >
            Trollie
          </Link>
          <a
            href="/download"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:brightness-110"
          >
            Download
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 pt-24 sm:pt-32 pb-20">
        <h1 className="mb-2 text-3xl font-light tracking-tight text-foreground sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mb-12 text-sm text-muted-foreground">
          Last updated: March 8, 2026
        </p>

        <div className="space-y-10 text-[15px] leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Overview
            </h2>
            <p>
              Trollie is a macOS desktop application. Your privacy matters.
              This policy explains what data we collect, why, and how we handle
              it.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Data the Desktop App Collects
            </h2>
            <p className="mb-3">
              Trollie stores all of your data locally on your computer. Your
              tasks, tracks, settings, and session history never leave your
              machine.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-foreground">Task and session data</strong>{" "}
                — stored in a local SQLite database on your computer. We do not
                have access to this data.
              </li>
              <li>
                <strong className="text-foreground">License token</strong> —
                if you purchase the full version, a cryptographic activation
                token is stored locally. It contains a payment reference and
                activation timestamp. No personal information is embedded in the
                token.
              </li>
              <li>
                <strong className="text-foreground">App settings</strong> —
                your preferences (volume, soundscape choices, etc.) are stored
                locally.
              </li>
            </ul>
            <p className="mt-3">
              The desktop app does not collect analytics, telemetry, or usage
              data. It does not phone home.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Data Collected During Purchase
            </h2>
            <p className="mb-3">
              If you choose to upgrade to the full version, you are directed to
              a payment page hosted by{" "}
              <a
                href="https://stripe.com"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stripe
              </a>
              , a third-party payment processor. Stripe collects payment
              information (such as your card number, email, and billing address)
              directly. We do not see or store your full payment details.
            </p>
            <p>
              We receive a confirmation from Stripe that payment was completed,
              along with a payment reference ID. This is used solely to generate
              your activation token.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Data This Website Collects
            </h2>
            <p>
              This website (trollie.site) uses{" "}
              <a
                href="https://vercel.com/analytics"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel Analytics
              </a>{" "}
              and{" "}
              <a
                href="https://vercel.com/docs/speed-insights"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel Speed Insights
              </a>{" "}
              to collect anonymous, aggregated performance and visitor data. No
              personally identifiable information is collected by these services.
              No cookies are used for tracking.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Third-Party Services
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-foreground">Stripe</strong> — processes
                payments. Subject to{" "}
                <a
                  href="https://stripe.com/privacy"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stripe&apos;s Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong className="text-foreground">Vercel</strong> — hosts this
                website. Subject to{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel&apos;s Privacy Policy
                </a>
                .
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Your Rights
            </h2>
            <p>
              Under Canada&apos;s Personal Information Protection and Electronic
              Documents Act (PIPEDA), you have the right to access, correct, or
              request deletion of any personal information we hold about you.
              Since Trollie stores data locally and we do not maintain user
              accounts, we hold minimal personal information. For any
              privacy-related requests, contact us at the address below.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Changes to This Policy
            </h2>
            <p>
              We may update this policy from time to time. Changes will be
              posted on this page with an updated date. Continued use of Trollie
              after changes constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Contact
            </h2>
            <p>
              <a
                href="mailto:info@trollie.site"
                className="text-primary hover:underline"
              >
                info@trollie.site
              </a>
            </p>
          </section>
        </div>
      </main>

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
