import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Prose } from "@/components/prose";
import { PostHeader } from "@/components/post-header";
import { SharePost } from "@/components/share-post";
import { getPost } from "@/lib/posts";
import { FirstHarvestIllustration } from "@/components/first-radish-harvest/illustration";

const SLUG = "first-radish-harvest";

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
      <FirstHarvestIllustration />
      <Prose>
        <p>
          The first harvest of the year is never the biggest and is always the sweetest. Today it
          was a trug of radishes, pulled at half past six in the evening with the soil still warm,
          their tops on and their tails still dusty. Twenty-eight days from seed to table, which
          makes the radish the only vegetable that can pay back a bed within the month, and the
          first proof that the whole machinery of the year is actually going to run.
        </p>
        <p>
          I ate two of them standing in the row, in the old unhygienic tradition of every
          gardener who has ever grown a radish. They were ferocious and watery at once, and
          completely unlike the pallid round things sold in bags, which is the first lesson of
          June and one that has to be relearned annually: the taste of a vegetable is a function
          of the quarter hour between its ground and your mouth. Nothing sold anywhere in this
          town has a quarter hour.
        </p>
        <h2>What the first pick changes</h2>
        <p>
          The first harvest matters less for the weight of it than for what it does to your
          behaviour. After it, the garden is no longer a plan but a going concern: the salads
          join the radishes within days, the broad beans are suddenly pods instead of flowers,
          and the whole psychology of the plot flips from investment to income. It is also the
          moment the birds decide the garden is a shop, so the netting came out today as well,
          dragged round the lettuce like a man securing a market stall.
        </p>
        <p>
          The radishes themselves are the small succession kind, sown thickly in a strip beside
          the carrots back in May — a companion trick, since the fast radishes mark the row and
          get pulled before the slow carrots need the room. Half of them went to a salad that
          needed nothing from a shop except the oil, and the rest sit on the windowsill in a jam
          jar of water, tops on, keeping crisp for tomorrow. The jar has been a June fixture on
          that sill since the first year here.
        </p>
        <p>
          In the great ledger of the year this evening counts for almost nothing: half a
          kilogram, maybe less. But the first harvest is not an entry in the ledger, it is the
          opening of the account, and every glut and failure and marrow forced on an unsuspecting
          neighbour from now until October is drawn on it. The trug is by the back door now,
          empty, waiting to be filled again tomorrow. That is the season I have been waiting for
          since January.
        </p>
      </Prose>
      <SharePost slug={SLUG} title={post.title} blurb={post.blurb} />
    </article>
  );
}