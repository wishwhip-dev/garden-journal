import { formatPublished, listPosts } from "@/lib/posts";
import { PostIndex, type IndexPost } from "@/components/post-index";

/**
 * The index. Generated from the posts on disk — there is no list to maintain and nothing here to
 * edit when a post is added. See `lib/posts.ts`. Dates are formatted once here, server-side, with
 * the site's fixed format, so the client never re-renders them in the visitor's locale.
 */
export default function Home() {
  const items: IndexPost[] = listPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    blurb: post.blurb,
    published: post.published,
    dateLabel: formatPublished(post.published),
    season: post.season,
  }));

  return <PostIndex items={items} />;
}
