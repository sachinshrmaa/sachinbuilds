# sachinbuilds

A fast, markdown-based personal site: writings and a bookshelf, both
statically generated at build time.

## Content

- `content/writings/*.md` — blog posts. Frontmatter: `title`, `date`
  (`YYYY-MM-DD`), `excerpt`, `tags` (optional string array), `draft`
  (optional bool). A draft is fully excluded from the production build,
  the writings list, the sitemap, and the RSS feed — but still renders
  locally under `npm run dev` (with a "Draft" badge) so you can preview it
  before publishing. Remove the `draft` line to publish.
- `content/bookshelf/*.md` — books. Frontmatter: `title`, `author`,
  `status` (`reading` | `read` | `want-to-read`), `rating` (optional,
  1-5), `link` (optional), `date` (optional). Body is optional notes,
  rendered as markdown.

To publish, add a new `.md` file to the relevant folder and deploy — there
is no database or admin login.

## Configuration

Site name, description, contact email, and social links live in
[`lib/site-config.ts`](lib/site-config.ts). Update `url` there once you
have a production domain.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Routes

- `/` — home
- `/writings`, `/writings/[slug]` — blog
- `/bookshelf` — books
- `/contact`
- `/sitemap.xml`, `/robots.txt`, `/feed.xml` — generated automatically from content
