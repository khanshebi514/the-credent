
import { WHEN_NEED_CREDENTIALING } from "@/constants";
import Image from "next/image";
import ListItem from "./listItem";
import { FaCaretRight } from "react-icons/fa";
import { Col, Row } from "antd";
import CredSolCard from "@/components/cred-sol-card";

export default function WhenCredentialing() {
  const {image, points} = WHEN_NEED_CREDENTIALING
  const span = [
    {
      "small": 20,
      "md": 7,
    },
    {
      "small": 20,
      "md": 12,
    },
  ];
  return (
  <>
  <CredSolCard image={image} points={points} span={span} display={'start'}  background="#f4f4f4"/>
  </>
  )
}


