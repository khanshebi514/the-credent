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
    <header className="flex justify-center items-center gap-2 h-[85px] p-2">

      <div className="mr-10 md:mr-16 w-[150px] md:w-[200px]">
        <Image src='./images/cred-logo.svg' alt="lgo image" height={70} width={200}/>
      </div>

      <div className="hidden lg:block">
        <MenuItem/>
      </div>

      <div className="flex justify-center items-center gap-3">
        <FaFacebookF  size={25} className="bg-white p-1 rounded-full cursor-pointer shadow-lg hover:bg-primary hover:text-white text-black"/>
        <FaXTwitter size={25}  className="bg-white p-1 rounded-full cursor-pointer shadow-lg hover:bg-primary hover:text-white text-black"/>
        <FaLinkedinIn size={25}  className="bg-white p-1 rounded-full cursor-pointer shadow-lg hover:bg-primary hover:text-white text-black"/>
        <FaInstagram size={25}  className="bg-white p-1 rounded-full cursor-pointer shadow-lg hover:bg-primary hover:text-white text-black"/>
      </div>

      <div className="ml-0 md:ml-10 relative">   
        <button className="rounded-[5px] text-white px-[14px] py-[9px] bg-primary text-sm font-[500] text-nowrap hover:bg-[#00a1f2] hidden lg:block"> 
          Sign In
        </button>
        <button className="rounded-[5px] text-white px-[14px] py-[9px] bg-primary text-sm font-[500] text-nowrap hover:bg-[#00a1f2] block lg:hidden"> 
        {mobileMenu ? <RxCross2 onClick={()=>{setMobileMenu(prev=>!prev)}}/> : <LuMenu onClick={()=>{setMobileMenu(prev=>!prev)}}/> } 
        </button>

        <div className=" absolute top-12 -left-8">
        {mobileMenu && <Menu items={MENU_ITEM} mode="vertical"/>}
        </div>
        
      </div>
 
    </header>
         
  )
}