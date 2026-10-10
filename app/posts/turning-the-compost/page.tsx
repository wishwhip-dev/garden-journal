import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Prose } from "@/components/prose";
import { PostHeader } from "@/components/post-header";
import { SharePost } from "@/components/share-post";
import { getPost } from "@/lib/posts";
import { CompostTurningIllustration } from "@/components/turning-the-compost/illustration";

const SLUG = "turning-the-compost";

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
      <CompostTurningIllustration />
      <Prose>
        <p>
          April is the month the compost run stops being a quiet corner and becomes the busiest
          workplace on the plot. Today was the great spring turn: fork the contents of the middle
          bay out, back in, and over, mixing what was outside in and what was inside out, so that
          everything gets its spell at the hot centre where the real work happens. It is the
          heaviest, sweatiest, most satisfying job of the gardening year, and the smell when the
          fork goes in is the smell of the whole system working.
        </p>
        <p>
          The heap told me what it thought of my winter. The outer layers were cold and half-done,
          full of the brassica stems I was too idle to chop small in November — lesson repeated,
          again, that everything goes in smaller than you think necessary. But the centre was
          perfect: dark, crumbly, sweet-smelling, hot enough that the steam rose in visible
          columns in the cool air, and stitched through with fat red worms that I moved aside like
          colleagues. That centre is a year of peelings and mower clippings and old plants,
          finished.
        </p>
        <h2>What the turn is actually for</h2>
        <p>
          People imagine composting is what happens in the bin. Mostly it is what happens because
          of the turning: the fork-through remixes the nitrogen-rich greens with the carbon-heavy
          browns, brings air back into a heap that compacts under its own weight, and moves every
          neglected corner into the hot middle where it breaks down fast and clean. Skip the
          turning and you get compost eventually; do it twice and you get compost by June, which
          is the difference between mulching the tomatoes this year and mulching them next.
        </p>
        <p>
          Two barrow-loads came out of the finished end — the first free soil of the year, black
          and friable and worth more to me than anything I could buy. It went straight onto bed
          two ahead of the beans, laid on thick as a mulch rather than dug in, because the soil
          here does best fed from the top like a woodland floor. The half-done rest went back into
          the middle bay for another month, and the empty end is already filling with the spring
          mowings.
        </p>
        <p>
          By the end my back had opinions and my hands had blisters in the old familiar places,
          and the compost run looked tidy for approximately four days, which is the natural
          lifespan of tidiness on this plot. But the beds are fed, the heap is breathing, and the
          loop that started with last year&apos;s squash vines closes and reopens in the same
          afternoon. Nine years in, this remains my favourite day of the gardening calendar.
        </p>
      </Prose>
      <SharePost slug={SLUG} title={post.title} blurb={post.blurb} />
    </article>
  );
}