import Image from "next/image";
export default function GurantedSection() {
  return (
   <section className="bg-white max-w-[1280px] m-auto flex justify-center items-center flex-col md:bg-[url('/images/home-concept.png')] bg-none"
   
   style={{
    backgroundPosition:'center',
    backgroundSize:'contain',
    backgroundRepeat:'no-repeat',
    backgroundPositionY:'320px'
     
 }}
   >
    <div className="mt-20 flex justify-center items-center">
    <div className="w-[926px]">
    <h1 className="font-bold text-black text-[32px] mb-5 text-center">
    Credentialing Excellence Guaranteed
    </h1>
    <p className="font-poppins text-[#777] text-[19px] text-center font-[300] tracking-tighter"> Credentialing ensures that healthcare providers are properly recognized and authorized by insurance companies, guaranteeing a smooth and accurate reimbursement system. At TheCredentialing, were your dedicated partners in the provider credentialing process helping you keep pace with the fastly progressing healthcare industry and stay ahead of the competition. </p>
    </div>
    </div>

<div className="py-14 px-5 ">
<div className="flex flex-col lg:flex-row justify-around items-center gap-[50px] mt-10 md:bg-[url(/images/home-concept-icons.png)] bg-none" 
    style={{
        backgroundSize:'contain',
        backgroundRepeat:'no-repeat',

    }}
    >
        <div className="flex justify-center items-center flex-col gap-5">
        <div className="assessment w-[150px] rounded-full border-[1px] p-[4px] border-gray-300 flex justify-center items-center hover:animate-pulse">
            <Image src={'/images/Ellipse-4.png'} alt="speciality image" width={150} height={150}/>
        </div>
        <p className="font-shadow text-primary text-2xl font-[400]">ASSESSMENT</p>
        </div>
       
       <div className="flex justify-center items-center flex-col gap-5 mb-[0px] md:mb-[50px]">
       <div className="assessment w-[150px] rounded-full border-[1px] p-[4px] border-gray-300 flex justify-center items-center ">
            <Image src={'/images/Ellipse-5.png'} alt="speciality image" width={150} height={150}/>
        </div>
        <p className="font-shadow text-primary text-2xl font-[400]">COORDINATION</p>
       </div>

       <div className="flex justify-center items-center flex-col gap-5">
       <div className="assessment w-[145px] rounded-full border-[1px] p-[4px] border-gray-300 flex justify-center items-center">
            <Image src={'/images/Ellipse-6.png'} alt="speciality image" width={150} height={150}/>
        </div>
        <p className="font-shadow text-primary text-2xl  font-[400]">VALIDATION</p>
       </div>
        

        <div className="flex justify-center items-center flex-col gap-5">
        <div className="assessment w-[338px] rounded-full border-[1px] p-[4px] bg-white border-gray-300 flex justify-center items-center">
            <Image src={'/images/Ellipse-7.png'} alt="speciality image" width={350} height={350} className="fade-rotation"/>
        </div> 
        <p className="font-shadow text-primary text-[30px] font-[400]">OUR CLIENTS</p>
        </div> 
       
        
        
    </div>
</div>
    
   </section>
  )
}
