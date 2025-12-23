import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import artursHeadshot from "@/assets/arturs-headshot.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-surface">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile photo */}
          <div 
            className="mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl scale-110" />
              <img 
                src={artursHeadshot} 
                alt="Arturs Kanepajs" 
                className="relative w-44 h-44 md:w-52 md:h-52 rounded-full object-cover object-[center_15%] border-4 border-card shadow-elegant"
              />
            </div>
          </div>


          {/* Name */}
          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <span className="text-foreground">Arturs</span>
            <br />
            <span className="text-gradient">Kanepajs</span>
          </h1>

          {/* Title */}
          <p 
            className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto opacity-0 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            🔶
          </p>

          {/* Keywords */}
          <div 
            className="flex flex-wrap justify-center gap-3 mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            {["AI Governance",
               "EU Policy", 
              "Animal Welfare",
              "Labor Economics",
              "Effective Giving"
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-sm font-body bg-muted text-muted-foreground rounded-full border border-border/50 hover:border-primary/30 hover:text-foreground transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up"
            style={{ animationDelay: '0.6s' }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#research">
                View Research
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:arturs@kanepajs.eu">
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </Button>
          </div>

          {/* Quick links */}
          <div 
            className="flex items-center justify-center gap-6 mt-12 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.7s' }}
          >
            <a 
              href="https://www.linkedin.com/in/arturs-kanepajs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="font-body text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
