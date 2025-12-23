import eaLatviaLogo from "@/assets/ea-latvia-logo.png";
import dzivniekuBrivibaLogo from "@/assets/dzivnieku-briviba-logo.jpeg";

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
              My research interests include animal welfare economics, AI policy, AI ethical alignment, 
              multilingual AI capabilities and safety, compute governance, and the economics of transformative AI. 
              My background includes over 10 years of experience spanning project management, 
              quantitative risk analysis and model validation in finance, and research in economics. 
              I am also the founder and chair of the board at 𝘌𝘧𝘧𝘦𝘤𝘵𝘪𝘷𝘦 𝘈𝘭𝘵𝘳𝘶𝘪𝘴𝘮 𝘓𝘢𝘵𝘷𝘪𝘢 and a board member of 
              the animal advocacy organization 𝘋𝘻𝘪̄𝘷𝘯𝘪𝘦𝘬𝘶 𝘣𝘳𝘪̄𝘷𝘪̄𝘣𝘢.
            </p>
          </div>

          {/* Stats/Roles */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="gradient-card p-8 rounded-2xl shadow-soft border border-border/50 text-center group hover:shadow-medium transition-shadow duration-300">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                <img src={eaLatviaLogo} alt="EA Latvia" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">EA Latvia</h3>
              <p className="font-body text-muted-foreground text-sm">
                Founder & Chair of the Board
              </p>
            </div>

            <div className="gradient-card p-8 rounded-2xl shadow-soft border border-border/50 text-center group hover:shadow-medium transition-shadow duration-300">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                <img src={dzivniekuBrivibaLogo} alt="Dzīvnieku brīvība" className="w-full h-full object-cover" />
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
