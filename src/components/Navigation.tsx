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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display text-2xl tracking-wider hover:text-primary transition-colors">
          CURRIX
        </a>
        
        {/* Nav links - hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors font-body">
            ABOUT
          </a>
          <a href="#" className="text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors font-body">
            VISION
          </a>
          <a href="#" className="text-sm tracking-wider text-primary hover:text-primary/80 transition-colors font-body">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
