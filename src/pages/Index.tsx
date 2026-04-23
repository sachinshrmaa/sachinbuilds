import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const { data: recentPosts = [] } = useQuery({
    queryKey: ["recent-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("date", { ascending: false })
        .limit(3);
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="space-y-16">
      <section className="pt-8">
        <h1 className="text-4xl md:text-5xl leading-tight tracking-tight mb-6">
          engineer, teacher,
          <br />
          <span className="italic text-primary">curious mind.</span>
        </h1>
        <p className="text-muted-foreground leading-relaxed max-w-lg">
          I write about software, teaching, trading, and whatever else I'm
          thinking about. I also share the books I'm reading along the way.
        </p>
      </section>

      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl tracking-tight">Recent Writing</h2>
          <Link
            to="/blog"
            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
          >
            All posts <ArrowRight size={14} />
          </Link>
        </div>
        <div className="space-y-8">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="block group"
            >
              <div className="flex items-baseline justify-between gap-4 mb-1">
                <h3 className="text-lg font-serif group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
