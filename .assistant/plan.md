# Plan

Goal: A small blog where I write short posts about my vegetable garden through the seasons: a title, a date, a few paragraphs and one photo per post, newest first, with an about page. Readers should be able to share a post.

1. app/identity.ts holds the blog's name and a description that reads as a seasonal vegetable-garden journal written by one gardener, and every page title and the share image derive from it
2. Ten posts exist, each at its own static route /posts/<slug> with a meta.json carrying a title, a YYYY-MM-DD date, a one-sentence blurb, a season tag (spring / summer / autumn / winter) and "prose": true — this blog is deliberately a written journal, so it opts out of the density check on purpose — with at least two posts in every season and dates spread across a full calendar year, slugs lowercase and hyphen-separated
3. Each post's generateMetadata returns its own title and description from meta.json, so the browser tab and link previews name the post, not the site default
4. Each post page opens with the PostHeader (title, formatted date, season tag), then shows exactly one full-width season-themed garden illustration — a distinct SVG scene per post, ten in total, drawn for that post's subject (sowing under cover, the first harvest, the winter bare beds, and so on) — followed by at least four paragraphs of prose about that post's garden event; dates are formatted with one fixed format, never the visitor's locale, so server and client HTML match
5. The home page lists all ten posts newest-first, each entry showing its post's illustration as a thumbnail, title, formatted date, blurb and season badge, and clicking an entry opens that post's page
6. A season filter (ToggleGroup with All / Spring / Summer / Autumn / Winter) sits above the index; selecting a season narrows the list to that season's posts and selecting All restores all ten, with a written empty state in case a season has no posts
7. Every post has a Share control that opens a dialog showing the post's absolute URL with a Copy link button that confirms with a visible 'Copied' state, uses the browser's native share sheet when navigator.share is available, and falls back to showing the URL as selectable text if the clipboard is unavailable, so sharing never dead-ends
8. An About page at /about tells who gardens here, what is grown across the seasons and how the journal is organised, and includes a table of what is sown, tended and harvested in each of the four seasons, reachable from the site header and footer on every page
9. The header links home and to About, every page renders when opened directly at its own URL with no prior navigation, and an unknown /posts/<slug> URL shows a not-found state with a way back to the index
10. Every page, the share dialog and the filtered index remain usable at phone width, with illustrations scaling to their container and controls touch-sized
11. Reloading any page shows the same content every time, since posts are static files — the season filter resets to All on reload and nothing is presented as saved that silently empties

These are the outcomes this task is judged against.