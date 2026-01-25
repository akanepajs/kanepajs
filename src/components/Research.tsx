import { ExternalLink, FileText, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const publications = [
  {
    title: "When to Ban Farrowing Crates? Analysing EU Policy Options for Ban Dates and Transition Periods",
    venue: "Griffin Carpenter",
    year: "2026",
    description: "Analyses how EU ban dates and transition periods for farrowing crates affect farm economics and sow welfare.",
    link: "https://griffincarpenter.org/reports/when-to-ban-farrowing-crates",
    tags: ["Farrowing Crates", "Stranded Assets", "Animal Welfare Policy"]
  },  
  {
    title: "What do Large Language Models Say About Animals? Investigating Risks of Animal Harm in Generated Text",
    venue: "ACM FAccT ’25 Proceedings",
    year: "2025",
    description: "Introduces AnimalHarmBench, an automated benchmark to quantify the risk of animal harm from LLMs.",
    link: "https://dl.acm.org/doi/full/10.1145/3715275.3732094",
    tags: ["AnimalHarmBench", "Animal Ethics", "Automated Benchmark"]
  },
  {
    title: "Navigating AI's Impact on Labor: Challenges, Scenarios, and Policy Pathways",
    venue: "SSRN working paper",
    year: "2025",
    description: "Analyses AI-driven productivity growth and unemployment scenarios and evaluates potential policy responses.",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5032882",
    tags: ["Labour Productivity", "Labour Displacement", "Economic Policy"]
  },
  {
    title: "Towards Safe Multilingual Frontier AI",
    venue: "NeurIPS SoLaR Workshop (Best Sociotechnical Paper)",
    year: "2024",
    description: "Assesses LLM capability and safety gaps in non-English contexts and provides EU policy recommendations.",
    link: "https://arxiv.org/abs/2409.13708",
    tags: ["Multilingual AI", "Multilingual Jailbreaks", "EU Policy",]
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
                  href="https://scholar.google.com/citations?hl=lv&user=fv4hKGwAAAAJ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FileText className="w-4 h-4" />
                  Google Scholar Profile
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
