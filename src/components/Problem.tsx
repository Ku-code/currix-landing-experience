const Problem = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-24 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-8 font-body">
          THE PROBLEM
        </p>
        
        {/* Main statement */}
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight mb-16">
          STREET FOOD IS{" "}
          <span className="text-muted-foreground">GENERIC.</span>
          <br />
          <span className="text-muted-foreground">UNBRANDED.</span>
          <br />
          <span className="text-muted-foreground">FORGETTABLE.</span>
        </h2>
        
        {/* Supporting text */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div className="space-y-6">
            <p className="text-xl text-muted-foreground font-body font-light leading-relaxed">
              Currywurst is one of Europe's most beloved street foods. 
              Millions consumed every year.
            </p>
            <p className="text-xl text-foreground font-body leading-relaxed">
              Yet no brand owns it.
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-xl text-muted-foreground font-body font-light leading-relaxed">
              No iconic identity. No cultural movement. 
              No global recognition.
            </p>
            <p className="text-2xl text-primary font-display tracking-wide">
              UNTIL NOW.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
