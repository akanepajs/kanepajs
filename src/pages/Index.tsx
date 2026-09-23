import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Artūrs (Art) Kaņepājs</title>
        <meta 
          name="description" 
          content="Economist and quantitative analyst with a research focus on animal welfare and AI governance. Based in Riga, Latvia." 
        />
        <meta name="keywords" content="Animal Welfare, AI Governance, Economic Policy, Quantitative Risk, Effective Giving" />
        <meta property="og:title" content="Artūrs (Art) Kaņepājs" />
        <meta property="og:description" content="Economist and quantitative analyst with a research focus on animal welfare and AI governance." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <main className="min-h-screen">
        <Hero />
        <About />
        <Research />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
