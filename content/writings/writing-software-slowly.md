---
title: "Notes on writing software slowly"
date: "2026-04-03"
excerpt: "Speed is a side effect of clarity, not the other way around."
tags: ["craft"]
---

There's a version of "moving fast" that's really just moving carelessly
and cleaning up later. I've done plenty of that. It feels productive in
the moment and expensive for months afterward.

The slower version looks like this: sit with the problem before touching
the keyboard. Write down what you think the simplest correct solution is.
Then go build that, and notice every place where reality disagrees with
your sketch — those gaps are where the actual learning happens.

> The first draft of understanding a problem is rarely the same shape as
> the final code. Writing the code is how you find that out.

None of this is an argument against shipping quickly. It's an argument for
making sure the thing you ship quickly is the right thing, which is a
different axis entirely.

## A small habit that helps

Before opening a pull request, I try to explain the change out loud — to a
rubber duck, a colleague, whoever's around — in two sentences: what changed
and why. If I can't do that cleanly, the change usually isn't finished,
even if the tests pass.
