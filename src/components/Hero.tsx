import { useState } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <section id="top" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background video - with fallback if it fails to load */}
      {!videoError && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
          aria-hidden
          onError={() => setVideoError(true)}
        >
          <source src="currix-video.mp4" type="video/mp4" />
        </video>
      )}
      {/* Fallback background when video fails to load */}
      {videoError && (
        <div className="absolute inset-0 z-0 bg-background" aria-hidden />
      )}
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-background/70 z-[1]" aria-hidden />
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-pulse-slow z-[1]" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto -mt-32 md:-mt-48">
        {/* Brand name */}
        <h1 className="font-display text-[clamp(3rem,12vw,10rem)] leading-[0.85] tracking-tight mb-6 animate-slide-up">
          <span className="text-gradient-wave">CURRYWURST</span>
        </h1>
        
        {/* Tagline */}
        <p className="text-muted-foreground text-base md:text-lg font-body font-light tracking-wide mb-2 -mt-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          NOT FAST FOOD.
        </p>
        <p className="text-primary text-lg md:text-xl font-display tracking-wider mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          FOOD CULTURE.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-fade-in mt-40 md:mt-56" style={{ animationDelay: '0.6s' }}>
          <Button variant="hero" size="lg" className="text-sm h-10 px-6" asChild>
            <a href="#contact">JOIN THE MOVEMENT</a>
          </Button>
          <Button variant="heroOutline" size="lg" className="text-sm h-10 px-6" asChild>
            <a href="#about">LEARN MORE</a>
          </Button>
        </div>
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
