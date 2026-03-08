import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Trollie terms of service — conditions for using the application.",
};

export default function TermsOfService() {
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

      <main className="mx-auto max-w-3xl px-6 pt-32 pb-20">
        <h1 className="mb-2 text-4xl font-light tracking-tight text-foreground">
          Terms of Service
        </h1>
        <p className="mb-12 text-sm text-muted-foreground">
          Last updated: March 8, 2026
        </p>

        <div className="space-y-10 text-[15px] leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, or using Trollie (&quot;the
              Software&quot;), you agree to be bound by these Terms of Service.
              If you do not agree, do not use the Software.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              2. Description of Service
            </h2>
            <p>
              Trollie is a macOS desktop application that provides audio-guided
              focus sessions with voice reminders, ambient soundscapes, and
              visual anchoring.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              3. License Grant
            </h2>
            <p className="mb-3">
              <strong className="text-foreground">Free Version:</strong> You are
              granted a free, non-exclusive, non-transferable license to use the
              Software with limited functionality (up to 3 tasks per track).
            </p>
            <p>
              <strong className="text-foreground">Paid Version:</strong> Upon
              payment of the one-time license fee, you are granted a perpetual,
              non-exclusive, non-transferable license to use the full version of
              the Software for personal use.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              4. Restrictions
            </h2>
            <p>You may not:</p>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>
                Reverse engineer, decompile, or disassemble the Software, except
                to the extent permitted by applicable law.
              </li>
              <li>
                Redistribute, sublicense, rent, lease, or lend the Software or
                your license to any third party.
              </li>
              <li>
                Remove or alter any proprietary notices, labels, or marks on the
                Software.
              </li>
              <li>
                Use the Software for any unlawful purpose.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              5. Payment
            </h2>
            <p>
              Payment for the paid version is a one-time charge processed
              through Stripe. By making a purchase, you also agree to{" "}
              <a
                href="https://stripe.com/legal/consumer"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stripe&apos;s terms
              </a>
              . All sales are final. See our{" "}
              <Link href="/refunds" className="text-primary hover:underline">
                Refund Policy
              </Link>{" "}
              for details.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              6. Disclaimer of Warranties
            </h2>
            <p>
              THE SOFTWARE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
              AVAILABLE&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
              INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT
              WARRANT THAT THE SOFTWARE WILL BE UNINTERRUPTED, ERROR-FREE, OR
              FREE OF HARMFUL COMPONENTS.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              7. Limitation of Liability
            </h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
              SHALL THE DEVELOPER OF TROLLIE BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF
              PROFITS OR REVENUE, WHETHER INCURRED DIRECTLY OR INDIRECTLY,
              ARISING OUT OF YOUR USE OF THE SOFTWARE. OUR TOTAL LIABILITY FOR
              ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR THE
              SOFTWARE SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE SOFTWARE.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              8. Your Data
            </h2>
            <p>
              All data you create in Trollie (tasks, tracks, settings) is stored
              locally on your device. We do not access, collect, or transmit
              your application data. You are solely responsible for backing up
              your data. See our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>{" "}
              for full details on data handling.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              9. Termination
            </h2>
            <p>
              You may stop using the Software at any time by uninstalling it.
              We reserve the right to modify, suspend, or discontinue the
              Software at any time without notice. Your license to the paid
              version survives discontinuation — you may continue to use any
              version you have already downloaded.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              10. Changes to These Terms
            </h2>
            <p>
              We may update these terms from time to time. Changes will be
              posted on this page with an updated date. Continued use of the
              Software after changes constitutes acceptance of the revised
              terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              11. Governing Law
            </h2>
            <p>
              These terms are governed by and construed in accordance with the
              laws of the Province of Ontario and the federal laws of Canada
              applicable therein. Any disputes arising from these terms or the
              Software shall be subject to the exclusive jurisdiction of the
              courts of Ontario, Canada.
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
