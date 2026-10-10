import { cn } from "@/lib/utils";

/**
 * Winter scene: four raised beds under snow, frost on the fence, a bare apple tree, and a robin
 * on a cane.
 */
export function BareBedsSnowIllustration({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 800 450"
      role="img"
      aria-label="A snowy vegetable garden: four raised beds under white snow, a bare apple tree, a frost-covered fence, and a robin perched on a bamboo cane"
      className={cn("h-auto w-full", className)}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="800" height="450" fill="#8fa3bd" />
      {/* Grey-white winter sky */}
      <rect width="800" height="300" fill="#aebfd2" />
      <circle cx="640" cy="90" r="46" fill="#e9eef5" opacity="0.7" />
      <rect y="290" width="800" height="160" fill="#d7dfe9" />

      {/* Fence with frost */}
      <path d="M0 240 H800" stroke="#6b6257" strokeWidth="6" />
      <path d="M40 240 V180 M130 240 V180 M220 240 V180 M310 240 V180 M400 240 V180 M490 240 V180 M580 240 V180 M670 240 V180 M760 240 V180" stroke="#8b8175" strokeWidth="8" />
      <rect y="176" width="800" height="10" rx="3" fill="#8b8175" />
      <rect y="180" width="800" height="6" fill="#eef3f8" opacity="0.8" />

      {/* Bare apple tree */}
      <path d="M660 292 V210 M660 236 L636 208 M660 226 L688 200 M648 226 L630 240 M674 222 L692 238" stroke="#4d4238" strokeWidth="9" fill="none" strokeLinecap="round" />
      <path d="M660 236 L636 208 M660 226 L688 200" stroke="#4d4238" strokeWidth="5" fill="none" strokeLinecap="round" />
      <ellipse cx="660" cy="300" rx="60" ry="10" fill="#c3cfdc" />

      {/* Raised beds under snow */}
      <g>
        <rect x="80" y="320" width="180" height="70" rx="4" fill="#7b6a58" />
        <rect x="84" y="314" width="172" height="24" rx="10" fill="#f2f6fa" />
        <rect x="290" y="320" width="180" height="70" rx="4" fill="#7b6a58" />
        <rect x="294" y="314" width="172" height="24" rx="10" fill="#f2f6fa" />
        <rect x="80" y="404" width="180" height="46" rx="4" fill="#6d5d4d" />
        <rect x="84" y="398" width="172" height="22" rx="9" fill="#e8eef5" />
        <rect x="290" y="404" width="180" height="46" rx="4" fill="#6d5d4d" />
        <rect x="294" y="398" width="172" height="22" rx="9" fill="#e8eef5" />
      </g>

      {/* Hoop cloche arches over one bed, snow settling */}
      <path d="M300 320 Q380 272 460 320" stroke="#9aa8b8" strokeWidth="5" fill="none" />
      <path d="M300 322 Q380 300 460 322" stroke="#eef3f8" strokeWidth="4" fill="none" opacity="0.8" />

      {/* Bamboo cane with a robin */}
      <line x1="540" y1="290" x2="556" y2="430" stroke="#c8a165" strokeWidth="5" />
      <ellipse cx="540" cy="284" rx="16" ry="11" fill="#8a5a3b" />
      <circle cx="552" cy="276" r="8" fill="#8a5a3b" />
      <circle cx="555" cy="274" r="1.8" fill="#1c1a17" />
      <path d="M563 275 l7 2 -7 3 z" fill="#d97b3f" />
      <ellipse cx="536" cy="286" rx="7" ry="5" fill="#c9552e" />

      {/* Footprints across the snow */}
      <ellipse cx="500" cy="360" rx="7" ry="4" fill="#b6c3d2" />
      <ellipse cx="520" cy="376" rx="7" ry="4" fill="#b6c3d2" />
      <ellipse cx="542" cy="394" rx="7" ry="4" fill="#b6c3d2" />

      {/* Compost bin under snow, far left */}
      <rect x="10" y="300" width="90" height="90" rx="4" fill="#5c5348" />
      <rect x="10" y="294" width="90" height="12" rx="5" fill="#eef3f8" />

      {/* Falling snow */}
      <circle cx="110" cy="90" r="4" fill="#f6f9fc" opacity="0.9" />
      <circle cx="260" cy="140" r="3" fill="#f6f9fc" opacity="0.8" />
      <circle cx="420" cy="80" r="4" fill="#f6f9fc" opacity="0.9" />
      <circle cx="560" cy="130" r="3" fill="#f6f9fc" opacity="0.7" />
      <circle cx="720" cy="100" r="4" fill="#f6f9fc" opacity="0.9" />
      <circle cx="180" cy="200" r="3" fill="#f6f9fc" opacity="0.7" />
      <circle cx="640" cy="180" r="3" fill="#f6f9fc" opacity="0.8" />
    </svg>
  );
}