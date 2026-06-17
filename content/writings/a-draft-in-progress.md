---
title: "A draft in progress"
date: "2026-06-15"
excerpt: "This post is still being written — it won't appear on the live site until the draft flag is removed."
tags: ["meta"]
draft: true
---

This is an example of a draft post. It exists in `content/writings/` like
any other file, but the `draft: true` line in its frontmatter keeps it out
of the production build entirely — it's absent from `/writings`, the
sitemap, and the RSS feed, and visiting its URL on the deployed site
returns a 404.

While running `npm run dev` locally, though, it still renders normally
(with a small "Draft" badge) so it can be read and edited in context.

To publish it, just remove the `draft: true` line — or delete this file
once you've written your own.
