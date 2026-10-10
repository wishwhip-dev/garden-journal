import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Prose } from "@/components/prose";
import { PostHeader } from "@/components/post-header";
import { SharePost } from "@/components/share-post";
import { getPost } from "@/lib/posts";
import { PlantingOutIllustration } from "@/components/planting-out-tomatoes/illustration";

const SLUG = "planting-out-tomatoes";

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
      <PlantingOutIllustration />
      <Prose>
        <p>
          Every garden has a day that feels like the hinge of its year, and on this plot it is the
          evening the tomatoes go out. Sixty-three days after they were a pinch of seed on the
          windowsill, eight plants left the cold frame tonight and went into the open bed against
          the south wall — the last of the big spring moves, and the one I am always slightly too
          nervous to make, because everything from here depends on it.
        </p>
        <p>
          The nerves are frost, always frost. The middle of May here is usually safe but not
          certainly safe, and the fleece sat ready by the gate all evening in case the forecast
          turns. The plants themselves were ready weeks ago: knee-high, faintly fragrant, leaning
          against their pots with the particular impatience of something that has outgrown its
          accommodation. Hardening off did its job — a fortnight of days outside and nights back
          under glass, leaves fattening from tender pale green to something that can take full sun
          without complaint.
        </p>
        <h2>Deep planting, late staking</h2>
        <p>
          Two things I do differently from how I began. First, they go in deep — buried to the top
          set of leaves, past all sense of proportion — because every pale hair along a buried
          tomato stem becomes root, and a plant with a foot of extra root laughs at a dry July.
          Second, the canes go in at the same moment as the plant, not after, because the other
          lesson of nine years is that a cane driven through an established root ball is a
          confession, not a fix.
        </p>
        <p>
          The bed itself got the last of the April compost forked in a fortnight ago, and the
          spacing went wider this year: seventy centimetres instead of fifty, to buy the air
          movement that keeps blight at arm&apos;s length in a wet August. It looks sparse
          tonight, eight small plants in a large brown bed with room to spare. It will not look
          sparse by the solstice. It never does.
        </p>
        <p>
          Watered in with half a can each, labelled properly in pencil, tied loosely to their
          canes with soft twine in figure-eights, and left to the moths and the blackbird who
          inspects everything I plant and approves of nothing. The windowsill is empty for the
          first time since March and looks strangely bare. The season has moved out of the house
          and into the ground, which is where the rest of the story has to happen.
        </p>
      </Prose>
      <SharePost slug={SLUG} title={post.title} blurb={post.blurb} />
    </article>
  );
}