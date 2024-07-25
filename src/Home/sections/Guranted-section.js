import Image from "next/image";
export default function GurantedSection() {
  return (
   <section className="bg-white max-w-[1280px] m-auto flex justify-center items-center flex-col md:bg-[url('/images/home-concept.png')] bg-none"
   
   style={{
    backgroundPosition:'center',
    backgroundSize:'contain',
    backgroundRepeat:'no-repeat',
    backgroundPositionY:'300px'
     
 }}
   >
    <div className="text-center mt-[20px] w-[80%] p-[20px]">
    <h1 className="font-bold text-black text-3xl my-8">
    Credentialing Excellence Guaranteed
    </h1>
    <p className="font-poppins text-[#777] text-lg"> Credentialing ensures that healthcare providers are properly recognized and authorized by insurance companies, guaranteeing a smooth and accurate reimbursement system. At TheCredentialing, were your dedicated partners in the provider credentialing process helping you keep pace with the fastly progressing healthcare industry and stay ahead of the competition. </p>
    </div>

    <div className="flex flex-col lg:flex-row justify-around items-center gap-[50px] mb-10  px-5 py-16 md:bg-[url(/images/home-concept-icons.png)] bg-none" 
    style={{
        backgroundSize:'contain',
        backgroundRepeat:'no-repeat',

    }}
    >
        <div className="flex justify-center items-center flex-col gap-5">
        <div className="assessment w-[150px] rounded-full border-[1px] p-[4px] border-gray-300 flex justify-center items-center hover:animate-pulse">
            <Image src={'/images/Ellipse-4.png'} alt="speciality image" width={150} height={150}/>
        </div>
        <p className="font-shadow text-primary text-2xl">ASSESSMENT</p>
        </div>
       
       <div className="flex justify-center items-center flex-col gap-5 mb-[0px] md:mb-[50px]">
       <div className="assessment w-[150px] rounded-full border-[1px] p-[4px] border-gray-300 flex justify-center items-center ">
            <Image src={'/images/Ellipse-6.png'} alt="speciality image" width={150} height={150}/>
        </div>
        <p className="font-shadow text-primary text-2xl">COORDINATION</p>
       </div>

       <div className="flex justify-center items-center flex-col gap-5">
       <div className="assessment w-[145px] rounded-full border-[1px] p-[4px] border-gray-300 flex justify-center items-center">
            <Image src={'/images/Ellipse-5.png'} alt="speciality image" width={150} height={150}/>
        </div>
        <p className="font-shadow text-primary text-2xl">VALIDATION</p>
       </div>
        

        <div className="flex justify-center items-center flex-col gap-5">
        <div className="assessment w-[338px] rounded-full border-[1px] p-[4px] bg-white border-gray-300 flex justify-center items-center">
            <Image src={'/images/Ellipse-7.png'} alt="speciality image" width={350} height={350} className="fade-rotation"/>
        </div> 
        <p className="font-shadow text-primary text-2xl">OUR CLIENTS</p>
        </div>
        
    </div>
   </section>
  )
}
