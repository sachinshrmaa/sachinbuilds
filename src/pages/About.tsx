const About = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl tracking-tight mb-8">About</h1>

      <div className="space-y-6 text-foreground leading-relaxed">
        <p>
          I'm a builder and writer interested in the intersection of technology, markets, and education.
          I spend my days writing software, thinking about how to teach complex ideas simply, and
          occasionally trading.
        </p>

        <p>
          This site is a collection of my writings and the books that shape my thinking.
          I believe in learning in public, writing as a tool for thought, and building things
          that are useful and well-crafted.
        </p>

        <p>
          When I'm not at a keyboard, you'll find me reading, walking, or having long conversations
          about ideas that don't have easy answers.
        </p>

        <div className="border-t border-border pt-8 mt-12">
          <h2 className="text-xl tracking-tight mb-4">Elsewhere</h2>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              Twitter / X
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
