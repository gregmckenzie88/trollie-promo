import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="mb-2 text-6xl font-light tracking-tight text-foreground">
        404
      </h1>
      <p className="mb-8 text-lg text-muted-foreground">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:brightness-110"
      >
        Back to Trollie
      </Link>
    </div>
  );
}
