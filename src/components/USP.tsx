const USP = () => {
  return (
    <section className="min-h-screen flex items-center py-24 px-6 bg-card relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <span className="font-display text-[40vw] leading-none">X</span>
      </div>
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section label */}
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-8 font-body">
          WHY CURRIX
        </p>
        
        {/* Main statement */}
        <h2 className="font-display text-4xl md:text-6xl lg:text-8xl leading-tight mb-16">
          CURRIX <span className="text-primary">OWNS</span> CURRYWURST
          <br />
          <span className="text-muted-foreground">AS A BRAND.</span>
        </h2>
        
        {/* USP points */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4 bg-background rounded-2xl p-6 border border-border">
            <div className="w-12 h-1 bg-primary rounded-full" />
            <h3 className="font-display text-xl">BRAND-FIRST</h3>
            <p className="text-muted-foreground font-body font-light">
              Built for identity, not just taste. Simple, iconic, Google-able.
            </p>
          </div>
          <div className="space-y-4 bg-background rounded-2xl p-6 border border-border">
            <div className="w-12 h-1 bg-secondary rounded-full" />
            <h3 className="font-display text-xl">CULTURE-DRIVEN</h3>
            <p className="text-muted-foreground font-body font-light">
              Food, culture, and identity in one scalable platform.
            </p>
          </div>
          <div className="space-y-4 bg-background rounded-2xl p-6 border border-border">
            <div className="w-12 h-1 bg-foreground rounded-full" />
            <h3 className="font-display text-xl">GLOBAL POTENTIAL</h3>
            <p className="text-muted-foreground font-body font-light">
              Positioned to become the Coca-Cola of Currywurst.
            </p>
          </div>
        </div>
        
        {/* Comparison */}
        <div className="mt-24 text-center">
          <p className="text-xl text-muted-foreground font-body mb-6">
            Just like Coca-Cola is more than a drink...
          </p>
          <p className="text-3xl md:text-5xl font-display">
            CURRIX IS <span className="text-primary">MORE</span> THAN A CURRYWURST.
          </p>
        </div>
      </div>
    </section>
  );
};

export default USP;
