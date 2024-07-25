'use client'
import { MENU_ITEM } from "@/constants";
import Image from "next/image";
// import logoImage from 'cred-logo.svg'
import './Navigation.css'
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter,FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import MenuItem from "./menu-item";
import { useState } from "react";
import { Menu } from "antd";

export default function Navigation() {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <header className="flex justify-center items-center gap-2 h-[85px] p-2 fixed w-full z-10 bg-white card-shadow">

      <div className="mr-5 md:mr-16 w-[150] md:w-[200px] ">
        <Image src='./images/cred-logo.svg' alt="lgo image" height={70} width={200}/>
      </div>

      <div className="hidden lg:block w-[550px]">
      <Menu mode="horizontal" items={MENU_ITEM} className="custum_menu uppercase " />
        {/* <Menu items={MENU_ITEM} mode="horizontal" className=" w-full custum_menu" selectedKeys={'1'} /> */}
      </div>

      <div className="flex justify-center items-center gap-3">
        <FaFacebookF  size={24} className="bg-white rounded-full cursor-pointer card-shadow p-1  hover:bg-primary hover:text-white text-black"/>
        <FaXTwitter size={24}  className="bg-white  rounded-full cursor-pointer card-shadow p-1  hover:bg-primary hover:text-white text-black"/>
        <FaLinkedinIn size={24}  className="bg-white rounded-full cursor-pointer card-shadow p-1  hover:bg-primary hover:text-white text-black"/>
        <FaInstagram size={24}  className="bg-white  rounded-full cursor-pointer card-shadow p-1  hover:bg-primary hover:text-white text-black"/>
      </div>

      <div className="ml-0 md:ml-10 relative">   
        <button className="rounded-[5px] text-white px-[14px] py-[9px] bg-primary text-sm font-[500] text-nowrap hover:bg-[#00a1f2] hidden lg:block "> 
          Sign In
        </button>
        <button className="rounded-[5px] text-white px-[14px] py-[9px] bg-primary text-sm font-[500] text-nowrap hover:bg-[#00a1f2] block lg:hidden"> 
        {mobileMenu ? <RxCross2 size={16} className="text-white" onClick={()=>{setMobileMenu(false)}}/> : <LuMenu size={16} className="text-white" onClick={()=>{setMobileMenu(true)}}/> } 
        </button>

        <div className=" absolute top-12 right-0 w-[300px] z-10 ">
        {mobileMenu && <Menu items={MENU_ITEM} mode="inline"/>} 
        </div>
        
      </div>
 
    </header>
         
  )
}