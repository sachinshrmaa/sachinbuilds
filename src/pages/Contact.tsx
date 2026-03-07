import { useState } from "react";
import { Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to an API
    setSubmitted(true);
  };

  return (
    <div>
      <h1 className="text-3xl md:text-4xl tracking-tight mb-2">Contact</h1>
      <p className="text-muted-foreground mb-10">
        Have a question, idea, or just want to say hello? Reach out.
      </p>

      {submitted ? (
        <div className="border border-border rounded-md p-8 text-center">
          <Mail size={28} className="mx-auto text-primary mb-4" />
          <h2 className="font-serif text-xl mb-2">Message sent</h2>
          <p className="text-sm text-muted-foreground">
            Thanks for reaching out. I'll get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
          <div>
            <label htmlFor="name" className="block text-sm text-muted-foreground mb-1.5">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-secondary border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-muted-foreground mb-1.5">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-secondary border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              placeholder="you@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-muted-foreground mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-secondary border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
              placeholder="What's on your mind?"
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
