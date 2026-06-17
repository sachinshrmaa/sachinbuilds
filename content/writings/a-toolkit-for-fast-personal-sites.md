---
title: "A small toolkit for fast personal sites"
date: "2026-02-20"
excerpt: "Static HTML, self-hosted fonts, and almost no client-side JavaScript."
tags: ["performance", "next.js"]
draft: false
---

Every personal site I admire loads instantly. None of them do anything
clever to achieve that — they just avoid the things that make sites slow.

## The list

1. **Render to static HTML at build time.** If the content doesn't change
   per visitor, there's no reason to compute it per visitor.
2. **Self-host fonts.** A `<link>` to a third-party font host is a
   render-blocking request to a server you don't control. Bundling the
   font with your build removes it entirely.
3. **Ship less JavaScript.** Most of what a blog needs — navigation,
   reading an article — works fine with zero client-side script.
4. **Optimize images at build time**, not in the browser.

None of this is exotic. It's mostly about resisting the urge to add a
dependency for something a static file can already do.

```bash
# the whole deploy pipeline, more or less
npm run build
git push
```

Fast isn't a feature you bolt on afterward. It's what's left over once you
stop adding things that weren't necessary in the first place.
