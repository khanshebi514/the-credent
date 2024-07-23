import ServiceCard from "@/components/service-card";
import { WEB_CONTENT } from "@/constants";
import { Button } from "antd";

export default function ServiceOffer() {
    const services = WEB_CONTENT[0].services
  return (
    <section className="bg-white">
        <div className="flex justify-stretch max-w-[1280px] m-auto mt-10 flex-col gap-10">
            
            <div className="text-center space-y-5 w-full md:w-[750px] font-poppins m-auto p-7">
            <h1 className="text-3xl font-poppins font-extrabold text-[#333]">SERVICES WE OFFER</h1>
            <h2 className="text-3xl font-poppins font-bold text-[#333]">Commercial Insurance Credentialing</h2>
            <p className="font-poppins text-[#7777]">We simplify the complex process of getting healthcare providers credentialed with commercial insurance companies. Our services encompass completing applications, document gathering, follow-up, and issue resolution. We also offer ongoing support for credential maintenance and compliance with ever-changing requirements.</p>
            </div>
       
       <div className="flex justify-center items-center gap-6 flex-wrap">
        {services.map((item)=>
            <ServiceCard key={item.key} title={item.title} description={item.description}/>
    )}
        
       </div>  
       <button className="w-[150px] p-4 rounded-none bg-primary text-white ml-[120px] md:ml-[110px] hover:bg-[#0099e6]">
            Learn More
        </button>
        </div>
        
        
    </section>
  )
}
