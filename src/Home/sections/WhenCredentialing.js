
import { WHEN_NEED_CREDENTIALING } from "@/constants";
import Image from "next/image";
import ListItem from "./listItem";
import { FaCaretRight } from "react-icons/fa";
import { Col, Row } from "antd";

export default function WhenCredentialing() {
  
  return (
   <section className="bg-[#f4f4f4]">
    <Row align={'middle'} justify={'start'} gutter={[0, 5]} className="max-w-[1200px] m-auto py-[100px] gap-5" >
      <Col span={20} md={6} className="p-10 md:p-0">
        <Image src={WHEN_NEED_CREDENTIALING.image} alt="when need to cred" width={1380} height={400} />
      </Col>

      <Col span={20} md={12} className="ml-0 md:ml-16 p-10 md:p-0">
      <h1 className="text-[25px] text-[#222] mb-5">
         <span className="font-bold">When Do</span> You need Credentialing
              Services
            </h1>

            <div className="points space-y-3 ">
              <ListItem className={'text-[#777] text-lg'} iconURL={<FaCaretRight className="text-primary"/>} text={WHEN_NEED_CREDENTIALING.points[0]}/>
              <ListItem className={'text-[#777] text-lg'} iconURL={<FaCaretRight className="text-primary"/>} text={WHEN_NEED_CREDENTIALING.points[1]}/>
              <ListItem className={'text-[#777] text-lg'} iconURL={<FaCaretRight className="text-primary"/>} text={WHEN_NEED_CREDENTIALING.points[2]}/>
              <ListItem className={'text-[#777] text-lg'} iconURL={<FaCaretRight className="text-primary"/>} text={WHEN_NEED_CREDENTIALING.points[3]}/>
              <ListItem className={'text-[#777] text-lg'} iconURL={<FaCaretRight className="text-primary"/>} text={WHEN_NEED_CREDENTIALING.points[4]}/>
            </div>
      </Col>
    </Row>
   </section>
  )
}


