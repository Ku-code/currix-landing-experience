const Solution = () => {
  const pillars = [
    { title: "CLEAN DESIGN", desc: "Bold, minimal, unmistakable" },
    { title: "STRONG IDENTITY", desc: "Brand-first, not product-first" },
    { title: "ARTIST-FRIENDLY", desc: "Culture creators want to associate" },
    { title: "INFINITELY SCALABLE", desc: "Food, merch, events, culture" },
  ];

  return (
    <section className="min-h-screen flex items-center py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section label */}
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-8 font-body">
          THE SOLUTION
        </p>
        
        {/* Main statement */}
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
          CURRIX TURNS CURRYWURST
          <br />
          INTO A <span className="text-primary">BRAND WITH ATTITUDE.</span>
        </h2>
        
        {/* Pillars grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.title}
              className="border border-border rounded-2xl p-6 hover:border-primary transition-colors duration-300 group"
            >
              <div className="text-4xl font-display text-muted-foreground group-hover:text-primary transition-colors mb-4">
                0{index + 1}
              </div>
              <h3 className="font-display text-lg mb-2">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{pillar.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Quote */}
        <div className="mt-24 border-l-2 border-primary pl-8 rounded-sm">
          <p className="text-2xl md:text-3xl font-body font-light italic text-muted-foreground">
            "Consumers don't buy food anymore —{" "}
            <span className="text-foreground not-italic">they buy brands, identity, and experiences.</span>"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solution;
