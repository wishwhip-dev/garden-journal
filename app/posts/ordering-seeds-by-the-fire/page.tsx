import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Prose } from "@/components/prose";
import { PostHeader } from "@/components/post-header";
import { SharePost } from "@/components/share-post";
import { getPost } from "@/lib/posts";
import { SeedCatalogueIllustration } from "@/components/ordering-seeds-by-the-fire/illustration";

const SLUG = "ordering-seeds-by-the-fire";

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
      <SeedCatalogueIllustration />
      <Prose>
        <p>
          The garden is asleep and I am not, which is the arrangement we have come to. On the
          twelfth of January the beds were frozen to the consistency of concrete and the only
          gardening available to me was the indoor kind, so I did what I do every year at about
          this point: I spread the seed catalogues across the kitchen table, made a pot of tea,
          and began the annual fiction in which I believe I have unlimited time and infinite
          square metres.
        </p>
        <p>
          The ritual has a shape to it. First I read everything and want everything — the purple
          carrots, the climbing courgette, a cucumber described with such warmth that I suspect the
          copywriter has met it. Then I take a pencil and cross most of it out, because the
          discipline of the plot is that it only holds so much. Ninety square metres sounds like a
          great deal until you remember that winter cabbage occupies its ground from May until the
          dark days, and leeks longer than that, and that the courgette — one courgette — will
          still take over a third of a bed and then take over the kitchen as well.
        </p>
        <h2>What actually went on the list</h2>
        <p>
          In the end the order ran to eleven packets, which is two more than last year and three
          fewer than the year I had to be talked down. The bones of it never change: peas for the
          freezer, a salad mixture that has earned its place four summers running, parsnips because
          they are the cheapest luxury there is, and the garlic that technically went in during
          October and does not care what the calendar says. The new entries this year are a
          chicory for winter leaves under cover and a dwarf French bean that claims to crop in
          nine weeks — a claim I will believe when I am picking it.
        </p>
        <p>
          The other half of the winter order is the seed I saved myself. There are broad bean
          seeds in a labelled envelope from the strongest plant of last August, and a jar of
          tomato seed fermenting its way clean, and the strange satisfaction of those two things
          outweighs anything on the glossy pages. Buying seed is a plan; keeping seed is a habit,
          and habits are what carry a garden through the seasons that a plan cannot.
        </p>
        <p>
          By the time the tea was cold the list was done, and the garden outside the window had
          gone fully dark, frost ferning the glass. Nothing will happen for weeks now, and that
          is the point of the month. The order goes off tomorrow, the boxes will arrive while the
          beds are still asleep, and the whole enterprise of next summer has been quietly begun
          from a chair by the fire — which is, I have decided, the most productive gardening I do
          all year.
        </p>
      </Prose>
      <SharePost slug={SLUG} title={post.title} blurb={post.blurb} />
    </article>
  );
}