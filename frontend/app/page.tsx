import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Clients } from "@/components/clients";
import { Services } from "@/components/services";
import { Profile } from "@/components/profile";
import { Team } from "@/components/team";
import { News } from "@/components/news";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Clients />
      <Services />
      <Profile />
      <Team />
      <News />
      <Contact />
      <Footer />
    </main>
  );
}
