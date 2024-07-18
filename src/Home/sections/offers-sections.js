import ValueOffer from "@/components/value-offer";
import { OFFERS } from "@/constants";

export default function OffersSections() {
const data = OFFERS
  return (
    <main className="mt-5">
        <section className="bg-gray-200 p-5">
           <ValueOffer  title={data[0].title} description={data[0].description} button={data[0].button} image={data[0].image} />
       </section>
        <section className="bg-white p-5">
           <ValueOffer  title={data[1].title} description={data[1].description} button={data[1].button} image={data[1].image} order={2} />
       </section>
        <section className="bg-gray-200 p-5">
           <ValueOffer  title={data[2].title} description={data[2].description} button={data[2].button} image={data[2].image} />
       </section>
    </main>
    
  )
}
