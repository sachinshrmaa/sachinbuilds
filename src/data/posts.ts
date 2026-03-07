export type Category = "software" | "personal" | "teaching" | "trading";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: Category;
  date: string;
  slug: string;
  content: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  status: "reading" | "finished" | "want-to-read";
  notes?: string;
  coverUrl?: string;
}

export const categories: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "software", label: "Software" },
  { value: "personal", label: "Personal" },
  { value: "teaching", label: "Teaching" },
  { value: "trading", label: "Trading" },
];

export const posts: BlogPost[] = [
  {
    id: "1",
    title: "On Building Software That Lasts",
    excerpt: "Most software is written to be replaced. What if we designed it to endure? Thoughts on longevity in code.",
    category: "software",
    date: "2026-02-28",
    slug: "building-software-that-lasts",
    content: "Most software is written to be replaced. What if we designed it to endure? This is a longer exploration of what it means to write durable software...",
  },
  {
    id: "2",
    title: "Lessons from a Year of Trading",
    excerpt: "What the markets taught me about patience, risk, and the stories we tell ourselves about money.",
    category: "trading",
    date: "2026-02-15",
    slug: "lessons-from-trading",
    content: "Trading is less about the markets and more about yourself...",
  },
  {
    id: "3",
    title: "Teaching as a Mirror",
    excerpt: "You don't really understand something until you've tried to explain it to someone who doesn't.",
    category: "teaching",
    date: "2026-01-20",
    slug: "teaching-as-mirror",
    content: "Every time I stand in front of a class, I learn more than my students do...",
  },
  {
    id: "4",
    title: "Walking Without a Destination",
    excerpt: "A short reflection on slowing down, getting lost, and why aimlessness is underrated.",
    category: "personal",
    date: "2026-01-05",
    slug: "walking-without-destination",
    content: "I've been walking more lately. Not for exercise, not to get somewhere...",
  },
  {
    id: "5",
    title: "The Elegant Monolith",
    excerpt: "Microservices aren't always the answer. Sometimes a well-structured monolith is the most elegant architecture.",
    category: "software",
    date: "2025-12-10",
    slug: "elegant-monolith",
    content: "The industry has spent a decade breaking things apart. Maybe it's time to put some of them back together...",
  },
  {
    id: "6",
    title: "Risk Management for the Individual Trader",
    excerpt: "Position sizing, stop losses, and the psychology of protecting your capital.",
    category: "trading",
    date: "2025-11-22",
    slug: "risk-management-individual-trader",
    content: "The first rule of trading is don't lose money. The second rule is don't forget the first rule...",
  },
];

export const books: Book[] = [
  {
    id: "1",
    title: "The Design of Everyday Things",
    author: "Don Norman",
    status: "reading",
    notes: "Rethinking how I approach interface design after this one.",
  },
  {
    id: "2",
    title: "Meditations",
    author: "Marcus Aurelius",
    status: "finished",
    notes: "A book I return to every year. Timeless wisdom on discipline and perspective.",
  },
  {
    id: "3",
    title: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    status: "finished",
    notes: "Wealth, happiness, and clear thinking. Dense with insight.",
  },
  {
    id: "4",
    title: "Thinking in Systems",
    author: "Donella H. Meadows",
    status: "want-to-read",
  },
  {
    id: "5",
    title: "Market Wizards",
    author: "Jack D. Schwager",
    status: "reading",
    notes: "Interviews with top traders. Pattern recognition at its finest.",
  },
  {
    id: "6",
    title: "The Elements of Style",
    author: "Strunk & White",
    status: "finished",
    notes: "Short, sharp, essential. Every writer should read this once a year.",
  },
];
