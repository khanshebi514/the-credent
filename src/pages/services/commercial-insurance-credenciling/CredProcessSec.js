import CredCommProcessCard from "@/components/CredCommProcessCard";
import { COMM_INNSU_CRED } from "@/constants";

export default function CredProcessSec() {
    const process =COMM_INNSU_CRED.process;
    const data = {
       'section_1':{
         'image':'/images/insurance-1.png',
         'title':'The Credentialing Process',
         'points':process["process-1"]
       },

       'section_2':{
         'image':'/images/insurance-2.png',
         'title':'How We Simplify The Commercial Insurance Credentialing Process?',
         'points':process["process-2"]
       },

       'section_3':{
         'image':'/images/insurance-3.png',
         'title':'The Importance of Commercial Insurance Credentialing',
         'points':process["process-3"]
       }
    }
  return (
   <main className="bg-[#f4f4f4] "> 
     <section className="">
        <CredCommProcessCard data={data.section_1} order={false}/>
        <div className="max-w-[1200px] m-auto h-[1px] bg-[#7777] my-[100px]"></div>
     </section>

     <section className="">
        <CredCommProcessCard data={data.section_2} order={true}/>
        <div className="max-w-[1200px] m-auto h-[1px] bg-[#7777] my-[50px]"></div>
     </section>

     <section className="">
        <CredCommProcessCard data={data.section_3} order={false}/>
     </section>
   </main>
  )
}
