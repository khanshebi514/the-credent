'use client'
import Image from "next/image";

import { IoIosCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import ListItem from "./listItem";
import { Col, Row } from "antd";

import ScreenWidth from "@/commons";

export default function DosnDont() {
  const width = ScreenWidth();


 

  return (
    <section className=" bg-slate-200">
      <div className="flex flex-col md:flex-row justify-evenly items-center max-w-[1200px] m-auto py-[30px] md:py-[50px]">
        <div className=" p-10 text-center md:text-start w-full">
          <Row
            className="w-full"
            align={"middle"}
            justify={"space-around"}
            gutter={[0, 5]}
          >
            {/*-------------------------- first main column----------------------------- */}
            <Col xs={20} lg={14}  order={width > 1000 ? 0 : 1}>
              <Row
                align={"middle"}
                className="bg-white flex justify-center px-5 py-14"
              >
                <div className="w-[100%] text-start">
                  <h1 className="font-bold !text-[32px] text-[#212529] md:text-5xl lg:mr-16 mb-2">
                    DOs & DONT
                  </h1>
                </div>
                <Col
                  className="w-[300px] bg-white shadow-md py-3 h-[400px] "
                  sm={12}
                  md={10}
                  xs={20}
                >
                  <span className="bg-primary w-full h-16 flex justify-center items-center">
                    <h1 className="info-text text-white !text-[20px]">DOs</h1>
                  </span>

                  <div className="space-y-5 p-5">
                    <ListItem
                      iconURL={
                        <IoIosCheckmark
                          size={40}
                          className="text-green-600 font-extrabold"
                        />
                      }
                      text={"Master digital credentialing"}
                    />
                    <ListItem
                      iconURL={
                        <IoIosCheckmark
                          size={40}
                          className="text-green-600 font-extrabold"
                        />
                      }
                      text={"Implement blockchain for secure"}
                    />
                    <ListItem
                      iconURL={
                        <IoIosCheckmark
                          size={40}
                          className="text-green-600 font-extrabold"
                        />
                      }
                      text={"Leverage AI for document parsing"}
                    />
                    <ListItem
                      iconURL={
                        <IoIosCheckmark
                          size={40}
                          className="text-green-600 font-extrabold"
                        />
                      }
                      text={"Prioritize cybersecurity vigilance"}
                    />
                  </div>
                </Col>

                <Col
                  className="w-[300px]  bg-white shadow-md py-3 h-[400px]"
                  sm={12}
                  md={10}
                  xs={20}
                >
                  <span className="bg-[#97643D] w-full h-16 flex justify-center items-center">
                    <h1 className="info-text text-white !text-[20px]">DONT</h1>
                  </span>
                  <div className="space-y-5 p-5">
                    <ListItem
                      iconURL={
                        <RxCross2  className="text-red-600 mt-1" style={{width:"20px !important"}} />
                      }
                      text={"Resist digital transformation"}
                    />
                    <ListItem
                      iconURL={
                        <RxCross2  className="text-red-600 mt-1" style={{width:"20px !important"}} />
                      }
                      text={"Underestimate data security"}
                    />
                    <ListItem
                      iconURL={
                        <RxCross2  className="text-red-600 mt-1" style={{width:"20px !important"}} />
                      }
                      text={"Rely solely on manual verification"}
                    />
                    <ListItem
                      iconURL={
                        <RxCross2  className="text-red-600 mt-1" style={{width:"20px !important"}} />
                      }
                      text={"Overlook compliance with healthcare IT standards"}
                    />
                  </div>
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
