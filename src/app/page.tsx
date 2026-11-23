import Investment from "@/components/Investment";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import WhyAQE from "@/components/WhyAQE";
import Project from "@/components/Project";
import Leadership from "@/components/leadership/Leadership";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Vision />
        <WhyAQE />
        <Project />
        <Experience />
        <Investment />
        <Leadership />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}