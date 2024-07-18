import DosnDont from "@/Home/DosnDonts";
import DontSettleOrdinary from "@/Home/sections/dont-settle-ordinary";
import GovtInsurance from "@/Home/sections/Govt-insurance";
import GurantedSection from "@/Home/sections/Guranted-section";
import Hero from "@/Home/sections/HeroSection";
import OffersSections from "@/Home/sections/offers-sections";
import ServiceOffer from "@/Home/sections/services-offer";
import StremLiningCred from "@/Home/sections/StremLiningCred";
import WhatSetApart from "@/Home/sections/what-set-apart";
import WhenCredentialing from "@/Home/sections/WhenCredentialing";

export default function Home() {
  return (
   <main className="relative">
    <Hero/>
    <GurantedSection/>
    <WhenCredentialing/>
    <StremLiningCred/>
    <DosnDont/>
    <ServiceOffer/>
    <GovtInsurance/>
    <OffersSections/>
    <DontSettleOrdinary/>
    <WhatSetApart/>
   </main>
  );
}
