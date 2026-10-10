import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Prose } from "@/components/prose";
import { PostHeader } from "@/components/post-header";
import { SharePost } from "@/components/share-post";
import { getPost } from "@/lib/posts";
import { HeatwaveWateringIllustration } from "@/components/watering-through-the-heatwave/illustration";

const SLUG = "watering-through-the-heatwave";

export function generateMetadata(): Metadata {
  const post = getPost(SLUG);
  return { title: post?.title, description: post?.blurb };
}

export default function Page() {
  const post = getPost(SLUG);
  if (!post) notFound();
  const season = post.season ? post.season[0].toUpperCase() + post.season.slice(1) : "";

  return (
    <article className="space-y-8">
      <PostHeader title={post.title} published={post.published} tags={[season, ...post.tags].filter(Boolean)} />
      <HeatwaveWateringIllustration />
      <Prose>
        <p>
          Five days over thirty degrees and the plot has turned from a garden into an argument
          about water. The butt is down to its last third, the clay has baked to something between
          a brick and a biscuit, and everything I have done since March is now in a contest with
          the sky. Watering through a heatwave is not a chore so much as a nightly triage, and
          tonight I worked the can until the light went.
        </p>
        <p>
          The first rule I learned the expensive way is that in heat you water the soil, not the
          plant, and you do it deeply and rarely rather than kindly and daily. A light sprinkle
          every evening cools the gardener and trains every root in the bed to stay near the
          surface, where the first missed day kills it. So it is one thorough can per plant, twice
          a week, at dusk — enough to soak down past the crust, enough that the plants learn to
          look for water lower down and hold on when the next dry spell comes.
        </p>
        <h2>Who gets the water, and who does not</h2>
        <p>
          Triage is the part nobody puts in the brochures. The tomatoes get everything, because
          irregular watering splits their fruit and wrecks their skins. The beans get the second
          pour, since they crop by the litre in weather like this if they are kept moist. The
          lettuces get shade cloth and pity: bolting in ninety-one degrees is not failure but
          botany, and one row has already gone to seed with a certain dignity. The established
          everything — kale, chard, the autumn bed — gets nothing at all. They have roots and
          opinions and will manage, and the butt may need to last another week.
        </p>
        <p>
          The mulch is earning its winter of applause. Where the compost went down thick in
          spring, the soil under it is still dark and workable and took the water without
          argument; where I ran short, the surface has cracked into small hexagons and the water
          runs off it like a road until I rough it up with a hand fork first. I have noted, again,
          for next spring, in the journal I keep forgetting to consult in spring: make more
          compost, spread it thicker, start earlier.
        </p>
        <p>
          Tomorrow is forecast the same, and the day after, and the small rituals repeat: cans
          filled at the tap in the grey dawn, shade cloth pegged a little higher, the lettuce that
          bolted pulled and fed to the compost that can take it while everything else is drinking.
          Summer at its most beautiful is also summer at its most demanding, and the garden keeps
          no score — but the tomatoes I keep alive this week are the ones I will be eating in
          September, so the score keeps itself.
        </p>
      </Prose>
      <SharePost slug={SLUG} title={post.title} blurb={post.blurb} />
    </article>
  );
}