import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WorldSection from "@/components/WorldSection";
import OrderSection from "@/components/OrderSection";
import RelicSection from "@/components/RelicSection";
import HousesSection from "@/components/HousesSection";
import ArchivesSection from "@/components/ArchivesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <WorldSection />
      <OrderSection />
      <RelicSection />
      <HousesSection />
      <ArchivesSection />
      <Footer />
    </>
  );
}
