import { cn } from "@/lib/utils";

/**
 * Autumn scene: a harvest pile of squash and pumpkins on straw beside a crate of apples, with
 * the squash bed's dying vines behind and turning leaves coming down.
 */
export function SquashGlutIllustration({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 800 450"
      role="img"
      aria-label="A pile of harvested orange and blue squash resting on straw beside a wooden crate of apples, with dying squash vines and falling autumn leaves behind"
      className={cn("h-auto w-full", className)}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="800" height="450" fill="#c9a06a" />
      {/* Autumn sky */}
      <rect width="800" height="290" fill="#d8b788" />
      <circle cx="140" cy="90" r="42" fill="#f4e2b8" opacity="0.9" />
      <path d="M420 80 q40 -20 80 0 q36 -12 62 8" stroke="#e8d4ac" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.8" />
      <rect y="290" width="800" height="160" fill="#8a6f4d" />

      {/* Dying squash vines behind */}
      <path d="M0 320 q120 -50 240 -20 q120 30 240 -6" stroke="#8f8a4a" strokeWidth="7" fill="none" />
      {[[70, 296], [180, 280], [300, 292], [420, 300]].map(([x, y], i) => (
        <g key={i}>
          <path d={`M${x} ${y} q-18 -12 -30 -6 q4 16 22 16 Z`} fill={i % 2 ? "#a89a55" : "#8f8a4a"} />
          <path d={`M${x} ${y} q18 -12 30 -6 q-4 16 -22 16 Z`} fill={i % 2 ? "#8f8a4a" : "#a89a55"} />
        </g>
      ))}

      {/* Falling leaves */}
      {[
        [220, 120, "#c46a3a"], [340, 160, "#d89a4a"], [520, 110, "#b85a3a"],
        [640, 170, "#c46a3a"], [440, 200, "#d89a4a"], [700, 90, "#b85a3a"],
        [120, 210, "#d89a4a"], [560, 230, "#c46a3a"],
      ].map(([x, y, c], i) => (
        <path
          key={i}
          d={`M${x} ${y} q-10 -8 -4 -18 q10 -4 14 4 q6 8 -2 14 q-6 4 -8 0 Z`}
          fill={c as string}
          transform={`rotate(${(i * 47) % 360} ${x} ${y})`}
        />
      ))}

      {/* Straw bed */}
      <ellipse cx="360" cy="392" rx="330" ry="52" fill="#c8b078" />
      <path d="M90 380 l50 -8 M150 396 l44 -6 M220 376 l46 -8 M300 398 l50 -6 M380 380 l44 -8 M460 398 l46 -6 M540 382 l44 -8" stroke="#b09a5e" strokeWidth="4" strokeLinecap="round" />

      {/* The squash pile */}
      {/* Big orange pumpkin at the back */}
      <g>
        <ellipse cx="300" cy="340" rx="88" ry="62" fill="#d87a3a" />
        <ellipse cx="272" cy="340" rx="26" ry="60" fill="#c96a2e" />
        <ellipse cx="330" cy="340" rx="26" ry="60" fill="#e08a46" />
        <path d="M298 280 q-4 -18 6 -26" stroke="#5f7a3a" strokeWidth="9" fill="none" strokeLinecap="round" />
      </g>
      {/* Blue-grey squash left */}
      <g>
        <ellipse cx="190" cy="366" rx="58" ry="42" fill="#8fa3b0" />
        <ellipse cx="176" cy="364" rx="18" ry="40" fill="#7e93a1" />
        <path d="M188 326 q-2 -14 6 -20" stroke="#6d8291" strokeWidth="7" fill="none" strokeLinecap="round" />
      </g>
      {/* Orange squash right */}
      <g>
        <ellipse cx="440" cy="364" rx="62" ry="44" fill="#e09a4a" />
        <ellipse cx="420" cy="364" rx="18" ry="42" fill="#d0893a" />
        <ellipse cx="462" cy="364" rx="18" ry="42" fill="#eba95c" />
        <path d="M438 322 q-2 -14 8 -20" stroke="#5f7a3a" strokeWidth="7" fill="none" strokeLinecap="round" />
      </g>
      {/* Small pumpkin in front */}
      <g>
        <ellipse cx="352" cy="404" rx="42" ry="30" fill="#d87a3a" />
        <ellipse cx="336" cy="404" rx="13" ry="29" fill="#c96a2e" />
        <ellipse cx="368" cy="404" rx="13" ry="29" fill="#e08a46" />
        <path d="M350 376 q-2 -10 5 -15" stroke="#5f7a3a" strokeWidth="6" fill="none" strokeLinecap="round" />
      </g>
      {/* Small blue squash far right */}
      <ellipse cx="530" cy="398" rx="34" ry="24" fill="#8fa3b0" />
      <ellipse cx="522" cy="396" rx="10" ry="22" fill="#7e93a1" />

      {/* Crate of apples */}
      <g>
        <rect x="620" y="340" width="130" height="72" rx="4" fill="#a3805a" />
        <path d="M620 364 h130 M620 388 h130" stroke="#8a6a44" strokeWidth="5" />
        <rect x="620" y="340" width="130" height="72" rx="4" fill="none" stroke="#8a6a44" strokeWidth="4" />
        <circle cx="652" cy="336" r="15" fill="#c2452d" />
        <circle cx="686" cy="330" r="15" fill="#a84a2e" />
        <circle cx="718" cy="336" r="15" fill="#c2452d" />
        <path d="M652 322 q2 -8 8 -10 M686 316 q2 -8 8 -10 M718 322 q2 -8 8 -10" stroke="#5f7a3a" strokeWidth="4" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}