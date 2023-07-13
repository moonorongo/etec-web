import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionAbout from "@/components/SectionAbout";
import SectionCommunity from "@/components/SectionCommunity";
import SectionVisit from "@/components/SectionVisit";
import SliderHero from "@/components/SliderHero";

export default function Home() {
  return (
    <main className="text-gray-900">
      <Hero />
      <SectionAbout />
      <SectionVisit />
      <SectionCommunity />
      <SliderHero />
      <Footer />
    </main>
  );
}
