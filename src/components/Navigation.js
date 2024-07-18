'use client'
import Image from "next/image";
// import logoImage from 'cred-logo.svg'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Button, Col, Mentions, Menu, Row } from "antd";
import "./Navigation.css"

import { MENU_ITEM } from "@/constants";
import MenuItem from "antd/es/menu/MenuItem";
import { useState } from "react";


export default function Navigation() {
const [menu, setMenu] = useState(false)

  return (
    <header className="w-full h-[90px] fixed z-10 bg-white shadow-lg">
      <Row align={'middle'} justify={'space-evenly'} className="h-full max-w-[1280px] m-auto px-0 md:px-[100px]">

        <Col span={8} md={4}>
        <Image src={'images/cred-logo.svg'} width={200} height={100} alt="logo image"/>
        </Col>
        
        <Col span={0} md={12} >
        <Menu className="custom_menu" items={MENU_ITEM} mode="horizontal" selectedKeys={'1'}/>
        </Col>

        <Col span={8} md={3}>
        <div className="flex justify-center items-center gap-2"> 
          <FaFacebook className="cursor-pointer shadow-lg rounded-full p-1 text-[28px] text-black hover:bg-primary hover:text-white"/>
          <FaInstagram className="cursor-pointer shadow-lg rounded-full p-1 text-[28px] text-black hover:bg-primary hover:text-white"/>
          <FaTwitter className="cursor-pointer shadow-lg rounded-full p-1 text-[28px] text-black hover:bg-primary hover:text-white"/>
          <FaLinkedin className="cursor-pointer shadow-lg rounded-full p-1 text-[28px] text-black hover:bg-primary hover:text-white"/>
        </div>
        </Col>

        <Col span={5} md={2}>
        <Button style={{background:'#203993', color:'white', padding:'8px'}} size="" className="hidden md:flex">
          Sign In
        </Button>

        <Button style={{background:'#203993', color:'white', padding:'8px'}} className="md:hidden">
          <FiMenu size={25} onClick={()=>setMenu(prev=>!prev)}/>
        </Button>
        </Col>

      </Row>
      {menu && <Menu items={MENU_ITEM} mode='inline'/>}
    </header>
  );
}
