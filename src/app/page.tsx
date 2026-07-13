import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { Excursions } from "@/components/sections/Excursions";
import { Fleet } from "@/components/sections/Fleet";
import { Destinations } from "@/components/sections/Destinations";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Excursions />
        <Fleet />
        <Destinations />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <MobileCTA />
      <div className="h-20 md:hidden" aria-hidden="true" />
    </>
  );
}
