import Hero from "@/components/Hero";
import TripsSection from "@/components/TripsSection";
import Programs from "@/components/Programs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TripsSection />
      <Programs />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
