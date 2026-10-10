import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import { identity } from "./identity";
import { Providers } from "./providers";

// The deployed address, so link previews get an absolute URL for the share image. Vercel sets it
// at build time; elsewhere Next falls back to localhost, which is fine for local work.
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

// The blog's name, description and colour come from app/identity.ts. Change them there, not here.
export const metadata: Metadata = {
  metadataBase: productionHost ? new URL(`https://${productionHost}`) : undefined,
  title: { default: identity.name, template: `%s · ${identity.name}` },
  description: identity.description,
  applicationName: identity.name,
  openGraph: { title: identity.name, description: identity.description, siteName: identity.name, type: "website" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: identity.accent,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="mx-auto flex min-h-screen max-w-3xl flex-col gap-10 px-6 py-10">
            <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-border pb-3">
              <Link
                href="/"
                className="inline-flex min-h-11 items-center text-lg font-semibold tracking-tight no-underline"
              >
                {identity.name}
              </Link>
              <nav aria-label="Main" className="-mr-2 flex items-center gap-1 text-sm">
                <Link
                  href="/"
                  className="inline-flex min-h-11 items-center rounded-md px-2 text-muted-foreground no-underline transition-colors hover:text-foreground"
                >
                  Journal
                </Link>
                <Link
                  href="/about"
                  className="inline-flex min-h-11 items-center rounded-md px-2 text-muted-foreground no-underline transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </nav>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-border pt-3 text-sm text-muted-foreground">
              <p>A journal of one small vegetable plot, season by season.</p>
              <nav aria-label="Footer" className="-mr-2 flex items-center gap-1">
                <Link
                  href="/"
                  className="inline-flex min-h-11 items-center rounded-md px-2 no-underline transition-colors hover:text-foreground"
                >
                  All posts
                </Link>
                <Link
                  href="/about"
                  className="inline-flex min-h-11 items-center rounded-md px-2 no-underline transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </nav>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
