import ContactForm from "@/components/contact-form";
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
        <div className="mt-[50px] md:mt-[180px] grid grid-cols-1 lg:grid-cols-2 align-middle  h-full max-w-[1200px] m-auto">
          <div className="columns-1 text-section text-center my-5 place-self-center font-poppins mt-[100px] md:mt-0 w-full fade-left">
            <span className="flex justify-center items-center gap-4">
              <Image
                src="/images/slide-title-border.png"
                alt="heading border"
                width={40}
                height={10}
              />
              <h2 className="text-[21px] text-white font-poppins font-[500]">
                WANT TO GET YOUR PRACTICE CREDENTIALED?
              </h2>
              <Image
                src="/images/slide-title-border.png"
                alt="heading border"
                width={40}
                height={10}
              />
            </span>
            <h1 className="text-[3.5rem] leading-[3.1rem] font-poppins font-extrabold text-white my-1 px-0 sm:px-14 md:px-18 lg:px-0 tracking-tighter mt-3">
              Take a closer look at our extensive set of services
            </h1>
            <p className="font-poppins text-white mt-1 p-2 text-[1.2rem] opacity-[0.7] font-[300] ">
              Empowering Your Practice
            </p>
          </div>
          <div className="form-section flex justify-center items-center ml-0 md:ml-[30px] mb-10 fade-right">
            <ContactForm />
          </div>
        </div>
      </section>
      <div className="bg-primary w-full">
        <div className="max-w-[1140px] m-auto py-[38px] px-10 lg:px-0 flex justify-between flex-col md:flex-row items-start md:items-center gap-2">
          <h2 className="font-poppins text-[20px] text-white text-wrap tracking-tighter font-[600]">
            Register With Top Insurance Companies with Help of{" "}
            <span className="font-shadow text-[28px] font-medium">The Credentialing</span>{" "}
          </h2>
          <button className="bg-[#212529] text-white border-none hero mt-5 px-[24px] py-[16px] md:mt-0 rounded-md hover:bg-[#32383e] text-nowrap text-[14px] font-semibold">
            Get Started Now
          </button>
        </div>
      </div>
    </>
  );
}
