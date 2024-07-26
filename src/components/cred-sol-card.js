
import ListItem from "@/Home/sections/listItem";
import { Col, Row } from "antd";
import Image from "next/image";
import { FaCaretRight } from "react-icons/fa";

export default function CredSolCard({
  image,
  title,
  points,
  display,
  span,
  background = "white",
}) {
  return (
    <section className="my-20"
      style={{
        background: background,
      }}
    >
      <Row
        align={"middle"}
        justify={display}
        gutter={[0, 5]}
        className="max-w-[1200px] m-auto py-[80px] gap-5"
      >
        <Col span={span[0].small} md={span[0].md} className="p-10 md:p-0">
          <Image
            src={image}
            alt="when need to cred"
            width={1320}
            height={400}
          />
        </Col>

        <Col
          span={span[1].small}
          md={span[1].md}
          className="ml-0 md:ml-16 p-10 md:p-0"
        >
          {title ? (
            <h1 className="text-[#222] mb-5 font-[800] text-[36px]">{title}</h1>
          ) : (
            <h1 className="text-[28px] text-[#222] mb-5 font-[400]">
              <span className="font-[800]">When Do</span> You need Credentialing
              Services
            </h1>
          )}

          <div className="points space-y-4 px-3">


            <ListItem
              className={"text-[#777] text-[20px] font-[400]"}
              iconURL={<FaCaretRight className="text-primary mt-1" />}
              text={points[0]}
            />

            <ListItem
              className={"text-[#777] text-[20px] font-[400]"}
              iconURL={<FaCaretRight className="text-primary mt-1" />}
              text={points[1]}
            />

            <ListItem
              className={"text-[#777] text-[20px] font-[400]"}
              iconURL={<FaCaretRight className="text-primary mt-1" />}
              text={points[2]}
            />

            <ListItem
              className={"text-[#777] text-[20px] font-[400]"}
              iconURL={<FaCaretRight className="text-primary mt-1" />}
              text={points[3]}
            />
            <ListItem
              className={"text-[#777] text-[20px] font-[400]"}
              iconURL={<FaCaretRight className="text-primary mt-1" />}
              text={points[4]}
            />

            {points[5] && (
              <ListItem
                className={"text-[#777] text-[20px] font-[400]"}
                iconURL={<FaCaretRight className="text-primary mt-1" />}
                text={points[5]}
              />
            )}
          </div>
        </Col>
      </Row>
    </section>
  );
}
