import ServiceCard from "@/components/service-card";
import { WEB_CONTENT } from "@/constants";
import { Button } from "antd";

export default function ServiceOffer() {
    const services = WEB_CONTENT[0].services
  return (
    <section className="bg-white">
        <div className="flex justify-stretch max-w-[1280px] m-auto mt-10 flex-col gap-10 h-full md:h-screen">
            
            <div className="text-center space-y-5 w-full md:w-[750px] font-poppins m-auto p-7">
            <h1 className="heading-text font-poppins">SERVICES WE OFFER</h1>
            <h2 className="info-text font-poppins">Commercial Insurance Credentialing</h2>
            <p className="font-poppins text-gray-400">We simplify the complex process of getting healthcare providers credentialed with commercial insurance companies. Our services encompass completing applications, document gathering, follow-up, and issue resolution. We also offer ongoing support for credential maintenance and compliance with ever-changing requirements.</p>
            </div>
       
       <div className="flex justify-center items-center gap-5 flex-wrap">
        {services.map((item)=>
            <ServiceCard key={item.key} title={item.title} description={item.description}/>
    )}
        
       </div>  
       <Button className="w-[150px] rounded-none bg-primary text-white ml-3 md:ml-[110px] py-4">
            Learn More
        </Button>
        </div>
        
        
    </section>
  )
}
