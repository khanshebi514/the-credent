import ServiceCard from "@/components/service-card";
import { WEB_CONTENT } from "@/constants";

export default function GovtInsurance() {
    const services = WEB_CONTENT[1].services
  return (
    <section className="bg-white mb-[100px]">
    <div className="flex justify-stretch max-w-[1280px] m-auto mt-10 flex-col gap-10 mb-10 relative">
        
        <div className="text-center space-y-6 w-full lg:w-[950px] font-poppins m-auto">
        <h1 className="font-bold text-[28px] md:text-[35px] font-poppins">Government Insurance Credentialing</h1>
        <p className="font-poppins text-[#777] text-[18.8px] leading-8 opacity-90">Get government credentialed quickly and easily with our comprehensive services. Well take the stress out of the process, from application to approval and beyond. Let us handle the paperwork and red tape, so you can focus on what you do best providing quality care to your patients.</p>
        </div>
   
   <div className="flex justify-center items-center gap-6 flex-wrap">
    {services.map((item)=>
        <ServiceCard key={item.key} title={item.title} description={item.description}/>
)}
    
   </div> 

   <button className="w-[170px] p-4 rounded-none bg-primary text-white hover:bg-[#0099e6] absolute -bottom-[70px] left-10">
            Learn More
        </button>
    </div>
    
</section>
  )
}
