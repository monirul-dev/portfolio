import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Testimonial from "@/components/Testimonial";
import Focus from "@/components/Focus";
import Principles from "@/components/Principles";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Metrics />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Skills />
      <Testimonial />
      <Focus />
      <Principles />
    </>
  );
}