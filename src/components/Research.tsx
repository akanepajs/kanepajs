import { ExternalLink, FileText, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const publications = [
  {
    title: "Pay to Stay or Pay to Go? Comparing the Public Cost of Welfare Standards Versus a Ban on EU Fur Farming",
    venue: "Griffin Carpenter / Eurogroup for Animals, Respect for Animals, World Animal Protection, and Four Paws",
    year: "2026",
    description: "Compares the public cost of stricter welfare standards for EU fur farming with the cost of a production ban, finding a ban modest by comparison and one-off.",
    link: "https://griffincarpenter.org/reports/pay-to-stay-or-pay-to-go",
    tags: ["Fur Farming", "Compensation Costs", "EU Policy"]
  },
  {
    title: "Reforming Pig Welfare in the European Union: The Case for a Cage-Free Future",
    venue: "The European Institute for Animal Law & Policy",
    year: "2026",
    description: "Assesses the legal framework, economic costs, and animal welfare benefits of an EU-wide ban on farrowing crates.",
    link: "https://animallaweurope.org/wp-content/uploads/EIALP_White-Paper_Reforming-Pig-Welfare-in-the-European-Union.pdf",
    tags: ["Farrowing Crates", "Animal Welfare Economics", "EU Policy"]
  },
  {
    title: "Your AI Travel Agent Would Book You a Bullfight: An Agentic Benchmark for Implicit Animal Welfare in Frontier AI Models",
    venue: "compassionbench.com/tac",
    venueLink: "https://compassionbench.com/tac",
    year: "2026",
    description: "Measures how often AI travel agents book activities that exploit animals.",
    link: "https://arxiv.org/abs/2606.18142",
    tags: ["TravelAgentCompassion", "Animal Ethics", "Agentic Benchmark"]
  },
  {
    title: "Prioritization of Risks from Artificial Intelligence",
    venue: "MIT FutureTech",
    year: "2026",
    description: "A three-round Delphi study in which 272 international experts rank AI risks by likelihood and impact, with dangerous capabilities, competitive pressures, and weaponisation rated the leading near-term threats.",
    link: "https://futuretech.mit.edu/publication/prioritization-of-risks-from-artificial-intelligence-a-delphi-study-of-272-international-experts",
    tags: ["AI Risk", "Delphi Study", "AI Governance"]
  },
  {
    title: "When to Ban Farrowing Crates? Analysing EU Policy Options for Ban Dates and Transition Periods",
    venue: "Griffin Carpenter / Eurogroup for Animals",
    year: "2026",
    description: "Analyses how EU ban dates and transition periods for farrowing crates affect farm economics and sow welfare.",
    link: "https://www.eurogroupforanimals.org/library/when-ban-farrowing-crates-analysing-eu-policy-options-ban-dates-and-transition-periods",
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
    <section id="research" className="py-20 gradient-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Selected Research
            </h2>
            <div className="w-20 h-1 gradient-hero mx-auto rounded-full mt-2" />
          </div>

          {/* Publications grid */}
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <article
                key={pub.title}
                className="gradient-card p-8 rounded-2xl shadow-soft border border-border/50 border-l-[3px] border-l-primary/40 hover:border-l-primary hover:shadow-medium transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-xs font-body font-medium bg-primary/10 text-primary rounded-full">
                        {pub.year}
                      </span>
                      {pub.venueLink ? (
                        <a
                          href={pub.venueLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                          {pub.venue}
                        </a>
                      ) : (
                        <span className="text-sm font-body text-muted-foreground">
                          {pub.venue}
                        </span>
                      )}
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
                  href="https://scholar.google.com/citations?user=fv4hKGwAAAAJ" 
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
