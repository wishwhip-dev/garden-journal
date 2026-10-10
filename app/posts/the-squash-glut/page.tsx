import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Prose } from "@/components/prose";
import { PostHeader } from "@/components/post-header";
import { SharePost } from "@/components/share-post";
import { getPost } from "@/lib/posts";
import { SquashGlutIllustration } from "@/components/the-squash-glut/illustration";

const SLUG = "the-squash-glut";

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
      <SquashGlutIllustration />
      <Prose>
        <p>
          Two plants, fourteen squash, and a back porch that is now formally a storeroom. The
          equinox weekend is squash week here, the weather having finally convinced the vines that
          their season is over, and today I cut the lot and carried them up the garden two at a
          time like a man building a cairn. They are now curing on the porch shelves in the
          position they will hold, more or less untouched, until well past the darkest days of
          winter.
        </p>
        <p>
          The harvest itself is the easy part; the timing is the judgement. Leave a squash too long
          and the first frost takes it; cut too early and it will not keep, because the skin has
          not hardened. The test I use is the thumbnail: press it against the skin near the stalk,
          and if it dents like a pear the fruit needs another fortnight on the vine, and if the
          skin fights back it is ready. Every one of the fourteen passed today, with the stems cut
          long — a T of stem each side, because a squash with its stem knocked off starts rotting
          from the top and there is no arguing with it after that.
        </p>
        <h2>What the porch now holds</h2>
        <p>
          The tally, kept honestly in the shed book: four Crown Prince, the blue-grey ones that
          are the best keepers and the best eaters; seven Butternut, reliable as ever; two
          delicata for eating first, since they store only a couple of months; and one enormous
          pumpkin that germinated by accident in the corner of bed three and outgrew its
          circumstances. They sit on slats, not touching, in the dark and the draught, because
          airflow is the whole of squash storage and damp is the whole of squash failure.
        </p>
        <p>
          The bed they came out of is already cleared and sown with a green manure, and the vines
          themselves are chopped and going into the compost run — except the healthiest leaves,
          which always try to sneak in with mildew, and go to the council bin instead. Every year
          I mean to grow fewer squash and every year I put out the same two plants and every year
          the arithmetic finds me again. There are worse cycles to be caught in.
        </p>
        <p>
          There is a particular satisfaction to autumn storage that no summer crop gives. The
          beans and salads are eaten the week they are picked and leave nothing behind but
          gratitude; a squash is January, physically, on a shelf in the porch — a winter meal with
          a stalk on it, grown in the heat of July and waiting. When the snow is on the beds in
          February, dinner will come from this weekend&apos;s work. That is the deal the garden
          keeps with the house, and today it was honoured in full.
        </p>
      </Prose>
      <SharePost slug={SLUG} title={post.title} blurb={post.blurb} />
    </article>
  );
}