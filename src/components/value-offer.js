import { Button, Col, Row } from "antd";
import Image from "next/image";

export default function ValueOffer({image, title, description, order, button}) {
  return (
    <Row className="max-w-[1280px] m-auto my-0 md:my-[100px]" align={'middle'} justify={'space-around'}>
        <Col order={order} span={24} md={8} className="flex justify-center items-center">
        <Image src={image} alt="this is image" width={300} height={400}/>
        </Col>
        <Col span={24} md={10}>
        <div className="flex justify-center items-center md:items-start md:justify-start gap-5 flex-col">
            <h1 className="font-bold text-xl md:text-3xl text-[#222]">{title}</h1>
            <p className="text-[#777] text-lg">{description}</p>
            {button && <button className="bg-primary rounded-none outline-none w-[200px] h-12 text-white hover:bg-[#0099e6]">
                {button}
                    </button>}
        </div>
        </Col>
    </Row>
  )
}
