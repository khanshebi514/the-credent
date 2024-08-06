import PartnerSlider from "@/components/partner-slider";
import CredMethod from "@/pages/Home/sections/Credmethod";
import DontSettleOrdinary from "@/pages/Home/sections/dont-settle-ordinary";
import DosnDont from "@/pages/Home/sections/DosnDonts";
import GovtInsurance from "@/pages/Home/sections/Govt-insurance";
import GurantedSection from "@/pages/Home/sections/Guranted-section";
import Hero from "@/pages/Home/sections/HeroSection";
import OffersSections from "@/pages/Home/sections/offers-sections";
import ServiceOffer from "@/pages/Home/sections/services-offer";
import StreamLining from "@/pages/Home/sections/StremLiningCred";
import WhatSetApart from "@/pages/Home/sections/what-set-apart";
import WhenCredentialing from "@/pages/Home/sections/WhenCredentialing";

export default function Home() {
  return (
   <main className="">
    <Hero/>
    <GurantedSection/>
    <WhenCredentialing/>
    <StreamLining/>
    <CredMethod/>
    <DosnDont/>
    <ServiceOffer/>
    <PartnerSlider/>
    <GovtInsurance/>
    <OffersSections/>
    <DontSettleOrdinary/>
    <WhatSetApart/>
    <PartnerSlider/>
   </main>
  );
}
