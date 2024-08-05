'use client'
import Image from "next/image";

import { IoIosCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Col, Row } from "antd";

import ScreenWidth from "@/commons";

export default function DosnDont() {
  const width = ScreenWidth();


 

  return (
    <section className=" bg-slate-200 "
    style={{
      background:"url('/images/dim-bg.jpg')",
      backgroundPosition:'center',
      backgroundSize:'cover',
      objectFit:'cover'
    }}
    >
      <div className="flex flex-col md:flex-row justify-evenly items-center max-w-[1200px] m-auto py-[30px] md:py-[50px]">
        <div className=" p-10 text-center md:text-start w-full"
       
        >
          <Row
            className="w-full"
            align={"middle"}
            justify={"space-between"}
            gutter={[0, 5]}
          >
            {/*-------------------------- first main column----------------------------- */}
            <Col xs={20} lg={14}  order={width > 1000 ? 0 : 1}>
              <Row
                align={"middle"}
                className="bg-white flex justify-center py-14 px-2 w-full"
              >
                <div className="w-[90%] text-start">
                  <h1 className="font-bold text-[36px] text-[#212529] md:text-4xl lg:mr-16 mb-5">
                    DOs & DONT
                  </h1>
                </div>
                <Col
                  className="bg-white shadow-lg py-3 h-[520px] "
                  sm={12}
                  md={11}
                  xs={20}
                >
                  <span className="bg-primary w-full flex justify-center items-center px-[16px] py-[24px]">
                    <h1 className="info-text text-white !text-[20px]">DOs</h1>
                  </span>

                  <ul className="space-y-6 px-3 mt-6 leading-9">

                   <li  className="text-[17px] font-[400] flex justify-start items-start gap-2 "> <span><IoIosCheckmark size={30} className="text-green-600"/></span> Master digital credentialing</li>

                   <li  className="text-[17px] font-[400] flex justify-start items-start gap-2 "> <span><IoIosCheckmark size={30} className="text-green-600"/></span>Implement blockchain for secure</li>

                   <li  className="text-[17px] font-[400] flex justify-start items-start gap-2"> <span><IoIosCheckmark size={30} className="text-green-600"/></span>Leverage AI for document parsing</li>

                   <li  className="text-[17px] font-[400] flex justify-start items-start gap-2"> <span><IoIosCheckmark size={30} className="text-green-600"/></span>Prioritize cybersecurity vigilance</li>

                 </ul>
                </Col>

                <Col
                  className="bg-white shadow-lg py-3 h-[520px]"
                  sm={12}
                  lg={11}
                  xs={20}
                >
                  <span className="bg-[#97643D] w-full flex justify-center items-center px-[16px] py-[24px]">
                    <h1 className="info-text text-white !text-[20px]">DONT</h1>
                  </span>
                 <ul className="space-y-6 px-5 mt-6 leading-9">

                   <li  className="text-[17px] font-[400] flex justify-start text-start items-start gap-2 "> <span><RxCross2 size={20} className="text-red-600 mt-2"/></span> Resist digital transformation</li>

                   <li  className="text-[17px] font-[400] flex justify-start items-start gap-2 "> <span><RxCross2 size={20} className="text-red-600 mt-2"/></span> Underestimate data security</li>

                   <li  className="text-[17px] font-[400] flex justify-start items-start gap-2"> <span><RxCross2 size={20} className="text-red-600 mt-2"/></span> Rely solely on manual verification</li>

                   <li  className="text-[17px] font-[400] flex justify-start items-start gap-2"> <span><RxCross2 size={20} className="text-red-600 mt-2"/></span> Overlook compliance with healthcare IT standards</li>

                 </ul>
                </Col>
              </Row>
            </Col>

            {/*-------------------------- second main column----------------------------- */}

            <Col
              span={8}
              lg={8}
              xs={20}
              order={width < 1000 ? 0 :1}
              className="flex justify-center items-center my-2 w-full"
            >
              <Image
                src={"/images/Group-17.png"}
                alt="this is image"
                objectFit="cover"
                width={1300}
                height={400}
 
              />
            </Col>
          </Row>
        </div>
      </div>
    </section>

  );
}
