import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import Services from "@/components/Services";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
    return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Advantages />
      <Roadmap />
      <Team />
      <Reviews />
      <Footer />
    </main>
  );

}