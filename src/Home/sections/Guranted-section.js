import Image from "next/image";
export default function GurantedSection() {
  return (
   <section className="bg-white max-w-[1280px] m-auto flex justify-center items-center flex-col">
    <div className="text-center mt-[110px] p-5 w-full md:w-[1000px]">
    <h1 className="font-bold text-xl md:text-3xl my-10">
    Credentialing Excellence Guaranteed
    </h1>
    <p className="font-poppins text-gray-400"> Credentialing ensures that healthcare providers are properly recognized and authorized by insurance companies, guaranteeing a smooth and accurate reimbursement system. At TheCredentialing, were your dedicated partners in the provider credentialing process helping you keep pace with the fastly progressing healthcare industry and stay ahead of the competition. </p>
    </div>

    <div className="flex flex-col md:flex-row justify-around items-center gap-[50px]">
        <div className="flex justify-center items-center flex-col gap-5">
        <div className="assessment w-[150px] rounded-full border-2 border-yellow-200 flex justify-center items-center">
            <Image src={'/images/Ellipse-4.png'} alt="speciality image" width={150} height={150}/>
        </div>
        <p className="font-shadow text-primary text-lg md:text-2xl">ASSESSMENT</p>
        </div>
       
       <div className="flex justify-center items-center flex-col gap-5 mb-[0px] md:mb-[50px]">
       <div className="assessment w-[150px] rounded-full border-2 border-yellow-200 flex justify-center items-center ">
            <Image src={'/images/Ellipse-6.png'} alt="speciality image" width={150} height={150}/>
        </div>
        <p className="font-shadow text-primary text-lg md:text-2xl">COORDINATION</p>
       </div>

       <div className="flex justify-center items-center flex-col gap-5">
       <div className="assessment w-[150px] rounded-full border-2 border-yellow-200 flex justify-center items-center">
            <Image src={'/images/Ellipse-5.png'} alt="speciality image" width={150} height={150}/>
        </div>
        <p className="font-shadow text-primary text-lg md:text-2xl">VALIDATION</p>
       </div>
        

        <div className="flex justify-center items-center flex-col gap-5">
        <div className="assessment w-[310px] rounded-full border-2 border-yellow-400 flex justify-center items-center">
            <Image src={'/images/Ellipse-7.png'} alt="speciality image" width={350} height={350} className="animate-bounce"/>
        </div> 
        <p className="font-shadow text-primary text-lg md:text-2xl">OUR CLIENTS</p>
        </div>
        
    </div>
   </section>
  )
}
