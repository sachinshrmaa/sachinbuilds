export const siteConfig = {
  name: "Hi, I'm Sachin.",
  shortName: "SACHINBUILDS",
  url: "https://sachinsbuild.com",
  description:
    "By day I teach full-stack dev to undergrad students in Sikkim, and by night I vibe code alone on <a href='https://wicklog.in'>Wicklog</a>, a trading journal for people who trade like they read T&Cs — never. I also dabble in trading myself, mostly so I have data for the app, and definitely not because I enjoy losing money in new and exciting ways.",
  bio: `I play chess, write when the mood strikes, and I'm a firm believer that "building in public" mostly means telling strangers on the internet how confused you are. This blog is where I dump thoughts on code, trading, teaching, and the general chaos of running a one-man startup with zero HR department to complain to.

If any of that sounds like your kind of mess, stick around.`,
  email: "mail.sachinshrmaa@gmail.com",
  accentColor: "#3735b5",
  socials: [{ label: "Instagram", href: "https://instagram.com/sachinbuilds" }, { label: "LinkedIn", href: "https://linkedin.com/in/sachinshrmaa" }, { label: "GitHub", href: "https://github.com/sachinshrmaa" }] as { label: string; href: string }[],
} as const;