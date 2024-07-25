import { HOW_GO_ABOUT_CRED } from "@/constants";
import Image from "next/image";
import ListItem from "./listItem";
import { FaCaretRight } from "react-icons/fa";
import { Col, Row } from "antd";

export default function CredMethod() {
  
  return (
    <section className="bg-[#f4f4f4]">
    <Row align={'middle'} justify={'start'} gutter={[0, 5]} className="max-w-[1200px] m-auto py-[100px] gap-5 p-10" >
      <Col span={20} md={10} className="p-10 md:p-0">
        <Image src={HOW_GO_ABOUT_CRED.image} alt="when need to cred" width={1380} height={400} />
      </Col>

      <Col span={20} md={10} className="ml-0 md:ml-16 p-10 md:p-0">
      <h1 className="text-[#222] mb-5 text-[32px] font-bold">{HOW_GO_ABOUT_CRED.title}
            </h1>

            <div className="points space-y-3 ">
              <ListItem className={'text-[#777] text-lg'} iconURL={<FaCaretRight className="text-primary"/>} text={HOW_GO_ABOUT_CRED.points[0]}/>
              <ListItem className={'text-[#777] text-lg'} iconURL={<FaCaretRight className="text-primary"/>} text={HOW_GO_ABOUT_CRED.points[1]}/>
              <ListItem className={'text-[#777] text-lg'} iconURL={<FaCaretRight className="text-primary"/>} text={HOW_GO_ABOUT_CRED.points[2]}/>
              <ListItem className={'text-[#777] text-lg'} iconURL={<FaCaretRight className="text-primary"/>} text={HOW_GO_ABOUT_CRED.points[3]}/>
              <ListItem className={'text-[#777] text-lg'} iconURL={<FaCaretRight className="text-primary"/>} text={HOW_GO_ABOUT_CRED.points[4]}/>
              <ListItem className={'text-[#777] text-lg'} iconURL={<FaCaretRight className="text-primary"/>} text={HOW_GO_ABOUT_CRED.points[5]}/>
             
            </div>
      </Col>
    </Row>
   </section>
  )
}
