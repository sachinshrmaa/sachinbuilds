---
title: "Rebuilding this site on nothing but markdown"
date: "2026-05-12"
excerpt: "Why I tore out a database and an admin dashboard in favor of files I can edit in a text editor."
tags: ["meta", "next.js"]
---

Most personal sites don't need a database. Mine didn't either, but I built
one anyway the first time around — a login page, an admin dashboard, a
couple of Postgres tables. It worked, but every time I wanted to publish a
paragraph I had to go through a form.

So this version throws all of that away. Every post here is a markdown file
sitting in a `content/writings` folder, right next to the code. To publish
something new, I add a file and push.

## What that buys me

- **Speed.** Pages are rendered to static HTML at build time. There's no
  database round-trip standing between a visitor and the words on the page.
- **Simplicity.** No auth, no schema migrations, no admin UI to maintain.
  The entire "CMS" is my editor and `git commit`.
- **Longevity.** Markdown files outlive frameworks. If I rewrite this site
  again in five years, the content just comes along for the ride.

## What it costs

Editing from my phone is harder. I'm fine with that trade — this is a
place for writing I've actually sat down with, not quick notes.

```ts
// the entire "backend" of this blog, roughly
const posts = fs
  .readdirSync("content/writings")
  .map((file) => parseFrontmatter(file))
  .sort(byDateDescending);
```

If you're building something similar: start with the simplest thing that
could possibly work, and only add infrastructure when the simple thing
actually breaks.
