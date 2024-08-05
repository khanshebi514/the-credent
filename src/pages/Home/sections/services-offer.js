import ServiceCard from "@/components/service-card";
import { WEB_CONTENT } from "@/constants";

export default function ServiceOffer() {
    const services = WEB_CONTENT[0].services
  return (
    <section className="bg-white mb-[100px] ">
        <div className="flex justify-stretch max-w-[1280px] m-auto mt-10 flex-col relative">
            
            <div className="text-center space-y-6 w-full lg:w-[950px] font-poppins m-auto p-7">
            <h1 className="text-[24px] md:text-[36px] xl:text-[42px] font-poppins font-bold text-[#222] tracking-tighter">SERVICES WE OFFER</h1>
            <h2 className="text-[24px] md:text-[35px] font-poppins font-bold text-[#222] tracking-tighter">Commercial Insurance Credentialing</h2>
            <p className="font-poppins text-[#777] text-[18.8px] leading-9 opacity-90">We simplify the complex process of getting healthcare providers credentialed with commercial insurance companies. Our services encompass completing applications, document gathering, follow-up, and issue resolution. We also offer ongoing support for credential maintenance and compliance with ever-changing requirements.</p>
            </div>
       
       <div className="flex justify-center items-center gap-8 flex-wrap">
        {services.map((item)=>
            <ServiceCard key={item.key} title={item.title} description={item.description}/>
    )}
        
       </div>  
        <button className="w-[170px] p-4 rounded-none bg-primary text-white hover:bg-[#0099e6] absolute -bottom-[70px] left-8">
            Learn More
        </button>
  
        </div>
        
        
    </section>
  )
}
