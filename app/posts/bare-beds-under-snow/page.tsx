import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Prose } from "@/components/prose";
import { PostHeader } from "@/components/post-header";
import { SharePost } from "@/components/share-post";
import { getPost } from "@/lib/posts";
import { BareBedsSnowIllustration } from "@/components/bare-beds-under-snow/illustration";

const SLUG = "bare-beds-under-snow";

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
      <BareBedsSnowIllustration />
      <Prose>
        <p>
          There is a particular silence to the plot in February that I never manage to describe to
          anyone who has not stood in it. The snow came in the night and lay down over everything —
          the four raised beds, the compost bins, the cold frame with its cracked pane — and for
          once the garden is not asking anything of me at all. I put on the good boots and went
          down mostly to look, which is its own legitimate gardening activity, whatever the more
          industrious books imply.
        </p>
        <p>
          The beds wear the snow well. Under the white, the ground is doing the slow invisible work
          that is winter&apos;s real job: frost is heaving the clay into crumbs, breaking down the
          clods I left rough on purpose in October, and killing a fair share of the slugs and their
          eggs before they can run up the census numbers in spring. A bare bed under snow is not an
          empty bed. It is a bed in the middle of being prepared by someone far more patient than
          I am.
        </p>
        <h2>What is still working</h2>
        <p>
          Not everything is sleeping. The leeks stand in a ragged line by the gate with the snow
          burned off them in a halo, still good for the pot; the kale in the far bed has gone
          sweet with the cold, as it does every year and as I forget every year. Under the fleece
          in bed three there are winter salad leaves having a slow, quiet season of their own, and
          the broad beans sown in November sit in their rows looking grimly alive, about three
          centimetres of determination each.
        </p>
        <p>
          The robin came to supervise, as robins do, perching on the cane I left marking the
          parsnips. A garden in winter is not short of life; it is short of noise. I counted five
          birds in ten minutes and the fieldfares in the apple tree are a flock I can hear from the
          back door. Everything hungry is having a harder February than I am, and the seed heads I
          left standing deliberately — the nasturtiums, the fennel — are earning their keep exactly
          as intended.
        </p>
        <p>
          I stayed until my hands ached, took no decisions, dug nothing, and walked home along my
          own footprints. The plan for the month is the plan for the month every year: leave it
          alone, let the frost work, keep off the frozen beds, and let February be February. The
          snow is doing the digging this week, and honestly it does it better.
        </p>
      </Prose>
      <SharePost slug={SLUG} title={post.title} blurb={post.blurb} />
    </article>
  );
}