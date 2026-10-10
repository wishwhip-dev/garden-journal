import { Badge } from "@/components/ui/badge";
import type { Season } from "@/lib/posts";

/**
 * A small season label, coloured from the theme's chart tokens so the four seasons read apart
 * without hardcoding colours outside the palette.
 */
const seasonColor: Record<Season, string> = {
  spring: "var(--chart-1)",
  summer: "var(--chart-3)",
  autumn: "var(--chart-5)",
  winter: "var(--chart-2)",
};

export function SeasonBadge({ season }: Readonly<{ season: Season | "" }>) {
  if (!season) return null;
  const color = seasonColor[season];
  const label = season.charAt(0).toUpperCase() + season.slice(1);
  return (
    <Badge
      variant="outline"
      className="border-transparent px-2 py-0.5"
      style={{
        color,
        backgroundColor: `color-mix(in oklab, ${color} 16%, transparent)`,
      }}
    >
      {label}
    </Badge>
  );
}
