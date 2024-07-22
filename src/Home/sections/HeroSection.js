import ContactForm from "@/components/contact-form";
import { Button } from "antd";
import Image from "next/image";
export default function Hero() {
  return (
    <>
      <section
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/credit-2.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          objectFit:'cover'
        }}
        className="p-2"
      >
        <div className="md:mt-[100px] grid grid-cols-1 lg:grid-cols-2 align-middle gap-5 h-full max-w-[1200px] m-auto">
        <div className="columns-1 text-section text-center my-5 place-self-center font-poppins mt-[150px] md:mt-0 w-full">
          <span className="flex justify-center items-center gap-2">
            <Image src='/images/slide-title-border.png' alt="heading border" width={40} height={10}/>
            <h2 
            className="font-bold text-lg md:text-xl text-[#ecedef] font-poppins">
              WANT TO GET YOUR PRACTICE CREDENTIALED?
            </h2>
            <Image src='/images/slide-title-border.png' alt="heading border" width={40} height={10}/>
            </span>
          <h1 className="text-5xl font-poppins font-extrabold text-[#ecedef] my-1 px-10 md:px-0">
            Take a closer look at our extensive set of services
          </h1>
          <p className="font-poppins text-gray-400 mt-1 p-2">Empowering Your Practice</p>
        </div>
        <div className="form-section flex justify-center items-center place-self-center mb-10 columns-lg">
          <ContactForm/>
        </div>
        </div>
       
      </section>
      <div className="bg-primary w-full ">
        <div className="max-w-[1280px] m-auto p-6 md:py-10 flex justify-around flex-col md:flex-row items-start md:items-center gap-5">
        <h2 className="font-poppins text-[22px] md:text-2xl text-white text-wrap">
          Register With Top Insurance Companies with Help of {" "}
          <span className="font-shadow text-[31px]">The  Credentialing</span>{" "}
        </h2>
        <Button className="bg-[#222] text-white border-none hero mt-5 md:mt-0" size="large">
          Get Started Now
        </Button>
        </div>
      </div>
    </>
  );
}
