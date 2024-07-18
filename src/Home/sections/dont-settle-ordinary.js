import { Button } from "antd";
import { FaArrowRight } from "react-icons/fa6";

export default function DontSettleOrdinary() {
  return (
    <section className="w-full h-[95vh] bg-[#222]">
        <div className="max-w-[1280px] m-auto  h-full flex justify-center items-center flex-col text-center gap-5">
            <h1 className="heading-text font-serif text-white">Don't Settle For Ordaniry</h1>
            <p className="text-gray-400 mt-3">Get your hands on high-quality credentialing services tailored to your practice's needs.</p>

            <Button className="mt-5 bg-primary text-white border-none rounded-none px-5 w-[200px] h-14 text-lg" size="large">
                Call us Now <FaArrowRight className="animate-pulse"/>
            </Button>
        </div>
    </section>
  )
}
