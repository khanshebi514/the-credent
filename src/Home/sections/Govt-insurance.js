import ServiceCard from "@/components/service-card";
import { WEB_CONTENT } from "@/constants";

export default function GovtInsurance() {
    const services = WEB_CONTENT[1].services
  return (
    <section className="bg-white">
    <div className="flex justify-stretch max-w-[1280px] mt-10 flex-col gap-10">
        
        <div className="text-center space-y-5 w-full md:w-[750px] font-poppins m-auto p-7">
        <h1 className="font-bold text-[28px] md:text-[35px] font-poppins">Government Insurance Credentialing</h1>
        <p className="font-poppins text-gray-400">Get government credentialed quickly and easily with our comprehensive services. Well take the stress out of the process, from application to approval and beyond. Let us handle the paperwork and red tape, so you can focus on what you do best providing quality care to your patients.</p>
        </div>
   
   <div className="flex justify-center items-center gap-6 flex-wrap">
    {services.map((item)=>
        <ServiceCard key={item.key} title={item.title} description={item.description}/>
)}
    
   </div>  
    </div>
    
    
</section>
  )
}
