import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Blog" },
  { to: "/bookshelf", label: "Bookshelf" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border">
        <div className="max-w-2xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="font-serif text-xl tracking-tight text-foreground hover:text-primary transition-colors"
          >
            SachinBuilds
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-light tracking-wide transition-colors ${
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-light tracking-wide transition-colors ${
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main className="flex-1 max-w-2xl mx-auto px-6 py-12 w-full">
        {children}
      </main>

      <footer className="border-t border-border">
        <div className="max-w-2xl mx-auto px-6 py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} sachinbuilds. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
