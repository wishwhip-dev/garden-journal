import { cn } from "@/lib/utils";

/**
 * Summer scene: a bamboo arch completely taken by runner beans — scarlet flowers, hanging pods,
 * a basket of picked beans on the path below.
 */
export function BeanArchIllustration({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 800 450"
      role="img"
      aria-label="A bamboo garden arch completely covered in runner beans with scarlet flowers and hanging green pods, with a basket of picked beans below"
      className={cn("h-auto w-full", className)}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="800" height="450" fill="#9ecfe0" />
      {/* Late-summer sky */}
      <rect width="800" height="280" fill="#b4dbe8" />
      <path d="M110 90 q36 -26 72 0 q36 -16 60 8" stroke="#f0f5f6" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.9" />
      <rect y="280" width="800" height="170" fill="#7fae6b" />

      {/* The arch */}
      <path d="M180 450 V180 Q180 70 400 70 Q620 70 620 180 V450" stroke="#c8a165" strokeWidth="12" fill="none" />
      <path d="M180 450 V180 Q180 70 400 70 Q620 70 620 180 V450" stroke="#b08c50" strokeWidth="4" fill="none" strokeDasharray="10 14" />

      {/* Bean vines up and over the arch */}
      <path d="M172 450 q-10 -140 6 -260 q10 -90 60 -110 Q360 40 420 90 q60 46 110 96 q50 50 88 120 l0 144" stroke="#4d7a3a" strokeWidth="7" fill="none" />
      <path d="M188 450 q6 -120 -4 -240 q-8 -80 50 -100" stroke="#5f9450" strokeWidth="5" fill="none" />
      <path d="M600 450 q4 -120 -10 -220 q-14 -70 -70 -110" stroke="#5f9450" strokeWidth="5" fill="none" />

      {/* Leaves along the vines */}
      {[
        [176, 380], [190, 300], [196, 220], [230, 140], [300, 96], [390, 78],
        [470, 92], [540, 130], [596, 200], [608, 300], [614, 380],
      ].map(([x, y], i) => (
        <g key={i}>
          <path d={`M${x} ${y} q-16 -14 -30 -8 q4 18 22 18 Z`} fill={i % 2 ? "#5f9450" : "#6fa35a"} />
          <path d={`M${x} ${y} q16 -14 30 -8 q-4 18 -22 18 Z`} fill={i % 2 ? "#6fa35a" : "#5f9450"} />
        </g>
      ))}

      {/* Scarlet flowers */}
      {[
        [214, 250], [252, 160], [340, 110], [452, 116], [560, 160], [602, 260],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="7" fill="#d23c3c" />
          <circle cx={x - 9} cy={y + 5} r="5" fill="#e05555" />
          <circle cx={x + 9} cy={y + 5} r="5" fill="#e05555" />
        </g>
      ))}

      {/* Hanging pods */}
      {[
        [238, 290, -8], [300, 200, 6], [400, 130, -4], [490, 150, 8], [574, 230, -6], [610, 330, 5],
      ].map(([x, y, r], i) => (
        <g key={i} transform={`rotate(${r} ${x} ${y})`}>
          <path d={`M${x} ${y} q10 34 2 66 q-14 -6 -16 -34 q2 -22 14 -32 Z`} fill="#4f8a3e" />
        </g>
      ))}

      {/* Basket of picked beans on the path */}
      <g>
        <path d="M640 400 q20 44 64 44 q44 0 64 -44 Z" fill="#a3805a" />
        <path d="M646 402 q18 38 58 38 q40 0 58 -38" fill="none" stroke="#8a6a44" strokeWidth="4" />
        <path d="M640 398 q64 -26 128 0" fill="#b8906a" />
        <path d="M660 392 q10 -22 22 -6 q-6 18 -22 16 Z" fill="#4f8a3e" />
        <path d="M694 386 q12 -20 24 -4 q-8 16 -24 12 Z" fill="#5f9450" />
        <path d="M726 392 q8 -18 18 -6 q-4 16 -18 14 Z" fill="#4f8a3e" />
      </g>
    </svg>
  );
}