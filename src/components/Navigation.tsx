import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#about", label: "ABOUT" },
  { href: "#sauces", label: "SAUCES" },
  { href: "#vision", label: "VISION" },
  { href: "#contact", label: "CONTACT" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <a href="#top" className="font-display text-xl tracking-wider hover:text-primary transition-colors">
          CURRIX
        </a>
        
        {/* Nav links - hidden on mobile */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wider transition-colors font-body ${
                link.label === "CONTACT"
                  ? "text-primary hover:text-primary/80 font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col justify-center">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-display text-2xl tracking-wider transition-colors ${
                    link.label === "CONTACT"
                      ? "text-primary hover:text-primary/80"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
