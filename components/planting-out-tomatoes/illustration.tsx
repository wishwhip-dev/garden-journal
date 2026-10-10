import { cn } from "@/lib/utils";

/**
 * Spring scene: tomato plants going into an open bed at golden hour, deep-planted beside canes,
 * a cold frame behind holding the ones still hardening off.
 */
export function PlantingOutIllustration({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 800 450"
      role="img"
      aria-label="Young tomato plants staked with canes in a freshly dug bed at golden hour, with a cold frame of hardening-off seedlings behind"
      className={cn("h-auto w-full", className)}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="800" height="450" fill="#e8b46a" />
      {/* Golden-hour sky */}
      <rect width="800" height="300" fill="#e9c98a" />
      <circle cx="170" cy="110" r="55" fill="#f6e3b0" opacity="0.95" />
      <path d="M380 90 q40 -22 80 0 q40 -14 70 6" stroke="#f4e5c4" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.8" />
      <rect y="300" width="800" height="150" fill="#8a6f4d" />

      {/* Cold frame with hardening-off seedlings */}
      <g>
        <rect x="60" y="240" width="180" height="80" fill="#9aa8b8" opacity="0.45" />
        <path d="M60 240 L150 200 L240 240" fill="#9aa8b8" opacity="0.5" />
        <path d="M60 240 h180 M60 240 L150 200 L240 240" stroke="#6d7a8a" strokeWidth="5" fill="none" />
        <rect x="56" y="238" width="188" height="86" rx="4" fill="none" stroke="#8a94a2" strokeWidth="4" />
        <path d="M100 310 v-20 M100 290 q-7 -7 -12 -5 M100 290 q7 -7 12 -5" stroke="#5f9450" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M150 310 v-24 M150 286 q-8 -8 -14 -6 M150 286 q8 -8 14 -6" stroke="#5f9450" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M198 310 v-18 M198 292 q-7 -7 -12 -5 M198 292 q7 -7 12 -5" stroke="#5f9450" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      </g>

      {/* Freshly dug bed */}
      <path d="M0 330 h800 v120 H0 Z" fill="#6d5238" />
      <path d="M40 352 q60 -10 120 0 q60 10 120 0 q60 -10 120 0 q60 10 120 0 q60 -10 120 0 q60 10 120 0" stroke="#5d442e" strokeWidth="6" fill="none" />
      <path d="M20 400 q60 -10 120 0 q60 10 120 0 q60 -10 120 0 q60 10 120 0 q60 -10 120 0 q60 10 120 0" stroke="#5d442e" strokeWidth="6" fill="none" />

      {/* Tomato plants, deep planted beside canes */}
      {[
        { x: 260, h: 84 },
        { x: 420, h: 70 },
        { x: 580, h: 62 },
      ].map(({ x, h }) => (
        <g key={x}>
          <line x1={x + 34} y1={420 - h - 90} x2={x + 24} y2={418} stroke="#c8a165" strokeWidth="6" strokeLinecap="round" />
          {/* Tying twine */}
          <path d={`M${x + 30} ${430 - h} q-8 4 -14 8`} stroke="#e8e2d2" strokeWidth="2" fill="none" />
          {/* Stem */}
          <path d={`M${x + 20} 418 q4 -${h / 2} 12 -${h}`} stroke="#5f9450" strokeWidth="6" fill="none" strokeLinecap="round" />
          {/* Leaves */}
          <path d={`M${x + 24} ${400 - h * 0.4} q-18 -8 -26 -2 M${x + 24} ${400 - h * 0.4} q16 -10 24 -4`} stroke="#5f9450" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d={`M${x + 28} ${380 - h * 0.5} q-16 -10 -26 -6 M${x + 28} ${380 - h * 0.5} q16 -12 26 -8`} stroke="#6ba35a" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d={`M${x + 32} ${420 - h} q-14 -8 -20 -6 M${x + 32} ${420 - h} q14 -10 22 -8`} stroke="#6ba35a" strokeWidth="5" fill="none" strokeLinecap="round" />
          {/* Mound of soil at the base */}
          <path d={`M${x - 4} 420 q24 -14 48 0 Z`} fill="#5d442e" />
        </g>
      ))}

      {/* Watering can */}
      <g>
        <path d="M680 380 q-6 40 8 62 h40 q12 -24 8 -62 Z" fill="#4d7ba6" />
        <path d="M684 388 q-30 6 -36 34" stroke="#4d7ba6" strokeWidth="9" fill="none" strokeLinecap="round" />
        <circle cx="648" cy="424" r="9" fill="#4d7ba6" />
        <path d="M712 378 h34" stroke="#4d7ba6" strokeWidth="9" strokeLinecap="round" />
      </g>
    </svg>
  );
}