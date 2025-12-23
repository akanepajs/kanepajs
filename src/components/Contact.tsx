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
            Reach me via Linkedin, email, or Signal.
          </p>

          {/* Location note */}
          <div className="mt-10 inline-flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="font-body text-sm">Riga, Latvia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
