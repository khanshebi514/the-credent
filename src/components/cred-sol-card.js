
import ListItem from "@/pages/Home/sections/listItem";
import { Col, Row } from "antd";
import Image from "next/image";
import { FaCaretRight } from "react-icons/fa";

export default function CredSolCard({
  image,
  title,
  points,
  display,
  span:ColWidth,
  order,
  background = "white",
}) {
  console.log(ColWidth);
  return (
    <section className="my-5 md:my-10 lg:my-14"
      style={{
        background: background,
      }}
    >
      <div className="max-w-[1200px] m-auto py-[10px] md:py-[30px] lg:py-[90px]">
      <Row
        style={{
          marginTop:'15px'
        }}
        align={'top'}
        justify={display}
      >
        <Col 
           order={order ? 2 : 1}
          span={ColWidth.first.small}
          md={ColWidth.first.md} className="p-10 md:p-0">
          <Image
            src={image}
            alt="when need to cred"
            width={(order || display ==='space-between' || display === 'center') ? 450 : 320}
            height={400}
            className={`object-cover block ${(order ===false && display === 'start') ? 'scale-110' : 'scale-110' }`}
          />
        </Col>

        <Col
        order={order ? 1 : 2}
          span={ColWidth.second.small}
          md={ColWidth.second.md}
          className={`p-10 ${!order && display === 'start' ? 'lg:pl-12' : 'lg:pl-0'}`} 
        >
          {title ? (
            <h1 className="text-[#222] mb-5 font-[700] text-[25px] md:text-[40px] ml-2 font-poppins tracking-tighter leading-tight">{title}</h1>
          ) : (
            <h1 className="text-[22px] md:text-[28px] text-[#222] mb-5 font-[400] ml-2 tracking-tighter">
              <span className="font-[900]">When Do</span> You need Credentialing
              Services
            </h1>
          )}

          <div className="points lg:space-y-4 md:space-y-3 space-y-1 w-[300px] sm:w-[365px]">
          <ListItem
              className={"text-[#777] text-[18px] font-[400]"}
              iconURL={<FaCaretRight size={17} className="text-primary mt-1" />}
              text={points[0]}
            />

            <ListItem
              className={"text-[#777] text-[18px] font-[400]"}
              iconURL={<FaCaretRight size={17} className="text-primary mt-1" />}
              text={points[1]}
            />

            <ListItem
              className={"text-[#777] text-[18px] font-[400]"}
              iconURL={<FaCaretRight size={17} className="text-primary mt-1" />}
              text={points[2]}
            />

            <ListItem
              className={"text-[#777] text-[18px] font-[400]"}
              iconURL={<FaCaretRight size={17} className="text-primary mt-1" />}
              text={points[3]}
            />
            <ListItem
              className={"text-[#777] text-[18px] font-[400]"}
              iconURL={<FaCaretRight size={17} className="text-primary mt-1" />}
              text={points[4]}
            />

            {points[5] && (
              <ListItem
                className={"text-[#777] text-[18px] font-[400]"}
                iconURL={<FaCaretRight size={17} className="text-primary mt-1" />}
                text={points[5]}
              />
            )}
          </div>
        </Col>
      </Row>
      </div>
      
    </section>
  );
}
