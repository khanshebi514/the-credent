import Image from "next/image";
import ListItem from "./sections/listItem";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

export default function DosnDont() {
  return (
    <section className="flex flex-col md:flex-row justify-evenly items-center max-w-[1280px] m-auto py-[30px] md:py-[100px] bg-slate-200">
        <div className="bg-white p-10 text-center md:text-start">
            <h1 className="font-bold text-3xl md:text-5xl">DOs & DONT</h1>
            <div className="flex justify-center items-start flex-wrap mt-5">
                <div className="w-[300px] bg-white shadow-md py-3 h-[400px]">
                    <span className="bg-primary w-full h-14 flex justify-center items-center">
                      <h1 className="info-text text-white">DOs</h1>
                    </span>

                    <div className="space-y-5 p-5"> 
                    <ListItem iconURL={<TiTick className="text-green-600 mt-[2px]"/>} text={'Master digital credentialing'} />
                    <ListItem iconURL={<TiTick className="text-green-600 mt-[2px]"/>} text={'Implement blockchain for secure'} />
                    <ListItem iconURL={<TiTick className="text-green-600 mt-[2px]"/>} text={'Leverage AI for document parsing'} />
                    <ListItem iconURL={<TiTick className="text-green-600 mt-[2px]"/>} text={'Prioritize cybersecurity vigilance'}/>
            
                    </div>
                    
                </div>

                <div className="w-[300px]  bg-white shadow-md py-3 h-[400px]">
                    <span className="bg-[#9B5E51] w-full h-14 flex justify-center items-center">
                      <h1 className="info-text text-white ">DONT</h1>
                    </span>
                    <div className="space-y-5 p-5">
                    <ListItem iconURL={<RxCross2 size={20} className="text-red-600 mt-1"/>} text={'Resist digital transformation'} />
                    <ListItem iconURL={<RxCross2 size={20} className="text-red-600 mt-1"/>} text={'Underestimate data security'} />
                    <ListItem iconURL={<RxCross2 size={20} className="text-red-600 mt-1"/>} text={'Rely solely on manual verification'} />
                    <ListItem iconURL={<RxCross2 size={20} className="text-red-600 mt-1"/>} text={'Overlook compliance with healthcare IT standards'} />
                    </div>
                    
                </div>
            </div>
        </div>
        <div>
          <Image src={'/images/Group-17.png'} width={300} height={400}/>
        </div>
    </section>
  )
}
