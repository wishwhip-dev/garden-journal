import { cn } from "@/lib/utils";

/**
 * Summer scene: a blazing sun over a wilting bed, a full watering can mid-pour, cracked dry
 * ground at the path edge and shade cloth strung between canes.
 */
export function HeatwaveWateringIllustration({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 800 450"
      role="img"
      aria-label="A blazing sun over a vegetable garden in a heatwave: drooping lettuce, a watering can pouring, cracked dry ground and a shade cloth strung up between canes"
      className={cn("h-auto w-full", className)}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="800" height="450" fill="#e8a45c" />
      {/* Heat-hazed sky */}
      <rect width="800" height="290" fill="#e9b071" />
      {/* Sun with heat rings */}
      <circle cx="620" cy="90" r="80" fill="#f6d089" opacity="0.4" />
      <circle cx="620" cy="90" r="58" fill="#f6d089" opacity="0.6" />
      <circle cx="620" cy="90" r="40" fill="#f2e2ac" />

      {/* Shade cloth between canes */}
      <line x1="60" y1="180" x2="180" y2="196" stroke="#c8a165" strokeWidth="6" />
      <line x1="300" y1="210" x2="180" y2="196" stroke="#c8a165" strokeWidth="6" />
      <path d="M66 184 L296 214 L296 254 L66 224 Z" fill="#d8cfa8" opacity="0.75" />

      {/* Ground */}
      <rect y="290" width="800" height="160" fill="#a08258" />
      {/* Cracks at the path edge */}
      <path d="M40 420 l24 -18 8 22 20 -14 M180 428 l18 -16 12 20 M540 416 l22 -14 10 20 18 -12 M690 428 l16 -18 14 16" stroke="#8a6f4a" strokeWidth="3" fill="none" />

      {/* Wilting lettuce */}
      {[
        { x: 110, d: 6 },
        { x: 250, d: -5 },
        { x: 400, d: 7 },
      ].map(({ x, d }) => (
        <g key={x} transform={`rotate(${d} ${x} 350)`}>
          <ellipse cx={x} cy={352} rx={26} ry={16} fill="#9aa85a" />
          <path d={`M${x} 344 q-10 -18 -20 -20 M${x} 344 q10 -18 20 -20`} stroke="#8a9850" strokeWidth="5" fill="none" strokeLinecap="round" />
        </g>
      ))}

      {/* Bean row holding on, leaves curled */}
      {[480, 540, 600, 660, 720].map((x) => (
        <g key={x}>
          <path d={`M${x} 400 q4 -50 0 -84`} stroke="#6f8f4a" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d={`M${x - 2} 340 q-12 -8 -18 -2 M${x + 2} 326 q10 -10 18 -6`} stroke="#8a9a55" strokeWidth="4" fill="none" strokeLinecap="round" />
        </g>
      ))}

      {/* Watering can mid-pour */}
      <g>
        <path d="M330 330 q-10 56 14 84 h58 q18 -30 10 -84 Z" fill="#4d7ba6" />
        <path d="M338 344 q-44 4 -46 48" stroke="#4d7ba6" strokeWidth="12" fill="none" strokeLinecap="round" />
        <circle cx="290" cy="394" r="14" fill="#4d7ba6" />
        <path d="M398 328 h42" stroke="#4d7ba6" strokeWidth="12" strokeLinecap="round" />
        {/* Pouring arc */}
        <path d="M292 402 q-16 26 -30 44" stroke="#7fc4d6" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.9" />
        <circle cx="258" cy="452" r="6" fill="#7fc4d6" />
        <circle cx="266" cy="440" r="5" fill="#a5d8e4" />
      </g>

      {/* Water butt and hose reel in the corner */}
      <g>
        <rect x="620" y="300" width="90" height="120" rx="6" fill="#3f5a4a" />
        <rect x="612" y="292" width="106" height="14" rx="6" fill="#35493c" />
        <path d="M626 340 h78 M626 380 h78" stroke="#2f4237" strokeWidth="6" />
        <circle cx="700" cy="440" r="22" fill="#6a625a" />
        <circle cx="700" cy="440" r="9" fill="#8a827a" />
      </g>

      {/* Heat shimmer lines */}
      <path d="M120 250 q20 -8 40 0 M300 260 q20 -8 40 0 M480 250 q20 -8 40 0" stroke="#f4e0b8" strokeWidth="3" fill="none" opacity="0.6" />
    </svg>
  );
}