import { Briefcase, GraduationCap, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              About
            </h2>
            <div className="w-20 h-1 gradient-hero mx-auto rounded-full" />
          </div>

          {/* Bio */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
              I am a Technical AI Governance researcher with interests in animal ethics, 
              multilingual AI capabilities and safety, compute governance, and the economics 
              of transformative AI. My background includes over 10 years of experience spanning 
              project management, quantitative risk analysis and model validation in finance, 
              and research in economics.
            </p>
          </div>

          {/* Stats/Roles */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="gradient-card p-8 rounded-2xl shadow-soft border border-border/50 text-center group hover:shadow-medium transition-shadow duration-300">
              <div className="w-14 h-14 gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">ERA Fellowship</h3>
              <p className="font-body text-muted-foreground text-sm">
                AI Safety Research Program
              </p>
            </div>

            <div className="gradient-card p-8 rounded-2xl shadow-soft border border-border/50 text-center group hover:shadow-medium transition-shadow duration-300">
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">EA Latvia</h3>
              <p className="font-body text-muted-foreground text-sm">
                Founder & Chair of the Board
              </p>
            </div>

            <div className="gradient-card p-8 rounded-2xl shadow-soft border border-border/50 text-center group hover:shadow-medium transition-shadow duration-300">
              <div className="w-14 h-14 gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">Dzīvnieku brīvība</h3>
              <p className="font-body text-muted-foreground text-sm">
                Board Member, Animal Advocacy
              </p>
            </div>
          </div>

          {/* Experience timeline hint */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-muted/50 border border-border">
              <span className="text-2xl font-display text-primary">10+</span>
              <span className="font-body text-muted-foreground">
                years in quantitative risk analysis & finance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
