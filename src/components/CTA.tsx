import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px]" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main CTA */}
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
          BE PART OF
          <br />
          <span className="text-primary">THE MOVEMENT.</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground font-body font-light mb-12 max-w-2xl mx-auto">
          Investors. Creators. Culture-makers.
          <br />
          CURRIX is building something iconic.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="hero" size="xl">
            CONNECT WITH US
          </Button>
          <Button variant="brand" size="xl">
            INVEST IN CURRIX
          </Button>
        </div>
        
        {/* Contact info */}
        <div className="space-y-2 text-muted-foreground font-body text-sm tracking-wider">
          <p>AMSTERDAM, THE NETHERLANDS</p>
          <p className="text-foreground">INFO@CURRIX.COM</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
