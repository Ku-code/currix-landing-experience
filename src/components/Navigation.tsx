import { useState, useEffect } from "react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div
        className={`px-6 py-3 flex items-center gap-8 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-card/90 backdrop-blur-md border border-border shadow-lg"
            : "bg-card/60 backdrop-blur-sm border border-border/50"
        }`}
      >
        {/* Logo */}
        <a href="#" className="font-display text-xl tracking-wider hover:text-primary transition-colors">
          CURRIX
        </a>
        
        {/* Nav links - hidden on mobile */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors font-body">
            ABOUT
          </a>
          <a href="#" className="text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors font-body">
            SAUCES
          </a>
          <a href="#" className="text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors font-body">
            VISION
          </a>
          <a href="#" className="text-sm tracking-wider text-primary hover:text-primary/80 transition-colors font-body font-medium">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
