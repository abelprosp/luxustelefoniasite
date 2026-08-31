import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Business } from "@/components/sections/Business";
import { Experience } from "@/components/sections/Experience";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { Internet } from "@/components/sections/Internet";
import { Plans } from "@/components/sections/Plans";
import { Support } from "@/components/sections/Support";
import { Trust } from "@/components/sections/Trust";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Experience />
        <Plans />
        <Internet />
        <Business />
        <Support />
        <Trust />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileCTA />
    </>
  );
}
