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
            Open to collaborations on AI governance, economic impact research, animal welfare, and effective giving. Reach me via email or LinkedIn.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
