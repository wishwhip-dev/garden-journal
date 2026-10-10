import { cn } from "@/lib/utils";

/**
 * Spring scene: a bright kitchen windowsill with module trays, a lidded propagator, seedlings,
 * hand-written labels and the garden greening beyond the glass.
 */
export function SowingUnderCoverIllustration({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 800 450"
      role="img"
      aria-label="Seed trays and a lidded propagator full of seedlings on a bright windowsill, with green shoots appearing in the garden outside"
      className={cn("h-auto w-full", className)}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="800" height="450" fill="#8fb6a6" />
      {/* Spring sky outside */}
      <rect width="800" height="330" fill="#b8d8e8" />
      <circle cx="640" cy="80" r="42" fill="#f2ead0" opacity="0.9" />
      <path d="M60 110 q30 -26 62 0 q34 -18 56 8" stroke="#e6eef2" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.8" />
      {/* Greening trees outside */}
      <ellipse cx="150" cy="290" rx="90" ry="60" fill="#7fae6b" opacity="0.75" />
      <ellipse cx="540" cy="300" rx="120" ry="70" fill="#6d9e5c" opacity="0.65" />

      {/* Window frame */}
      <rect y="330" width="800" height="34" fill="#c8c2b4" />
      <line x1="330" y1="0" x2="330" y2="330" stroke="#c8c2b4" strokeWidth="14" />

      {/* Sill */}
      <rect x="0" y="330" width="800" height="26" fill="#a99c86" />
      <rect y="356" width="800" height="94" fill="#5d4f3d" />

      {/* Lidded propagator */}
      <rect x="90" y="280" width="220" height="52" rx="6" fill="#3f4a3a" />
      <path d="M90 280 Q200 216 310 280 Z" fill="#bcd8d2" opacity="0.65" />
      <path d="M96 282 Q200 228 304 282" stroke="#8fb0aa" strokeWidth="3" fill="none" opacity="0.8" />
      {/* Seedlings inside */}
      <path d="M140 278 v-14 M140 264 q-8 -8 -14 -6 M140 264 q8 -8 14 -6" stroke="#69a05a" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M200 278 v-18 M200 260 q-9 -9 -16 -7 M200 260 q9 -9 16 -7" stroke="#69a05a" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M258 278 v-12 M258 266 q-7 -7 -12 -5 M258 266 q7 -7 12 -5" stroke="#69a05a" strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* Module tray of seedlings */}
      <rect x="360" y="286" width="240" height="48" rx="5" fill="#5c5142" />
      {[380, 410, 440, 470, 500, 530, 560].map((x) => (
        <g key={x}>
          <rect x={x} y="292" width="20" height="34" rx="3" fill="#4a3f33" />
          <path d={`M${x + 10} 292 v-10 M${x + 10} 282 q-6 -6 -10 -5 M${x + 10} 282 q6 -6 10 -5`} stroke="#7fae6b" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
      ))}

      {/* Small pots with young plants */}
      <path d="M660 286 l10 46 h44 l10 -46 Z" fill="#b06a4a" />
      <path d="M684 286 v-24 M684 262 q-10 -10 -18 -8 M684 262 q10 -10 18 -8 M684 270 q-12 -4 -18 4 M684 270 q12 -4 18 4" stroke="#5f9450" strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* Hand-written labels */}
      <rect x="150" y="262" width="52" height="12" rx="2" fill="#e8e2d2" transform="rotate(-8 176 268)" />
      <rect x="430" y="270" width="52" height="12" rx="2" fill="#e8e2d2" />
      <rect x="640" y="270" width="52" height="12" rx="2" fill="#e8e2d2" transform="rotate(6 666 276)" />

      {/* Watering rose and jug */}
      <path d="M740 262 q-4 40 8 66 h28 q10 -28 6 -66 Z" fill="#7d8ea0" />
      <path d="M742 268 q-24 4 -30 22" stroke="#7d8ea0" strokeWidth="8" fill="none" strokeLinecap="round" />
    </svg>
  );
}