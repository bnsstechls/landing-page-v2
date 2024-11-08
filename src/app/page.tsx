import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Team from "@/components/Team";
import BusinessModel from "@/components/BusinessModel";
import Hero from "@/components/Hero";
import Advantage from "@/components/Advantage";
import Mission from "@/components/Mission";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Mission />
      <Advantage />
      <BusinessModel />
      <Team />
      <CTA />
      <Footer />
    </>
  );
}
