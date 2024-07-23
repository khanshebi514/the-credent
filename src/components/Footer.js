import ListItem from "@/Home/sections/listItem";
import { Button, Col, Image, Input, Row } from "antd";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import {FaAngleRight} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#212529] w-full">
        <div className="max-w-[1200px] m-auto flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center py-[80px] px-[20px] text-[.8em]">
            <div className="text-area w-[310px] sm:w-[330px]">
                <h3 className="font-bold text-white mt-2">NEWSLETTER</h3>
               <p className=" text-gray-500 mt-3">
               Discover the world of technology with our most recent credentialing service innovations and regular email updates. Get our newsletter by subscribing now!
               </p>
               <div className="flex justify-center items-center mt-5">
               <Input placeholder="Email address " variant="borderless" className="rounded-l-full py-3 px-3 bg-white outline-none"/>
               <button className="rounded-r-full h-[46px] p-2 bg-white border-l border-gray-200 "><p className="font-bold text-sm">Go!</p></button>
               </div>

               
               
            </div>

            <div className="text-area w-[300px]">
                <h3 className="font-bold text-[11px] md:text-[12px] text-white">CONTACT US</h3>
                <div className="mt-5 text-white space-y-3">
                <ListItem 
                iconURL={<TiLocation 
                className="text-primary mt-1 mr-3"/>} 
                text={'626 RXR Plaza Uniondale, NY 11556'} 
                className={'text-[11px] md:text-[12px]  text-gray-400'}/>

               <ListItem 
               iconURL={<FaPhone className="text-primary mt-1 mr-3"/>} 
               text={'(800) 500-8117'} 
               className={'text-[11px] md:text-[12px] text-gray-400'}/>

               <ListItem 
               iconURL={<MdOutlineEmail 
               className="text-primary mt-1 mr-3"/>} 
               text={'info@thecredentialing.com'}
               className={'text-[11px] md:text-[12px] text-gray-400'}
               />

                </div>
                <div className="flex items-center gap-2 text-white mt-5">
                <FaFacebook size={20} className="cursor-pointer    "/>
                <FaLinkedin size={20} className="cursor-pointer   "/>
                <FaTwitter size={20} className="cursor-pointe  "/>
                <FaInstagram size={20} className="cursor-pointe "/>
               </div>
            </div>

            
        </div>
        <div className="bg-[#16181B] ">
         <div className="max-w-[1200px] m-auto text-white flex justify-center md:justify-between items-center gap-5 text-xs flex-wrap p-5">
        
            <Image src="/images/logo-white.png" alt="" width={250}/>
           

           
             <p className="text-gray-400">&copy; Copyright 2024. All Rights Reserved.</p>
          

         
            <div className="flex justify-center items-center gap-5 flex-wrap">
                <ListItem iconURL={<FaAngleRight className="mt-[1px]"/>} text={<Link className="hover:text-white text-gray-400" href={'/faqs'}>FAQs</Link>}/>
                <ListItem iconURL={<FaAngleRight className="mt-[1px]"/>} text={<Link className="hover:text-white text-gray-400" href={'/sitemap'}>Sitemap</Link>}/>
                <ListItem iconURL={<FaAngleRight className="mt-[1px]"/>} text={<Link className="hover:text-white text-gray-400" href={'/contact-us'}>Contact Us</Link>}/>
                <ListItem iconURL={<FaAngleRight className="mt-[1px]"/>} text={<Link className="hover:text-white text-gray-400" href={'/privacy-policy'}>Privacy Policy</Link>}/>
                <ListItem iconURL={<FaAngleRight className="mt-[1px]"/>} text={<Link className="hover:text-white text-gray-400" href={'/terms-conditon'}>Terms Condition</Link>}/>
            </div>
          
        </div>    
        </div>
    </footer>
  )
}
