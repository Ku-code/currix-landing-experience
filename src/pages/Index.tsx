import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import SecretSauce from "@/components/SecretSauce";
import Vision from "@/components/Vision";
import USP from "@/components/USP";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden overflow-y-auto">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <SecretSauce />
      <Vision />
      <USP />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
