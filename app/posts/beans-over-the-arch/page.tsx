import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Prose } from "@/components/prose";
import { PostHeader } from "@/components/post-header";
import { SharePost } from "@/components/share-post";
import { getPost } from "@/lib/posts";
import { BeanArchIllustration } from "@/components/beans-over-the-arch/illustration";

const SLUG = "beans-over-the-arch";

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
      <BeanArchIllustration />
      <Prose>
        <p>
          In May the bean arch was twelve bamboo canes lashed together and an act of faith. In
          August it is a green tunnel. The runners have met in the middle, gone over the top, and
          are now climbing down the far side out of what I can only assume is pure enthusiasm, and
          walking through it with a basket has become the best two minutes of my day and the most
          dangerous, because something in there is always about to drop a bean down my collar.
        </p>
        <p>
          Picking beans is a negotiation, not a harvest. Pick too small and you waste the crop;
          pick too late and the pods go stringy, the plant reads the season as complete and shuts
          down for the year. The trick is to go through the arch every day or two and take
          everything pencil-thin to finger-thick, which keeps the plant in a permanent state of
          urgency. Two visits a day at the height of it, one with the morning tea, one before
          dinner, and still some of them get away from me.
        </p>
        <h2>The arithmetic of a glut</h2>
        <p>
          Six plants up each side, twelve in total, and each one in August is producing faster
          than two people can eat. This is the known equation of the runner bean and every summer
          it ambushes me again: what begins in June as charming abundance becomes, by the third
          week of this month, a form of correspondence. Bags of beans have gone over the fence to
          the neighbours, who now leave their gate pointedly shut; the freezer has a drawer that
          is entirely beans, sliced and blanched; and tonight&apos;s dinner was beans in garlic
          butter, beans in a frittata, and a salad that was mostly beans with an apology of
          lettuce.
        </p>
        <p>
          The scarlet flowers are the reason I grow them up the arch rather than up sticks, and
          they are having their best year yet — the bees have been working the tunnel since July
          with an industry you can hear from the back door. Everything about this crop earns its
          space twice: once in the kitchen and once in the sound and colour it puts into the plot
          at exactly the moment the early summer crops are folding up.
        </p>
        <p>
          Late August is the turn of the season even when the thermometer disagrees, and the beans
          are the clock. In a fortnight the picking will slow, the pods on the vines I miss will
          fatten into the leathery ones I will save for seed, and the arch will go back to being
          bamboo. But for these weeks it is the most abundant object I own, and I grew it from a
          packet. Twelve plants, one arch, and more beans than sense — the summer running exactly
          to form.
        </p>
      </Prose>
      <SharePost slug={SLUG} title={post.title} blurb={post.blurb} />
    </article>
  );
}