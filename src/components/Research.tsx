import { ExternalLink, FileText, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const publications = [
  {
    title: "What do Large Language Models Say About Animals?",
    venue: "ACM FAccT",
    year: "2025",
    description: "Investigating LLM responses and biases regarding animal welfare and ethics.",
    link: "https://arxiv.org/abs/2503.04804",
    tags: ["Animal Ethics", "LLMs", "AI Alignment"]
  },
  {
    title: "Navigating AI's Impact on Labor: Challenges, Scenarios, and Policy Pathways",
    venue: "SSRN",
    year: "2025",
    description: "Policy analysis on how policymakers can prepare for AI's transformative effects on employment and labor markets.",
    link: "https://forum.effectivealtruism.org/posts/e7KzMqheMNnKKAjpc/the-future-of-work-how-can-policymakers-prepare-for-ai-s",
    tags: ["Economics", "Policy", "Labor"]
  },
  {
    title: "Towards Safe Multilingual Frontier AI",
    venue: "NeurIPS SoLaR workshop (Best Sociotechnical Paper)",
    year: "2024",
    description: "Policy recommendations to enhance multilingual AI capabilities while mitigating risks of multilingual jailbreaks across 24 EU languages.",
    link: "https://arxiv.org/abs/2409.13708",
    tags: ["AI Safety", "EU Policy", "Multilingual"]
  }
];

const Research = () => {
  return (
    <section id="research" className="py-24 gradient-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Selected Research
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Selected works on AI safety, governance, and the intersection of technology and policy
            </p>
            <div className="w-20 h-1 gradient-hero mx-auto rounded-full mt-6" />
          </div>

          {/* Publications grid */}
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <article
                key={pub.title}
                className="gradient-card p-8 rounded-2xl shadow-soft border border-border/50 hover:shadow-medium transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-xs font-body font-medium bg-primary/10 text-primary rounded-full">
                        {pub.year}
                      </span>
                      <span className="text-sm font-body text-muted-foreground">
                        {pub.venue}
                      </span>
                    </div>
                    
                    <h3 className="font-display text-xl md:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {pub.title}
                    </h3>
                    
                    <p className="font-body text-muted-foreground mb-4">
                      {pub.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {pub.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-body bg-muted text-muted-foreground rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <Button variant="outline" size="sm" asChild>
                      <a href={pub.link} target="_blank" rel="noopener noreferrer">
                        <FileText className="w-4 h-4" />
                        Read Paper
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* More links */}
          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="ghost" asChild>
                <a 
                  href="https://forum.effectivealtruism.org/users/arturs-kanepajs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <BookOpen className="w-4 h-4" />
                  All EA Forum Posts
                  <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a 
                  href="https://www.researchgate.net/scientific-contributions/Arturs-Kanepajs-2293261847" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FileText className="w-4 h-4" />
                  ResearchGate Profile
                  <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
