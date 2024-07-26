import { HOW_GO_ABOUT_CRED } from "@/constants";
import Image from "next/image";
import ListItem from "./listItem";
import { FaCaretRight } from "react-icons/fa";
import { Col, Row } from "antd";
import CredSolCard from "@/components/cred-sol-card";

export default function CredMethod() {
  const {title, image, points} = HOW_GO_ABOUT_CRED
  const span = [
    {
      "small": 20,
      "md": 10,
    },
    {
      "small": 20,
      "md": 10,
    },
  ];
  return (
  <CredSolCard title={title} image={image} points={points} span={span} display={'start'}/>
  )
}
