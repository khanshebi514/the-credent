import Image from "next/image";

import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import ListItem from "./listItem";
import { Col, Row } from "antd";

export default function DosnDont() {
  return (
    <section className="flex flex-col md:flex-row justify-evenly items-center max-w-[1280px] m-auto py-[30px] md:py-[100px] bg-slate-200">
      <div className=" p-10 text-center md:text-start w-full">
      <h1 className="font-bold text-3xl md:text-5xl ml-[50px]">DOs & DONT</h1>
        <Row className="w-full" align={'middle'} justify={'space-around'} gutter={[0, 5]}>
          
          <Row align={'middle'} justify={'center'} className="bg-white p-2">
            
          <Col className="w-[300px] bg-white shadow-md py-3 h-[400px] " sm={12} md={10} xs={20}>
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

            <Col className="w-[300px]  bg-white shadow-md py-3 h-[400px]"sm={12} md={10} xs={20}>
              <span className="bg-[#9B5E51] w-full h-14 flex justify-center items-center">
                <h1 className="info-text text-white ">DONT</h1>
              </span>
              <div className="space-y-5 p-5">
                <ListItem
                  iconURL={<RxCross2 size={20} className="text-red-600 mt-1" />}
                  text={"Resist digital transformation"}
                />
                <ListItem
                  iconURL={<RxCross2 size={20} className="text-red-600 mt-1" />}
                  text={"Underestimate data security"}
                />
                <ListItem
                  iconURL={<RxCross2 size={20} className="text-red-600 mt-1" />}
                  text={"Rely solely on manual verification"}
                />
                <ListItem
                  iconURL={<RxCross2 size={20} className="text-red-600 mt-1" />}
                  text={"Overlook compliance with healthcare IT standards"}
                />
              </div>
            </Col>
          </Row>
           

          <Col md={6} offset={2} className="flex justify-start items-center">
            <Image
              src={"/images/Group-17.png"}
              alt="this is image"
              width={300}
              height={400}
            />
          </Col>
        </Row>
      </div>
    </section>
  );
}
