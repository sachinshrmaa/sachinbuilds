import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { BookOpen, Check, Bookmark } from "lucide-react";

const statusConfig = {
  reading: { label: "Currently Reading", icon: BookOpen, className: "text-primary" },
  finished: { label: "Finished", icon: Check, className: "text-muted-foreground" },
  "want-to-read": { label: "Want to Read", icon: Bookmark, className: "text-muted-foreground" },
};

const Books = () => {
  const { data: books = [], isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const { data, error } = await supabase.from("books").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const grouped = {
    reading: books.filter((b) => b.status === "reading"),
    finished: books.filter((b) => b.status === "finished"),
    "want-to-read": books.filter((b) => b.status === "want-to-read"),
  };

  if (isLoading) {
    return (
      <div>
        <h1 className="text-3xl md:text-4xl tracking-tight mb-2">Books</h1>
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl md:text-4xl tracking-tight mb-2">Books</h1>
      <p className="text-muted-foreground mb-12">
        What I'm reading, what I've read, and what's on the list.
      </p>

      {(["reading", "finished", "want-to-read"] as const).map((status) => {
        const config = statusConfig[status];
        const Icon = config.icon;
        const items = grouped[status];
        if (items.length === 0) return null;

        return (
          <section key={status} className="mb-12">
            <h2 className="text-xl tracking-tight flex items-center gap-2 mb-6">
              <Icon size={18} className={config.className} />
              {config.label}
            </h2>
            <div className="space-y-6">
              {items.map((book) => (
                <div key={book.id} className="border-l-2 border-border pl-4">
                  <h3 className="font-serif text-lg">{book.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{book.author}</p>
                  {book.notes && (
                    <p className="text-sm text-muted-foreground leading-relaxed italic">"{book.notes}"</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Books;
