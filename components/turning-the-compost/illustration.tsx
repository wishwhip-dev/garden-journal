import { cn } from "@/lib/utils";

/**
 * Spring scene: a three-bay compost run with the middle bay open, a fork mid-turn, steam rising
 * off the heap, and a wheelbarrow waiting full of dark crumbly compost.
 */
export function CompostTurningIllustration({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 800 450"
      role="img"
      aria-label="A gardener's fork turning a steaming compost heap in a wooden three-bay bin, with a wheelbarrow of dark compost beside it under a spring sky"
      className={cn("h-auto w-full", className)}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="800" height="450" fill="#a8c8dd" />
      {/* Spring sky and hedge */}
      <circle cx="130" cy="80" r="40" fill="#f2ead0" opacity="0.9" />
      <rect y="290" width="800" height="160" fill="#7fa06a" />
      <path d="M0 300 q40 -36 80 0 q40 -34 80 0 q40 -36 80 0 q40 -34 80 0 q40 -36 80 0 q40 -34 80 0 q40 -36 80 0 q40 -34 80 0 q40 -36 80 0 q40 -34 80 0 v160 H0 Z" fill="#6b8f58" />

      {/* Three-bay compost run */}
      <g>
        {/* Closed bays */}
        <rect x="70" y="250" width="160" height="150" fill="#7b6a58" />
        <rect x="70" y="250" width="160" height="14" fill="#5f5142" />
        <path d="M86 268 v132 M104 268 v132 M122 268 v132 M140 268 v132 M158 268 v132 M176 268 v132 M194 268 v132 M212 268 v132" stroke="#6d5d4d" strokeWidth="7" />
        <path d="M84 300 h134 M84 340 h134" stroke="#5a4d3f" strokeWidth="6" />
        <path d="M80 262 h140 M80 310 h140 M80 358 h140" fill="none" stroke="#8d7c66" strokeWidth="5" />
        {/* Full heap in closed bay */}
        <path d="M84 320 q40 -26 132 0 v76 h-132 Z" fill="#4a3b2c" />

        {/* Open middle bay being turned */}
        <rect x="250" y="250" width="170" height="150" fill="#7b6a58" />
        <rect x="250" y="250" width="170" height="14" fill="#5f5142" />
        <path d="M266 268 v132 M286 268 v132 M306 268 v132 M326 268 v132 M346 268 v132 M366 268 v132 M386 268 v132" stroke="#6d5d4d" strokeWidth="7" />
        <path d="M262 300 h146 M262 340 h146" stroke="#5a4d3f" strokeWidth="6" />
        {/* Half-turned heap with steam */}
        <path d="M256 330 q50 -40 90 -6 q40 -28 68 8 v68 h-158 Z" fill="#54422f" />
        <path d="M290 306 q-8 -18 4 -34 M340 300 q-8 -18 4 -34 M380 312 q-8 -16 2 -30" stroke="#e6eef2" strokeWidth="5" fill="none" opacity="0.65" strokeLinecap="round" />
        {/* Fork mid-turn */}
        <line x1="470" y1="190" x2="402" y2="304" stroke="#8a6f4d" strokeWidth="7" strokeLinecap="round" />
        <path d="M396 296 l24 14 M392 304 l26 12" stroke="#9aa4ad" strokeWidth="5" strokeLinecap="round" />
        <path d="M402 304 q14 8 24 14" fill="none" stroke="#54422f" strokeWidth="10" strokeLinecap="round" />
      </g>

      {/* Wheelbarrow of finished compost */}
      <g>
        <path d="M560 330 l16 -54 h130 l14 54 q-80 26 -160 0 Z" fill="#3f6ea8" />
        <path d="M566 328 q78 22 152 0 l-6 -20 q-72 18 -142 0 Z" fill="#3a3428" />
        <circle cx="588" cy="408" r="26" fill="#2c2a27" />
        <circle cx="588" cy="408" r="12" fill="#6d6a66" />
        <path d="M610 336 l40 62" stroke="#3f6ea8" strokeWidth="8" strokeLinecap="round" />
        <path d="M700 322 h56" stroke="#3f6ea8" strokeWidth="9" strokeLinecap="round" />
      </g>

      {/* Worms in the turned soil */}
      <path d="M300 356 q8 -6 16 0 q8 6 16 0" stroke="#c76b6b" strokeWidth="3.5" fill="none" opacity="0.9" />
      <path d="M420 368 q8 -6 16 0" stroke="#c76b6b" strokeWidth="3.5" fill="none" opacity="0.8" />
    </svg>
  );
}