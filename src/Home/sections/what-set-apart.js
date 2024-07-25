import PartnerSlider from "@/components/partner-slider";

export default function WhatSetApart() {
  return (
    <section className="bg-white w-full ">
      <div className="max-w-[1280px] m-auto mt-5 md:mt-[50px] w-full p-12">
        <div className="w-[100%] h-[2px] bg-gray-300 shadow-lg m-auto mb-10 md:mb-[50px]"></div>

        <div className="my-12">
          <h1 className="text-xl md:text-3xl text-[#222]">
            WHAT SETS <span className="font-bold">US APART</span>
          </h1>
        </div>

        <div className="flex justify-around flex-wrap">
          <div className="">
            <div className="w-[320px] h-[148px] space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-[#222]">Expertise</h2>
              <p className="text-gray-400">
                Our in-depth industry knowledge ensures precision and compliance
                in every aspect of credentialing.
              </p>
            </div>

            <div className="gap-2 w-[320px] h-[148px] space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-[#222]">Dedication</h2>
              <p className="text-gray-400">
                Were committed to your success, working tirelessly to exceed
                your expectations and goals.
              </p>
            </div>

            <div className="gap-2 w-[320px] h-[148px] space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-[#222]">Efficieny</h2>
              <p className="text-gray-400">
                We streamline the process, saving you time, reducing delays, and
                accelerating provider approvals.
              </p>
            </div>
          </div>
          <div>
            <div className="w-[320px] h-[148px] space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-[#222]">Pocket Friendly</h2>
              <p className="text-gray-400">
                We provide our services at a competitive rate of $149 per
                application.
              </p>
            </div>

            <div className="w-[320px] h-[148px] space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-[#222]">Proactive</h2>
              <p className="text-gray-400">
                Our team anticipates changes and needs, staying ahead of
                industry shifts and ensuring long-term success.
              </p>
            </div>

            <div className="gap-2 w-[320px] h-[148px] space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-[#222]">Comprehensive</h2>
              <p className="text-gray-400">
                We handle initial credentialing, re-credentialing, and all
                related tasks with unparalleled thoroughness.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-[25px] my-2 text-[#222]">and more...</h2>

            <div className="w-[300px] sm:w-[350px] bg-gray-200 p-1 rounded-t-md">
              <h2 className="py-2 font-bold text-lg ml-2 text-[#222]">
                A Gateway to Credentialing
              </h2>
              <div className="p-10 bg-white">
                <p className="text-gray-400 text-sm">
                  Credentialing Services provide a gateway for your insurance to
                  remove complexities, unlock new opportunities, maximize your
                  revenue, and maintain your credentials through streamlining
                  billing, secure reimbursement, negotiating strategies, and
                  uninterrupted practice growth.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90%] h-[1px] bg-gray-300 shadow-lg m-auto my-5 md:mb-[50px]"></div>

        <div className="flex justify-center items-center gap-5 flex-col text-center py-3  ">
          <h1 className="font-bold text-[1.7rem] w-full sm:w-[70%] lg:w-full text-center leading-relaxed">
            We are not the only ones excited{" "}
            <span className="bg-primary p-2 text-white leading-normal">happy</span> about The
            Credentialing Services
          </h1>
          <p className="text-primary font-light">
            Simple Words, Big Impact – Your Review Shapes Us.
          </p>
        </div>
      </div>
      
    </section>
  );
}
