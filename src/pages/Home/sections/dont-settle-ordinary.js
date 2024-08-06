import { FaArrowRight } from "react-icons/fa6";

export default function DontSettleOrdinary() {
  return (
    <section className="w-full h-[90vh] bg-[#36393d]">
        <div className="max-w-[1280px] m-auto  h-full flex justify-center items-center flex-col text-center gap-2 md:gap-5">
            <h1 className="text-white uppercase text-[32px] lg:text-[46px] font-[700] tracking-tighter">Don't Settle For ORDINARY</h1>
            <p className="text-[white] text-[14px] md:text-[19px]  opacity-70 mt-3">Get your hands on high-quality credentialing services tailored to your practice needs.</p>

            <button className="mt-5 bg-primary text-white rounded-none px-5 w-[250px] h-16 text-[18px] hover:bg-[#0099e6] border-b-[1px] border-[#0099e6] border-opacity-50">
                <p className="flex justify-center items-center gap-2 uppercase font-[500]">Call us Now <FaArrowRight className="animate-pulse"/></p>
            </button>
        </div>
    </section>
  )
}
