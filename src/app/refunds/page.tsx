import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Trollie refund policy — all sales are final.",
};

export default function RefundPolicy() {
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
          Refund Policy
        </h1>
        <p className="mb-12 text-sm text-muted-foreground">
          Last updated: March 8, 2026
        </p>

        <div className="space-y-10 text-[15px] leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              All Sales Are Final
            </h2>
            <p>
              All purchases of Trollie are final. We do not offer refunds or
              exchanges.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Why No Refunds
            </h2>
            <p>
              Trollie offers a fully functional free version that you can use
              indefinitely before deciding to upgrade. The free version includes
              all core features with a limit of 3 tasks per track, giving you
              the opportunity to evaluate the application before purchasing.
            </p>
            <p className="mt-3">
              Because you can try the Software before buying, and because the
              paid upgrade is a one-time $5 purchase that unlocks unlimited tasks
              with no recurring charges, all sales are final.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Activation Issues
            </h2>
            <p>
              If you have completed a purchase but your license did not activate
              properly, please contact us. We will help resolve any technical
              issues with activation at no additional cost.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Chargebacks
            </h2>
            <p>
              If you initiate a chargeback or payment dispute instead of
              contacting us first, we reserve the right to revoke your license.
              Please reach out to us directly if you experience any issues — we
              are happy to help.
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
