import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Prose } from "@/components/prose";
import { PostHeader } from "@/components/post-header";
import { SharePost } from "@/components/share-post";
import { getPost } from "@/lib/posts";
import { SowingUnderCoverIllustration } from "@/components/sowing-under-cover/illustration";

const SLUG = "sowing-under-cover";

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
      <SowingUnderCoverIllustration />
      <Prose>
        <p>
          The middle of March is when the season quietly changes address: from the frozen beds
          outside to the windowsill above the radiator, where the real spring has already begun.
          This afternoon I sowed the year&apos;s first tomatoes, the chillies, the basil and the
          squashes, none of which will go anywhere near soil for another six weeks, and all of
          which are now germinating on the warm side of the glass while the plot still thinks it
          is winter.
        </p>
        <p>
          Under cover sowing is a small piece of dishonesty with the calendar and I have never
          once felt guilty about it. A tomato needs roughly eight weeks of warmth before it is fit
          to face the outside world, and the last frost here can arrive as late as mid-May, so the
          arithmetic is unforgiving: sow now or eat shop tomatoes in September. The windowsill
          propagator holds two trays at a steady warmth, and the lid fogs up each morning the way
          it has every March for nine years, which is as sure a sign of spring as any in the
          hedgerows.
        </p>
        <h2>How the sowing went</h2>
        <p>
          Method is dull and matters completely. Seed compost, firmed and not compacted; one seed
          per module for the big seeds and a pinch per cell for the basil; a label written
          immediately, in pencil, because the one year I trusted my memory I raised a whole tray
          of something I could not identify at planting-out time. I water from below by standing
          the trays in a few centimetres of water until the surface darkens, which keeps the
          damping-off fungi from throwing a party on the soil surface.
        </p>
        <p>
          The squashes get special treatment because they sulk at any check to their roots. Each
          seed goes in its own deep pot, edge-upward, half-submerged, and germinates within a week
          on the warmth of the laundry room shelf. Courgette and squash seedlings grow with a
          greediness that is almost embarrassing; from a fat yellow seed to a plant too big for its
          pot in under a fortnight, which means the whole back end of the year — the glut, the
          gifts to neighbours, the marrow nobody asked for — is set in motion by a Tuesday evening
          on a kitchen windowsill.
        </p>
        <p>
          By dusk every tray was labelled, watered, and lidded, and the sill looked like what it
          is: the garden, temporarily indoors. Now comes the fortnight of checking twice a day
          with an eagerness that is frankly undignified, and the first crooked pale neck of a
          tomato pushing the compost up like a lift arriving. The season has started. It has just
          started indoors, where it is warm, where all the best early seasons begin.
        </p>
      </Prose>
      <SharePost slug={SLUG} title={post.title} blurb={post.blurb} />
    </article>
  );
}