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
    <nav className="fixed top-4 right-4 z-50 flex items-center gap-3">
      <a href="#top" className="font-display text-sm tracking-wider hover:text-primary transition-colors">
        CURRIX
      </a>
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-card/90 backdrop-blur-md border border-border shadow-lg"
            : "bg-card/60 backdrop-blur-sm border border-border/50"
        }`}
      >
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="Open menu">
              <Menu className="h-4 w-4" />
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
