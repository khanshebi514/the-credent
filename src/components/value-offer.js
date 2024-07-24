
import { Button, Col, Row } from "antd";
import Image from "next/image";

export default function ValueOffer({image, title, description, order, button}) {

  return (
    <div className="">
       <Row className="max-w-[1280px] m-auto my-0 md:my-[100px] gap-5" align={'middle'} justify={'space-around'}>
        <Col order={order} span={24} md={6} className="flex justify-center items-cente">
        <div className="w-[80%] md:w-full">
        <Image src={image} alt="this is image" width={700} height={400}/>
        </div>
        </Col>
        <Col span={24} md={10} className="">
        <div className="flex justify-center md:justify-start gap-5 flex-col">
            <h1 className="font-bold text-3xl text-[#222]">{title}</h1>
            <p className="text-[#777] text-lg">{description}</p>
            {button && <button className="bg-primary rounded-none outline-none w-[200px] h-12 text-white hover:bg-[#0099e6]">
                {button}
                    </button>}
        </div>
        </Col>
    </Row>
    </div>
   
  )
}
