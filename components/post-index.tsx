"use client";

import { useState } from "react";
import Link from "next/link";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { SeasonBadge } from "@/components/season-badge";
import type { Season } from "@/lib/posts";
import { SeedCatalogueIllustration } from "@/components/ordering-seeds-by-the-fire/illustration";
import { BareBedsSnowIllustration } from "@/components/bare-beds-under-snow/illustration";
import { SowingUnderCoverIllustration } from "@/components/sowing-under-cover/illustration";
import { CompostTurningIllustration } from "@/components/turning-the-compost/illustration";
import { PlantingOutIllustration } from "@/components/planting-out-tomatoes/illustration";
import { FirstHarvestIllustration } from "@/components/first-radish-harvest/illustration";
import { HeatwaveWateringIllustration } from "@/components/watering-through-the-heatwave/illustration";
import { BeanArchIllustration } from "@/components/beans-over-the-arch/illustration";
import { SquashGlutIllustration } from "@/components/the-squash-glut/illustration";
import { BedsToBedIllustration } from "@/components/putting-the-beds-to-bed/illustration";

export type IndexPost = {
  slug: string;
  title: string;
  blurb: string;
  published: string;
  /** Date already formatted with the site's fixed format on the server, so it never re-formats. */
  dateLabel: string;
  season: Season | "";
};

/** Each index entry carries its own post's illustration as a thumbnail. */
const illustrations: Record<string, (props: { className?: string }) => React.ReactElement> = {
  "ordering-seeds-by-the-fire": SeedCatalogueIllustration,
  "bare-beds-under-snow": BareBedsSnowIllustration,
  "sowing-under-cover": SowingUnderCoverIllustration,
  "turning-the-compost": CompostTurningIllustration,
  "planting-out-tomatoes": PlantingOutIllustration,
  "first-radish-harvest": FirstHarvestIllustration,
  "watering-through-the-heatwave": HeatwaveWateringIllustration,
  "beans-over-the-arch": BeanArchIllustration,
  "the-squash-glut": SquashGlutIllustration,
  "putting-the-beds-to-bed": BedsToBedIllustration,
};

const FILTERS: { value: string; label: string }[] = [
  { value: "all", label: "All" },
  { value: "spring", label: "Spring" },
  { value: "summer", label: "Summer" },
  { value: "autumn", label: "Autumn" },
  { value: "winter", label: "Winter" },
];

/**
 * The journal index: every post newest first, filtered by season. The filter is view state only —
 * it starts at All on every load, which is also what the season is on any cold visit.
 */
export function PostIndex({ items }: Readonly<{ items: IndexPost[] }>) {
  const [filter, setFilter] = useState("all");

  const visible = filter === "all" ? items : items.filter((item) => item.season === filter);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3">
        <ToggleGroup
          type="single"
          variant="outline"
          value={filter}
          onValueChange={(value) => {
            if (value) setFilter(value);
          }}
          aria-label="Filter posts by season"
          className="flex-wrap justify-start gap-2"
        >
          {FILTERS.map(({ value, label }) => (
            <ToggleGroupItem
              key={value}
              value={value}
              aria-label={`Show ${label === "All" ? "all posts" : `${label} posts`}`}
              className="min-h-11 rounded-md px-4 text-sm"
            >
              {label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <p className="text-sm text-muted-foreground" aria-live="polite">
          Showing {visible.length} of {items.length} posts
          {filter !== "all" && ` from ${filter}`}.
        </p>
      </div>

      {visible.length === 0 ? (
        <div className="rounded-lg border border-dashed border-border p-8">
          <p className="text-sm font-medium">Nothing written in this season yet.</p>
          <p className="mt-2 text-sm text-muted-foreground">
            The journal has no {filter} entries so far — the garden was probably asleep, or I was.
            Pick another season above, or choose All to see every post in the journal.
          </p>
        </div>
      ) : (
        <ul className="flex flex-col gap-6">
          {visible.map((item) => {
            const Illustration = illustrations[item.slug];
            return (
              <li key={item.slug}>
                <article>
                  <Link
                    href={`/posts/${item.slug}`}
                    className="group block overflow-hidden rounded-xl border border-border bg-card no-underline transition-colors hover:border-ring/60"
                  >
                    <div className="aspect-[16/6] overflow-hidden border-b border-border sm:aspect-[16/5]">
                      {Illustration ? (
                        <Illustration className="h-full w-full transition-transform duration-300 group-hover:scale-[1.02]" />
                      ) : null}
                    </div>
                    <div className="space-y-2 p-5">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <SeasonBadge season={item.season} />
                        <time dateTime={item.published} className="text-sm text-muted-foreground">
                          {item.dateLabel}
                        </time>
                      </div>
                      <h2 className="text-xl font-medium tracking-tight transition-colors group-hover:text-primary">
                        {item.title}
                      </h2>
                      {item.blurb && <p className="text-sm text-muted-foreground">{item.blurb}</p>}
                    </div>
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}