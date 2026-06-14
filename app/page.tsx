import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Metrics />
      <About />
      <Services />
      <Projects />
    </>
  );
}