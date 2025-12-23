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
        <title>Arturs Kanepajs 🔶</title>
        <meta 
          name="description" 
          content="Technical AI Governance researcher focused on multilingual AI safety, compute governance, and the economics of transformative AI. Based in Riga, Latvia." 
        />
        <meta name="keywords" content="AI Governance, EU Policy, Animal Welfare, Labor Economics, Effective Giving" />
        <meta property="og:title" content="Arturs Kanepajs 🔶" />
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
