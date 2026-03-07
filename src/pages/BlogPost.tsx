import { useParams, Link } from "react-router-dom";
import { posts } from "@/data/posts";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-serif mb-4">Post not found</h1>
        <Link to="/blog" className="text-primary text-sm hover:underline">
          ← Back to blog
        </Link>
      </div>
    );
  }

  return (
    <article>
      <Link
        to="/blog"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft size={14} /> Back to blog
      </Link>

      <div className="flex items-baseline gap-3 mb-3">
        <span className="text-[10px] uppercase tracking-widest text-primary font-medium">
          {post.category}
        </span>
        <span className="text-xs text-muted-foreground">
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </div>

      <h1 className="text-3xl md:text-4xl tracking-tight mb-8">{post.title}</h1>

      <div className="prose prose-neutral max-w-none">
        <p className="text-foreground leading-relaxed">{post.content}</p>
      </div>
    </article>
  );
};

export default BlogPost;
