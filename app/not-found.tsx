import Link from "next/link";

/**
 * Shown for any URL the site has no route for — including an unknown /posts/<slug>. The site
 * header and footer still render around this, since the root layout wraps every route.
 */
export default function NotFound() {
  return (
    <div className="flex flex-col items-start gap-4 py-16">
      <p className="text-sm text-muted-foreground">404</p>
      <h1 className="text-2xl font-semibold tracking-tight">Nothing growing here</h1>
      <p className="max-w-prose text-muted-foreground">
        There is no page at this address. It may have been picked over, or it may never have been
        sown — either way, the journal itself is still where you left it.
      </p>
      <Link
        href="/"
        className="rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground no-underline transition-colors hover:bg-primary/90"
      >
        Back to the journal
      </Link>
    </div>
  );
}
