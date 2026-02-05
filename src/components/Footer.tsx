const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <span className="font-display text-3xl tracking-wider">CURRIX</span>
          
          {/* Tagline */}
          <p className="text-muted-foreground font-body text-sm tracking-wider text-center">
            NOT FAST FOOD. FOOD CULTURE.
          </p>
          
          {/* Copyright */}
          <p className="text-muted-foreground font-body text-xs tracking-wider">
            © 2025 CURRIX. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
