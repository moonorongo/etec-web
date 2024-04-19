import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionAbout from "@/components/SectionAbout";
import SectionCommunity from "@/components/SectionCommunity";
import SectionSponsors from "@/components/SectionSponsors";
import SectionVisit from "@/components/SectionVisit";

export default function Home() {
  return (
    <main className="text-gray-900">
      <Hero />
      <section className="bg-white relative top-[100vh]" id={"content"}>
        <SectionAbout />
        <SectionVisit />
        <SectionCommunity />
        <SectionSponsors />
        <Footer />
      </section>
    </main>
  );
}
