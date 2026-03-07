import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { categories, type Category } from "@/data/posts";

type SortOrder = "newest" | "oldest";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data, error } = await supabase.from("posts").select("*").order("date", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const filtered = useMemo(() => {
    let result = activeCategory === "all"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

    result = [...result].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [activeCategory, sortOrder, posts]);

  return (
    <div>
      <h1 className="text-3xl md:text-4xl tracking-tight mb-2">Blog</h1>
      <p className="text-muted-foreground mb-8">
        Thoughts on software, teaching, trading, and life.
      </p>

      <div className="flex flex-wrap items-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-3 py-1 text-xs rounded-full border transition-colors ${
              activeCategory === cat.value
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
        <span className="mx-2 text-border">|</span>
        <button
          onClick={() => setSortOrder(sortOrder === "newest" ? "oldest" : "newest")}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {sortOrder === "newest" ? "Newest first ↓" : "Oldest first ↑"}
        </button>
      </div>

      {isLoading ? (
        <p className="text-muted-foreground text-sm">Loading posts...</p>
      ) : (
        <div className="space-y-10">
          {filtered.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="block group">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-[10px] uppercase tracking-widest text-primary font-medium">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </span>
              </div>
              <h2 className="text-xl font-serif group-hover:text-primary transition-colors mb-1">{post.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
            </Link>
          ))}
          {filtered.length === 0 && (
            <p className="text-muted-foreground text-sm">No posts in this category yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Blog;
