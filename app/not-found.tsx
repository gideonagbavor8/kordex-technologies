import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[var(--surface-base)] px-6 text-center">
      <div
        className="dot-field absolute inset-0 opacity-40"
        style={{
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 45%, #000 10%, transparent 72%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 60% 50% at 50% 45%, #000 10%, transparent 72%)',
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand)] opacity-[0.1] blur-[130px]" />

      <div className="relative z-10">
        <p className="font-display text-[7rem] leading-none text-[var(--brand)] sm:text-[9rem]">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl text-[var(--text-primary)]">
          This page has moved on
        </h1>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-[var(--text-secondary)]">
          The page you are looking for does not exist, or it has been renamed since you
          last saw it.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-lg bg-[var(--brand)] px-7 py-3 font-semibold text-white shadow-lg shadow-[var(--brand)]/25 transition-colors hover:bg-[var(--brand-bright)]"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-[var(--surface-hairline-strong)] px-7 py-3 font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--brand-bright)] hover:bg-white/[0.03]"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </main>
  );
}
