const Vision = () => {
  const phases = [
    {
      phase: "01",
      title: "LAUNCH",
      description: "Flagship Currywurst concept in the Netherlands. Strong visual identity. First believers.",
      status: "NOW",
    },
    {
      phase: "02",
      title: "CULTURE",
      description: "Build relevance through creators, events, and collaborations. Own the conversation.",
      status: "2026",
    },
    {
      phase: "03",
      title: "SCALE",
      description: "Multiple locations. Packaged products. International markets. Global recognition.",
      status: "2027+",
    },
  ];

  return (
    <section className="min-h-screen flex items-center py-24 px-6">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section label */}
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-8 font-body">
          THE VISION
        </p>
        
        {/* Main statement */}
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight mb-20">
          FROM LOCAL ICON
          <br />
          TO <span className="text-gradient">GLOBAL BRAND.</span>
        </h2>
        
        {/* Phases */}
        <div className="space-y-0">
          {phases.map((phase, index) => (
            <div 
              key={phase.phase}
              className="grid md:grid-cols-12 gap-6 py-12 border-t border-border group hover:bg-accent/50 transition-colors duration-300 px-4 -mx-4"
            >
              <div className="md:col-span-2">
                <span className="text-6xl md:text-7xl font-display text-muted-foreground group-hover:text-primary transition-colors">
                  {phase.phase}
                </span>
              </div>
              <div className="md:col-span-3">
                <h3 className="font-display text-2xl md:text-3xl">{phase.title}</h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-lg text-muted-foreground font-body font-light leading-relaxed">
                  {phase.description}
                </p>
              </div>
              <div className="md:col-span-2 md:text-right">
                <span className={`font-display text-lg ${index === 0 ? 'text-primary' : 'text-muted-foreground'}`}>
                  {phase.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
