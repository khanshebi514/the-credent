import { MENU_ITEM } from "@/constants";
import { Drawer, Menu } from "antd";
import { useState } from "react";
import './Navigation.css'
import Link from "next/link";

export default function MenuItem() {
  

  return (
    <ul className="flex justify-center items-center gap-1">
        {MENU_ITEM.map((item)=><Link 
        className={`${item.path == '/' ? 'bg-primary text-white rounded-md' : ' '} text-sm hover:bg-primary p-[8px] uppercase text-primary font-[600] hover:rounded-t-md hover:text-white `}
        
        href={item.path} 
        key={item.key}
        >
            {item.label}
            
        </Link>)}
    </ul>


  )
}
