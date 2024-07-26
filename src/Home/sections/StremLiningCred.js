import { STREAMLINE_CREDENTILING } from "@/constants";
import Image from "next/image";
import ListItem from "./listItem";
import { FaCaretRight } from "react-icons/fa";
import { Col, Row } from "antd";
import CredSolCard from "@/components/cred-sol-card";

export default function StreamLining() {
  const {title, image, points} = STREAMLINE_CREDENTILING
  const span = [
    {
      "small": 20,
      "md": 8,
    },
    {
      "small": 20,
      "md": 12,
    },
  ];
  return (
  <>
  <CredSolCard title={title} image={image} points={points} display={'center'} span={span}/>
  </>
  )
}



