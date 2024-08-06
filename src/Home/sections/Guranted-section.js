import Image from "next/image";
export default function GurantedSection() {
  return (
   <section className="bg-white max-w-[1280px] m-auto flex justify-center items-center flex-col lg:bg-[url('/images/home-concept.png')] bg-none"
   
   style={{
    backgroundPosition:'center',
    backgroundSize:'contain',
    backgroundRepeat:'no-repeat',
    backgroundPositionY:'375px'
     
 }}
   >
    <div className="mt-5 lg:mt-20 flex justify-center items-center">
    <div className="w-[90%] p-5 lg:w-[1000px]">
    <h1 className="font-bold text-black text-[28px] md:text-[36px] mb-5 text-center">
    Credentialing Excellence Guaranteed
    </h1>
    <p className="font-poppins text-[#777] text-xl text-center font-[300] tracking-tighter leading-6 md:leading-8"> Credentialing ensures that healthcare providers are properly recognized and authorized by insurance companies, guaranteeing a smooth and accurate reimbursement system. At TheCredentialing, were your dedicated partners in the provider credentialing process helping you keep pace with the fastly progressing healthcare industry and stay ahead of the competition. </p>
    </div>
    </div>

<div className="py-14 px-5 ">
<div className="flex flex-col lg:flex-row justify-around items-center gap-[20px] lg:gap-[50px] mt-5 lg:mt-10 md:bg-[url(/images/home-concept-icons.png)] bg-none" 
    style={{
        backgroundSize:'contain',
        backgroundRepeat:'no-repeat',

    }}
    >
        <div className="flex justify-center items-center flex-col gap-5">
        <div className="assessment w-[170px] h-[170px] rounded-full border-[1px] p-[4px] border-gray-300 flex justify-center items-center hover:animate-pulse">
            <Image src={'/images/Ellipse-4.png'} alt="speciality image" width={170} height={170}/>
        </div>
        <p className="font-shadow text-primary text-[25.2px] font-[400] tracking-wide">ASSESSMENT</p>
        </div>
       
       <div className="flex justify-center items-center flex-col gap-5 mb-[0px] md:mb-[50px]">
       <div className="assessment w-[170px] h-[170px] rounded-full border-[1px] p-[4px] border-gray-300 flex justify-center items-center ">
            <Image src={'/images/Ellipse-5.png'} alt="speciality image" width={170} height={170}/>
        </div>
        <p className="font-shadow text-primary text-[25.2px] font-[400] tracking-wide">COORDINATION</p>
       </div>

       <div className="flex justify-center items-center flex-col gap-5">
       <div className="assessment w-[170px] h-[170px] rounded-full border-[1px] p-[4px] border-gray-300 flex justify-center items-center">
            <Image src={'/images/Ellipse-6.png'} alt="speciality image" width={170} height={170}/>
        </div>
        <p className="font-shadow text-primary text-[25.2px]  font-[400] tracking-wider">VALIDATION</p>
       </div>
        

        <div className="flex justify-center items-center flex-col gap-5 ml-0 lg:ml-10">
        <div className="assessment w-[330px] rounded-full border-[1px] p-[4px] bg-white border-gray-300 flex justify-center items-center">
            <Image src={'/images/Ellipse-7.png'} alt="speciality image" width={350} height={350} className="fade-rotation"/>
        </div> 
        <p className="font-shadow text-primary text-[30.2px] font-[400] tracking-wide">OUR CLIENTS</p>
        </div>   
    </div>
</div>
    
   </section>
  )
}
