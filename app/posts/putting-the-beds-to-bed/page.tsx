import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Prose } from "@/components/prose";
import { PostHeader } from "@/components/post-header";
import { SharePost } from "@/components/share-post";
import { getPost } from "@/lib/posts";
import { BedsToBedIllustration } from "@/components/putting-the-beds-to-bed/illustration";

const SLUG = "putting-the-beds-to-bed";

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
      <BedsToBedIllustration />
      <Prose>
        <p>
          The second week of October and the garden changed hands today — from me to winter. It is
          the clear-up I measure the whole year against: bean canes untied and bundled, spent
          plants pulled or chopped, leaves raked into their wire bay, and every empty bed dressed
          with a thick blanket of compost before the ground turns cold enough to refuse visitors.
          It is mostly tidying, and yet it never feels like tidying. It feels like signing the
          year off.
        </p>
        <p>
          The leaf harvest is the quiet gold of the month. Nine bags of maple and apple leaves
          went into the leaf-mould cages this afternoon, and in two years they will have rotted
          into the soft black crumble that seeds are started in here — better than anything
          bought, and free except for the raking. Everything the trees drop is a crop the garden
          grows without being asked, and I have come to think of the rake as a harvesting tool
          with an unusual sense of timing.
        </p>
        <h2>What stays out, and what goes in</h2>
        <p>
          Not everything is cleared. The leeks and kale stand through the winter as the standing
          crop, and the parsnips stay where they grew, sweeter for every frost. The beds going
          bare got their compost mulch — fed from the top, never dug in, on the woodland-floor
          principle this clay has taught me three times — and bed two has gone one better, sown
          with a green manure rye that will hold the nitrogen over winter and be cut down in
          March. And the garlic is in, as of this evening: three rows of this year&apos;s best
          bulbs, split and planted point-up, sleeping until the spring.
        </p>
        <p>
          The bean arch came down too, which is the melancholy part of the day. The canes are
          bundled in the shed with the netting and the fleece and the rest of the season&apos;s
          equipment, and the compost run has filled by half in a single afternoon with vines and
          stems and the last of the haulm. The plot looks oddly naked now — mulched rectangles,
          empty arch foundations, the apple tree beginning to show its true shape — the way a
          stage looks after a good play.
        </p>
        <p>
          The seed order is already half-written, because the best moment to review the year is
          the week you are taking it apart, and the failures are still fresh and the successes
          still fragrant. But that is January&apos;s work, and its fire, and its post. Today the
          garden went to bed on time, under a good thick blanket, and I locked the gate behind me
          on the year of 2026&apos;s growing.
        </p>
      </Prose>
      <SharePost slug={SLUG} title={post.title} blurb={post.blurb} />
    </article>
  );
}