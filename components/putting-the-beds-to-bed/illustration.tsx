import { cn } from "@/lib/utils";

/**
 * Autumn scene: the October clear-up — a rake and leaf pile, beds dressed with dark mulch, garlic
 * rows newly planted, bare bean canes and a low sun.
 */
export function BedsToBedIllustration({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 800 450"
      role="img"
      aria-label="A garden in October: mulched beds, a rake leaning by a pile of raked leaves, bare bean canes, newly planted garlic rows and a low autumn sun"
      className={cn("h-auto w-full", className)}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="800" height="450" fill="#d8a878" />
      {/* Low autumn sun */}
      <rect width="800" height="300" fill="#e0b084" />
      <circle cx="660" cy="180" r="52" fill="#f4d098" opacity="0.95" />
      <path d="M100 90 q36 -22 70 0 q34 -12 58 8" stroke="#ecd2ac" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.8" />
      <rect y="300" width="800" height="150" fill="#7a6248" />

      {/* Mulched bed with garlic rows */}
      <g>
        <path d="M60 330 h300 v90 H60 Z" fill="#4a3b2c" />
        <path d="M60 330 h300 v18 H60 Z" fill="#3a2e22" />
        {/* Freshly planted garlic tips */}
        {[100, 145, 190, 235, 280, 325].map((x) => (
          <path key={x} d={`M${x} 372 q2 -12 6 -16`} stroke="#8fae6b" strokeWidth="4" fill="none" strokeLinecap="round" />
        ))}
        <path d="M80 402 h260 M80 356 h260" stroke="#5d442e" strokeWidth="5" />
      </g>

      {/* Second bed, mulched and empty */}
      <path d="M420 340 h340 v70 H420 Z" fill="#4a3b2c" />
      <path d="M450 356 q60 -8 120 0 q60 8 120 0 q50 -6 100 0" stroke="#5d442e" strokeWidth="5" fill="none" />
      <path d="M440 384 h300" stroke="#5d442e" strokeWidth="5" />

      {/* Leaf pile and rake */}
      <g>
        <ellipse cx="180" cy="300" rx="90" ry="34" fill="#c47a3a" />
        <path d="M120 292 q20 -14 40 -2 M180 286 q22 -12 42 0 M240 294 q18 -12 36 -2" stroke="#a8622e" strokeWidth="5" fill="none" strokeLinecap="round" />
        {/* Rake leaning on the pile */}
        <line x1="268" y1="180" x2="236" y2="316" stroke="#c8a165" strokeWidth="7" strokeLinecap="round" />
        <path d="M252 176 q24 8 34 26 M254 178 q10 20 24 32" stroke="#c8a165" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M228 322 l24 4" stroke="#9aa4ad" strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* Bare bean canes, season over */}
      <g>
        <line x1="500" y1="220" x2="484" y2="360" stroke="#c8a165" strokeWidth="5" />
        <line x1="560" y1="214" x2="560" y2="362" stroke="#c8a165" strokeWidth="5" />
        <line x1="620" y1="220" x2="636" y2="360" stroke="#c8a165" strokeWidth="5" />
        <line x1="680" y1="228" x2="700" y2="362" stroke="#c8a165" strokeWidth="5" />
        <path d="M488 240 q36 -10 70 0 M556 236 q36 -8 66 2" stroke="#a8622e" strokeWidth="4" fill="none" opacity="0.7" />
      </g>

      {/* Falling leaves */}
      {[
        [340, 130, "#c46a3a"], [420, 180, "#d89a4a"], [740, 120, "#b85a3a"],
        [60, 170, "#c46a3a"], [520, 150, "#d89a4a"], [380, 250, "#b85a3a"],
      ].map(([x, y, c], i) => (
        <path
          key={i}
          d={`M${x} ${y} q-9 -8 -4 -16 q9 -4 13 4 q5 7 -2 12 q-5 4 -7 0 Z`}
          fill={c as string}
          transform={`rotate(${(i * 53) % 360} ${x} ${y})`}
        />
      ))}

      {/* Compost bays filling in the corner */}
      <rect x="700" y="260" width="90" height="100" rx="4" fill="#5c5348" />
      <path d="M706 292 h78 M706 324 h78" stroke="#4a423a" strokeWidth="5" />
      <path d="M704 330 q44 -22 82 4 v58 h-82 Z" fill="#4a3b2c" />
    </svg>
  );
}