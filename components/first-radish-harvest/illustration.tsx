import { cn } from "@/lib/utils";

/**
 * Summer scene: a trug of just-pulled radishes and salad leaves at the end of a bright green bed,
 * watering can standing by, the plot at its June best.
 */
export function FirstHarvestIllustration({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 800 450"
      role="img"
      aria-label="A woven trug full of freshly pulled radishes and salad leaves at the end of a green summer bed, with a watering can in the sunshine"
      className={cn("h-auto w-full", className)}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="800" height="450" fill="#8ec8e0" />
      {/* High summer sky */}
      <rect width="800" height="280" fill="#a8d8ea" />
      <circle cx="680" cy="70" r="48" fill="#f6e9b8" opacity="0.95" />
      <path d="M90 100 q34 -24 66 0 q34 -14 58 6" stroke="#eef5f7" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.85" />

      {/* Green bed rows */}
      <rect y="280" width="800" height="170" fill="#7fae6b" />
      <path d="M0 300 q400 -18 800 0 v150 H0 Z" fill="#6fa15a" />

      {/* Lettuce rows receding */}
      {[
        { y: 310, r: 10, n: 9 },
        { y: 350, r: 13, n: 7 },
        { y: 396, r: 17, n: 5 },
      ].map(({ y, r, n }, row) =>
        Array.from({ length: n }).map((_, i) => (
          <g key={`${row}-${i}`}>
            <ellipse cx={60 + i * (720 / n) + (row * 40)} cy={y} rx={r * 1.4} ry={r} fill={row % 2 ? "#8fbe74" : "#a4cf88"} />
            <path d={`M${60 + i * (720 / n) + row * 40} ${y} q0 -${r} 0 -${r}`} stroke="#5f9450" strokeWidth="0" />
          </g>
        )),
      )}

      {/* Radish tops in the near row */}
      <g stroke="#4d8040" strokeWidth="4" fill="none" strokeLinecap="round">
        <path d="M120 430 q-6 -16 -14 -22 M120 430 q2 -18 10 -26" />
        <path d="M240 436 q-6 -16 -14 -22 M240 436 q2 -18 10 -26" />
        <path d="M360 432 q-6 -16 -14 -22 M360 432 q2 -18 10 -26" />
      </g>

      {/* Trug of radishes */}
      <g>
        <path d="M470 340 q30 74 110 74 q80 0 110 -74 Z" fill="#a3805a" />
        <path d="M478 344 q26 62 102 62 q76 0 102 -62" fill="none" stroke="#8a6a44" strokeWidth="5" />
        <path d="M492 366 h176 M486 390 h190" stroke="#8a6a44" strokeWidth="4" />
        <path d="M470 340 q110 -40 220 0" fill="#b8906a" />
        {/* Radishes, tops and tails */}
        <circle cx="520" cy="330" r="15" fill="#d64562" />
        <path d="M520 316 q-2 -16 -10 -22" stroke="#4d8040" strokeWidth="5" fill="none" strokeLinecap="round" />
        <circle cx="560" cy="322" r="17" fill="#e05a74" />
        <path d="M560 306 q0 -18 -8 -26" stroke="#4d8040" strokeWidth="5" fill="none" strokeLinecap="round" />
        <circle cx="605" cy="320" r="16" fill="#d64562" />
        <path d="M605 304 q2 -16 10 -24" stroke="#4d8040" strokeWidth="5" fill="none" strokeLinecap="round" />
        <circle cx="648" cy="326" r="15" fill="#e05a74" />
        <path d="M648 312 q-2 -14 -8 -20" stroke="#4d8040" strokeWidth="5" fill="none" strokeLinecap="round" />
        <circle cx="585" cy="336" r="13" fill="#c93a56" />
        {/* Salad leaves over the rim */}
        <path d="M680 336 q18 -24 38 -8 q-4 22 -30 20 Z" fill="#8fbe74" />
        <path d="M498 340 q-16 -20 -34 -10 q2 20 26 18 Z" fill="#a4cf88" />
      </g>

      {/* Watering can standing by */}
      <g>
        <path d="M90 300 q-8 60 12 90 h64 q20 -34 14 -90 Z" fill="#4d7ba6" />
        <path d="M96 312 q-42 10 -50 52" stroke="#4d7ba6" strokeWidth="12" fill="none" strokeLinecap="round" />
        <circle cx="48" cy="366" r="13" fill="#4d7ba6" />
        <path d="M162 298 h44" stroke="#4d7ba6" strokeWidth="12" strokeLinecap="round" />
      </g>
    </svg>
  );
}