import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import Services from "@/components/Services";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Reviews from "@/components/Reviews";

export default function Home() {
  // return (
  //   <main className="min-h-screen bg-white">
  //     <Header />
  //     <Hero />
  //     <Advantages />
  //     <Services />
  //     <Roadmap />
  //     <Team />
  //     <Reviews />
  //     <footer className="py-12 bg-rehab-dark text-center text-gray-500 text-sm">
  //       © {new Date().getFullYear()} ABYROY — Центр реабилитации.
  //     </footer>
  //   </main>
  // );

    return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Advantages />
      <Services />
      <Roadmap />
      <Team />
      <Reviews />
      <footer className="py-12 bg-rehab-dark text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} ABYROY — Центр реабилитации.
      </footer>
    </main>
  );

}