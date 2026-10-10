import { cn } from "@/lib/utils";

/**
 * Winter scene: the kitchen table with seed catalogues open, seed packets stacked beside a mug,
 * and a frost-ferned window on the dark garden outside.
 */
export function SeedCatalogueIllustration({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 800 450"
      role="img"
      aria-label="A winter kitchen table with open seed catalogues, stacked seed packets, a mug of tea, and a frosted window showing the dark garden"
      className={cn("h-auto w-full", className)}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="800" height="450" fill="#1c2333" />
      {/* Wall and floor */}
      <rect width="800" height="340" fill="#2a3040" />
      <rect y="340" width="800" height="110" fill="#3d3327" />
      <rect y="334" width="800" height="8" fill="#57452f" />

      {/* Window with frost ferns on the garden beyond */}
      <rect x="70" y="60" width="280" height="200" rx="10" fill="#141a29" />
      <rect x="84" y="74" width="252" height="172" fill="#22304a" />
      {/* Bare apple tree outside */}
      <path d="M200 246 L200 190 M200 205 L178 180 M200 198 L224 172 M188 195 L176 208 M214 192 L228 206" stroke="#0d1320" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* Snow on the sill outside */}
      <rect x="84" y="238" width="252" height="10" rx="4" fill="#dfe8f2" />
      {/* Frost ferns */}
      <path d="M92 80 q18 30 2 58 M96 84 q-14 22 -4 44 M322 78 q-20 34 -4 62 M318 84 q16 24 6 46 M205 76 q-10 26 2 50" stroke="#9db4d6" strokeWidth="2" fill="none" opacity="0.7" />
      <rect x="82" y="72" width="256" height="176" rx="4" fill="none" stroke="#6b7a91" strokeWidth="3" />
      <line x1="210" y1="74" x2="210" y2="246" stroke="#6b7a91" strokeWidth="5" />

      {/* Warm lamp glow from the left */}
      <circle cx="120" cy="330" r="150" fill="#c98a3d" opacity="0.08" />

      {/* Table */}
      <rect x="60" y="270" width="560" height="26" rx="6" fill="#7a5c38" />
      <rect x="80" y="296" width="20" height="110" fill="#5f472c" />
      <rect x="560" y="296" width="20" height="110" fill="#5f472c" />

      {/* Open seed catalogue */}
      <path d="M300 258 L390 244 L390 268 L300 282 Z" fill="#e8e2d2" />
      <path d="M390 244 L480 252 L480 276 L390 268 Z" fill="#f4efe2" />
      <path d="M308 260 L382 249 M312 268 L380 258" stroke="#b8a98c" strokeWidth="2" />
      <path d="M398 250 L468 256 M400 258 L466 264" stroke="#b8a98c" strokeWidth="2" />
      {/* A tomato drawing on the page */}
      <circle cx="440" cy="258" r="7" fill="#c2452d" />

      {/* Seed packets in a stack */}
      <rect x="150" y="236" width="58" height="40" rx="3" fill="#7d9c5e" transform="rotate(-4 179 256)" />
      <rect x="156" y="228" width="58" height="40" rx="3" fill="#c2884e" transform="rotate(3 185 248)" />
      <rect x="150" y="242" width="58" height="40" rx="3" fill="#8f6fa8" />
      <circle cx="179" cy="262" r="10" fill="#e8e2d2" />

      {/* Pencil */}
      <rect x="480" y="276" width="70" height="7" rx="3" fill="#d9a441" transform="rotate(-6 515 279)" />

      {/* Mug of tea, steaming */}
      <rect x="530" y="240" width="34" height="32" rx="5" fill="#a8503c" />
      <path d="M564 248 q14 8 0 18" stroke="#a8503c" strokeWidth="5" fill="none" />
      <path d="M542 230 q4 -10 0 -18 M552 232 q4 -10 0 -18" stroke="#cfcfd6" strokeWidth="2.5" fill="none" opacity="0.5" strokeLinecap="round" />

      {/* Radiator under the window */}
      <rect x="120" y="300" width="180" height="70" rx="6" fill="#4a5265" />
      <path d="M132 308 v54 M152 308 v54 M172 308 v54 M192 308 v54 M212 308 v54 M232 308 v54 M252 308 v54 M272 308 v54" stroke="#38404f" strokeWidth="6" />

      {/* Snow falling outside the window */}
      <circle cx="120" cy="120" r="3" fill="#dfe8f2" opacity="0.9" />
      <circle cx="170" cy="150" r="2.5" fill="#dfe8f2" opacity="0.7" />
      <circle cx="255" cy="110" r="3" fill="#dfe8f2" opacity="0.8" />
      <circle cx="300" cy="170" r="2.5" fill="#dfe8f2" opacity="0.6" />
      <circle cx="140" cy="200" r="2.5" fill="#dfe8f2" opacity="0.7" />
    </svg>
  );
}