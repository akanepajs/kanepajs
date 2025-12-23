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
        <title>Artūrs Kaņepājs</title>
        <meta 
          name="description" 
          content="Technical AI Governance researcher focused on multilingual AI safety, compute governance, and the economics of transformative AI. Based in Riga, Latvia." 
        />
        <meta name="keywords" content="AI Safety, AI Governance, Multilingual AI, Risk Assessment, Effective Altruism, Latvia" />
        <meta property="og:title" content="Artūrs Kaņepājs | AI Safety & Governance Researcher" />
        <meta property="og:description" content="Technical AI Governance researcher focused on multilingual AI safety, compute governance, and the economics of transformative AI." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://arturs-kanepajs.com" />
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
