const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Artūrs Kaņepājs
          </p>
          
          <nav className="flex items-center gap-6">
            <a 
              href="#about" 
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              About
            </a>
            <a 
              href="#research" 
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Research
            </a>
            <a 
              href="#contact" 
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
