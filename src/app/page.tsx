import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ValueProps } from "@/components/sections/ValueProps";
import { Services } from "@/components/sections/Services";
import { ResortPartners } from "@/components/sections/ResortPartners";
import { Excursions } from "@/components/sections/Excursions";
import { CityTours } from "@/components/sections/CityTours";
import { Fleet } from "@/components/sections/Fleet";
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
        <ValueProps />
        <Services />
        <ResortPartners />
        <Excursions />
        <CityTours />
        <Fleet />
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
