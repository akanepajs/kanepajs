import { Mail, Globe, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-12">
            Interested in AI safety, governance research, or collaboration opportunities?
          </p>

          {/* Contact card */}
          <div className="gradient-card p-10 rounded-3xl shadow-medium border border-border/50">
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <a 
                href="mailto:akanepajs@gmail.com"
                className="flex items-center gap-4 p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 gradient-hero rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <p className="font-body text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-body text-foreground">arturs@kanepajs.eu</p>
                </div>
              </a>

              <a 
                href="https://tracelab.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div className="text-left">
                  <p className="font-body text-sm text-muted-foreground mb-1">Website</p>
                  <p className="font-body text-foreground">ziedoefektivi.lv</p>
                </div>
              </a>
            </div>

            {/* Social links */}
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://www.linkedin.com/in/arturs-kanepajs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://forum.effectivealtruism.org/users/arturs-kanepajs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  EA Forum
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Location note */}
          <div className="mt-10 inline-flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="font-body text-sm">Based in Riga, Latvia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
