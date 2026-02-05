import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-pulse-slow" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Brand name */}
        <h1 className="font-display text-[clamp(3rem,12vw,10rem)] leading-[0.85] tracking-tight mb-6 animate-slide-up">
          CURRIX CURRYWURST
        </h1>
        
        {/* Tagline */}
        <p className="text-muted-foreground text-xl md:text-2xl font-body font-light tracking-wide mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          NOT FAST FOOD.
        </p>
        <p className="text-primary text-2xl md:text-3xl font-display tracking-wider mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          FOOD CULTURE.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button variant="hero" size="xl">
            JOIN THE MOVEMENT
          </Button>
          <Button variant="heroOutline" size="xl">
            LEARN MORE
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
        <ArrowDown className="w-8 h-8 text-muted-foreground" />
      </div>
      
      {/* Location badge */}
      <div className="absolute bottom-12 right-8 hidden md:block">
        <p className="text-xs text-muted-foreground tracking-widest uppercase">
          Born in The Netherlands
        </p>
      </div>
    </section>
  );
};

export default Hero;
