import { Flame } from "lucide-react";

const SecretSauce = () => {
  const sauces = [
    {
      name: "CLASSIC HEAT",
      description: "Our signature blend. Tomato, curry, paprika, and a kiss of cayenne.",
      spiceLevel: 2,
      color: "from-orange-500 to-red-600",
      tag: "BESTSELLER",
    },
    {
      name: "SMOKY EMBER",
      description: "Chipotle meets curry. Deep, smoky, unforgettable.",
      spiceLevel: 3,
      color: "from-red-600 to-red-800",
      tag: "BOLD",
    },
    {
      name: "GOLDEN GLOW",
      description: "Turmeric-forward with honey mustard notes. Mild but mighty.",
      spiceLevel: 1,
      color: "from-yellow-400 to-orange-500",
      tag: "MILD",
    },
    {
      name: "INFERNO X",
      description: "Ghost pepper infused. For those who dare. Sign the waiver.",
      spiceLevel: 5,
      color: "from-red-700 to-black",
      tag: "EXTREME",
    },
    {
      name: "TRUFFLE NOIR",
      description: "Black truffle, aged balsamic, curry. Elevated street food.",
      spiceLevel: 1,
      color: "from-neutral-600 to-neutral-900",
      tag: "PREMIUM",
    },
    {
      name: "MANGO TANGO",
      description: "Sweet mango, habanero kick. The perfect paradox.",
      spiceLevel: 3,
      color: "from-yellow-500 to-orange-600",
      tag: "TROPICAL",
    },
  ];

  return (
    <section id="sauces" className="min-h-screen py-24 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-8 font-body">
          SECRET SAUCE
        </p>
        
        {/* Main statement */}
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
          THE SAUCE IS
          <br />
          <span className="text-fire fire-glow">EVERYTHING.</span>
        </h2>
        
        <p className="text-xl text-muted-foreground font-body font-light mb-16 max-w-2xl">
          Six signature sauces. Each one crafted to perfection. 
          From mild to madness — find your flavor.
        </p>
        
        {/* Sauce grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sauces.map((sauce) => (
            <div 
              key={sauce.name}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${sauce.color} rounded-t-2xl`} />
              
              {/* Tag */}
              <span className="inline-block text-xs tracking-widest text-muted-foreground border border-border rounded-full px-3 py-1 mb-4">
                {sauce.tag}
              </span>
              
              {/* Name */}
              <h3 className="font-display text-2xl mb-3 group-hover:text-primary transition-colors">
                {sauce.name}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                {sauce.description}
              </p>
              
              {/* Spice level */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground tracking-wider">HEAT</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Flame 
                      key={i} 
                      className={`w-4 h-4 transition-colors ${
                        i < sauce.spiceLevel 
                          ? 'text-primary' 
                          : 'text-muted-foreground/30'
                      }`}
                      fill={i < sauce.spiceLevel ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom quote */}
        <div className="mt-20 text-center">
          <p className="text-2xl md:text-3xl font-display text-muted-foreground">
            SAME WURST. <span className="text-foreground">SIX PERSONALITIES.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecretSauce;
