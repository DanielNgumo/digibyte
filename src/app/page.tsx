import AboutUs from "@/components/AboutUs";
import About from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

import Image from "next/image";

export default function Home() {
  return (
      <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Portfolio />
        <Contact />
        {/* <Testimonials /> */}
      </main>
      <Footer />
    </div>
  );
};
