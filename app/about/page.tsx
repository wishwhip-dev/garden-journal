import type { Metadata } from "next";
import Link from "next/link";
import { Prose } from "@/components/prose";
import { SEASONS } from "@/lib/posts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who gardens here, what the plot grows through the year, and how this seasonal journal is organised.",
};

const seasonTitle = (season: string) => season.charAt(0).toUpperCase() + season.slice(1);

/** What the plot gets in each season, read like a diary rather than a manual. */
const seasonCalendar: Record<(typeof SEASONS)[number], { sow: string; tend: string; harvest: string }> = {
  spring: {
    sow: "Peas, broad beans, carrots, beetroot, lettuce, parsnips; tomatoes and squash under cover",
    tend: "Hardening off, thinning, first weed flush, slug patrols on damp evenings",
    harvest: "Overwintered garlic scapes, spring onions, the first radishes, rhubarb",
  },
  summer: {
    sow: "Successional salad, French beans, autumn beetroot, chicory for the cold months",
    tend: "Watering deeply, tying in beans and tomatoes, pinching side shoots, netting the brassicas",
    harvest: "Courgettes (too many), broad beans, new potatoes, raspberries, the first tomatoes",
  },
  autumn: {
    sow: "Overwintering onions, garlic, winter lettuce under cover, green manure on bare beds",
    tend: "Clearing spent crops, compost-building, saving seed, mulching everything that stays",
    harvest: "Squash and pumpkins, maincrop potatoes, apples, leeks, the last of the beans",
  },
  winter: {
    sow: "Almost nothing outside; chillies and onions from seed on the windowsill by February",
    tend: "Ordering seed, pruning the apple tree, feeding the soil, fixing the things July broke",
    harvest: "Leeks, kale, sprouting broccoli, parsnips dug for Christmas, stored squash",
  },
};

export default function AboutPage() {
  return (
    <article className="space-y-8">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">About</h1>
        <p className="mt-3 text-sm text-muted-foreground">Who writes this, and what it covers</p>
      </header>

      <Prose>
        <p>
          My name is not really the point, but you should know whose hands these are: I&apos;m Kat,
          and I&apos;ve gardened the same small plot behind a rented terrace for nine years. It is
          about ninety square metres of heavy clay over chalk, slightly too shaded on its east side
          and slightly too exposed on its west, and every year it teaches me the same lessons with
          new variations. This journal is how I keep score.
        </p>
        <p>
          The plot is a working kitchen garden, not a show one. It grows what we actually eat:
          peas and beans for the freezer, salads from March to October, roots that sit in the ground
          through winter, squash that stores in the cool of the back porch until well past
          Christmas. There is an apple tree older than the fence, four raised beds I built from
          scaffolding boards, a compost run of three bays, and a cold frame held together by
          optimism and wire.
        </p>
        <h2>What the plot does through the year</h2>
        <p>
          A vegetable garden is four different gardens in sequence, and it took me several years to
          stop being surprised by each handover. This table is the honest version of the year here —
          what goes in, what gets looked after, and what comes back out, season by season.
        </p>
      </Prose>

      <div className="overflow-x-auto rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-20">Season</TableHead>
              <TableHead>Sown</TableHead>
              <TableHead>Tended</TableHead>
              <TableHead>Harvested</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {SEASONS.map((season) => (
              <TableRow key={season}>
                <TableCell className="font-medium">{seasonTitle(season)}</TableCell>
                <TableCell>{seasonCalendar[season].sow}</TableCell>
                <TableCell>{seasonCalendar[season].tend}</TableCell>
                <TableCell>{seasonCalendar[season].harvest}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Prose>
        <h2>How the journal is organised</h2>
        <p>
          Every post is one event in the garden&apos;s year — the day the seed order went out, the
          week the beans took over, the afternoon the beds went to bed for winter. Each one opens
          with a drawing of the scene it describes and stays short on purpose: a few paragraphs
          written within a day or two of the thing happening, while the weather and the details are
          still honest. They appear here newest first, and the season filter at the top of the
          journal will pull out just the winter entries if that is the mood you are in.
        </p>
        <p>
          I write these for two readers. One is me, next February, trying to remember whether the
          broad beans went in before or after the frost in mid-March and whether it mattered. The
          other is you, if you keep a plot of your own or wish you did — take what is useful,
          forgive what is local to my clay and my microclimate, and{" "}
          <Link href="/">start anywhere in the year</Link>. The garden never reads in order either.
        </p>
      </Prose>
    </article>
  );
}
