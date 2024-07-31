import ServiceCard from "@/components/service-card"
import { COMM_INNSU_CRED } from "@/constants"
import { motion } from "framer-motion"

export default function CommInnsuServ() {
    const service =COMM_INNSU_CRED.services
  return (
    <section>
        <div>
            <h1>
            Specialties We Provide Commercial Insurance Credentialing Services
            </h1>

        </div>
        {
            service.map((item) => 
                <ServiceCard title={item.title} description={item.description} />
            )
        }
        
    </section>
  )
}
