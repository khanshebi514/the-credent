
import { Button, Col, Row } from "antd";
import Image from "next/image";

export default function ValueOffer({image, title, description, order, button}) {

  return (
    <div className="my-[30px]"
    >
       <Row className={`max-w-[1200px] m-auto my-0 md:my-[30px`} align={'middle'} justify={'space-between'}>
        <Col order={order ? 2:1} span={24} md={8} className="flex justify-center items-cente">
        <div className="">
        <Image src={image} alt="this is image" width={title == 'IPA Enrollment' ? 350: 400} height={400}/>
        </div>
        </Col>
        <Col span={24} md={14} order={order ? 1 : 2} className="">
        <div className="flex justify-center md:justify-start gap-5 flex-col">
            <h1 className="font-bold text-[36px] text-[#222]">{title}</h1>
            <p className="text-[#777] text-lg leading-9">{description}</p>
            {button && <button className="bg-primary rounded-none outline-none w-[160px] px-[16px] py-[18px] text-white hover:bg-[#0099e6]">
                {button}
                    </button>}
        </div>
        </Col>
    </Row>
    </div>
   
  )
}
