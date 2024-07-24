'use client'
import Image from "next/image";

import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import ListItem from "./listItem";
import { Col, Row } from "antd";
import { useState, useEffect } from "react";

export default function DosnDont() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const order_1 = width < 760 ? 2 : 1 ;
  const order_2 = width < 760 ? 1 : 2 ;
  
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
          <Col xs={20} md={14} order={order_1}>
            
            <Row align={"middle"} className="bg-white flex justify-center px-5 py-14">
            <div className="w-[85%] ">
            <h1 className="font-bold text-3xl md:text-5xl mr-16 mb-2">
              DOs & DONT
            </h1>
            </div>
              <Col
                className="w-[300px] bg-white shadow-md py-3 h-[400px] "
                sm={12}
                md={10}
                xs={20}
              >
                <span className="bg-primary w-full h-14 flex justify-center items-center">
                  <h1 className="info-text text-white">DOs</h1>
                </span>

                <div className="space-y-5 p-5">
                  <ListItem
                    iconURL={<TiTick className="text-green-600 mt-[2px]" />}
                    text={"Master digital credentialing"}
                  />
                  <ListItem
                    iconURL={<TiTick className="text-green-600 mt-[2px]" />}
                    text={"Implement blockchain for secure"}
                  />
                  <ListItem
                    iconURL={<TiTick className="text-green-600 mt-[2px]" />}
                    text={"Leverage AI for document parsing"}
                  />
                  <ListItem
                    iconURL={<TiTick className="text-green-600 mt-[2px]" />}
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
                <span className="bg-[#9B5E51] w-full h-14 flex justify-center items-center">
                  <h1 className="info-text text-white ">DONT</h1>
                </span>
                <div className="space-y-5 p-5">
                  <ListItem
                    iconURL={
                      <RxCross2 size={20} className="text-red-600 mt-1" />
                    }
                    text={"Resist digital transformation"}
                  />
                  <ListItem
                    iconURL={
                      <RxCross2 size={20} className="text-red-600 mt-1" />
                    }
                    text={"Underestimate data security"}
                  />
                  <ListItem
                    iconURL={
                      <RxCross2 size={20} className="text-red-600 mt-1" />
                    }
                    text={"Rely solely on manual verification"}
                  />
                  <ListItem
                    iconURL={
                      <RxCross2 size={20} className="text-red-600 mt-1" />
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
            md={8}                           
            xs={20}
            order={order_2}
            className="flex justify-center items-center"
          >
            <Image
              src={"/images/Group-17.png"}
              alt="this is image"
              width={350}
              height={400}
            />
          </Col>
        </Row>
      </div>
      </div>
      
    </section>

    // <section className="bg-[#ededed]">
    //   <div className="p-5 max-w-[1200px] m-auto">
    //   <div className="grid grid-cols-1 md:grid-cols-[40%_40%] align-middle justify-around gap-10">
    //     <div id="dos-ID" className="bg-white p-5">
    //     <h1 className="font-bold text-3xl md:text-5xl p-2">DOs & DONT</h1>
    //     <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg">
    //       <div id="dos" className="border-r border-gray-300">
    //       <span className="bg-primary w-full h-14 flex justify-center items-center">
    //             <h1 className="info-text text-white ">DOs</h1>
    //           </span>
    //       <div className="space-y-5 p-5">
    //              <ListItem
    //               iconURL={<TiTick className="text-green-600 mt-[2px]" />}
    //               text={"Master digital credentialing"}
    //             />
    //             <ListItem
    //               iconURL={<TiTick className="text-green-600 mt-[2px]" />}
    //               text={"Implement blockchain for secure"}
    //             />
    //             <ListItem
    //               iconURL={<TiTick className="text-green-600 mt-[2px]" />}
    //              text={"Leverage AI for document parsing"}
    //              />
    //              <ListItem
    //              iconURL={<TiTick className="text-green-600 mt-[2px]" />}
    //               text={"Prioritize cybersecurity vigilance"}
    //              />
    //           </div>
    //       </div>

    //       <div id="Dont">
    //       <span className="bg-[#9B5E51] w-full h-14 flex justify-center items-center">
    //             <h1 className="info-text text-white ">DONT</h1>
    //           </span>
    //           <div className="space-y-5 p-5">
    //             <ListItem
    //               iconURL={<RxCross2 size={20} className="text-red-600 mt-1" />}
    //               text={"Resist digital transformation"}
    //            />
    //             <ListItem
    //               iconURL={<RxCross2 size={20} className="text-red-600 mt-1" />}
    //               text={"Underestimate data security"}
    //             />
    //             <ListItem
    //               iconURL={<RxCross2 size={20} className="text-red-600 mt-1" />}
    //               text={"Rely solely on manual verification"}
    //              />
    //              <ListItem
    //                iconURL={<RxCross2 size={20} className="text-red-600 mt-1" />}
    //                text={"Overlook compliance with healthcare IT standards"}
    //              />
    //           </div>
    //       </div>
    //     </div>
    //     </div>

    //     <div id="image" className="w-full self-center">

    //     <Image
    //            src={"/images/Group-17.png"}
    //            alt="this is image"
    //           width={400}
    //           height={400}
    //         />

    //     </div>
    //   </div>
    //   </div>
    // </section>
  );
}
