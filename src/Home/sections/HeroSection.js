import ContactForm from "@/components/contact-form";
import { Button } from "antd";
import Image from "next/image";
export default function Hero() {
  return (
    <>
      <section
        style={{
          backgroundImage:
            "url('/images/credit-2.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          objectFit: "cover",
        }}
        className="p-2 pb-12 relative"
      >
        <div className="absolute bg-[#2125298f] top-0 left-0 w-full h-full">

        </div>
        <div className="mt-[50px] md:mt-[200px] grid grid-cols-1 lg:grid-cols-2 align-middle gap-5 h-full max-w-[1200px] m-auto">
          <div className="columns-1 text-section text-center my-5 place-self-center font-poppins mt-[100px] md:mt-0 w-full fade-left">
            <span className="flex justify-center items-center gap-2">
              <Image
                src="/images/slide-title-border.png"
                alt="heading border"
                width={40}
                height={10}
              />
              <h2 className="font-bold text-lg md:text-xl text-[#ecedef] font-poppins">
                WANT TO GET YOUR PRACTICE CREDENTIALED?
              </h2>
              <Image
                src="/images/slide-title-border.png"
                alt="heading border"
                width={40}
                height={10}
              />
            </span>
            <h1 className="text-5xl font-poppins font-extrabold text-[#ecedef] my-1 px-0 sm:px-10 md:px-16 lg:px-0">
              Take a closer look at our extensive set of services
            </h1>
            <p className="font-poppins text-gray-400 mt-1 p-2">
              Empowering Your Practice
            </p>
          </div>
          <div className="form-section flex justify-center items-center place-self-center mb-10 columns-lg fade-right">
            <ContactForm />
          </div>
        </div>
      </section>
      <div className="bg-primary w-full">
        <div className="max-w-[1200px] m-auto py-[38px] px-10 lg:px-0 flex justify-around flex-col md:flex-row items-start md:items-center gap-2">
          <h2 className="font-poppins text-[22px] md:text-2xl text-white text-wrap">
            Register With Top Insurance Companies with Help of{" "}
            <span className="font-shadow text-[31px]">The Credentialing</span>{" "}
          </h2>
          <button className="bg-[#212529] text-white border-none hero mt-5 px-[24px] py-[16px] md:mt-0 rounded-md hover:bg-[#32383e] text-nowrap">
            Get Started Now
          </button>
        </div>
      </div>
    </>
  );
}
