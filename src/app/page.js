import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionAbout from "@/components/SectionAbout";
import SectionCommunity from "@/components/SectionCommunity";
import SectionSponsors from "@/components/SectionSponsors";
import SectionVisit from "@/components/SectionVisit";
import Popup from "@/components/Popup";

export default function Home() {
  return (
    <main className="text-gray-900">
      <Hero />
      <section className="bg-white relative top-[100vh]" id={"content"}>
        <Popup />
        <SectionAbout />
        <SectionVisit />
        <SectionCommunity />
        <SectionSponsors />
        <Footer />
      </section>
    </main>
  );
}
