import ListItem from "@/Home/sections/listItem";
import { Button, Col, Image, Input, Row } from "antd";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import {FaAngleRight} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#212529] w-full relative">
        
        <div className="max-w-[1200px] m-auto flex flex-col md:flex-row gap-5 md:gap-0 justify-around lg:justify-between items-start py-[80px] px-[20px] text-[.8em]">
        <div className="bg-primary w-[150px] flex justify-center items-center h-[40px] absolute -top-4 left-[30px] md:left-[50px] lg:left-[90px]  font-shadow text-[23px] text-white ">Get in Touch</div>
            
            <div className="text-area w-[80vw] sm:w-[70vw] md:w-[33%]">
                <h3 className="font-bold text-white mt-2 text-[1em]">NEWSLETTER</h3>
               <p className=" text-gray-500 mt-3 leading-7">
               Discover the world of technology with our most recent credentialing service innovations and regular email updates. Get our newsletter by subscribing now!
               </p>
               <div className="flex justify-center items-center mt-5">
               <Input placeholder="Email address " variant="borderless" className="rounded-l-full py-3 px-3 bg-white outline-none active:bg-slate-500"/>
               <button className="rounded-r-full h-[46px] p-2 bg-white border-l border-gray-200 "><p className="font-bold text-sm">Go!</p></button>
               </div>

               
               
            </div>

            <div className="text-area w-[300px]">
                <h3 className="font-bold text-[11px] md:text-[1em] text-white">CONTACT Us</h3>
                <div className="mt-5 text-white space-y-3 ">
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
        <div className="bg-[#16181B] w-full">
         <div className="max-w-[1200px] m-auto text-white flex justify-center md:justify-between items-center gap-3 text-xs flex-wrap p-5 flex-1">
        
            <Image src="/images/logo-white.png" alt="" width={250}/>
           

           
             <p className="text-gray-400 w-fit">&copy; Copyright 2024. All Rights Reserved.</p>
          

         
            <div className="flex justify-center items-center gap-5 text-[11px]">
                <ListItem iconURL={<FaAngleRight className="mt-[2px]"/>} text={<Link className="hover:text-white text-gray-400" href={'/faqs'}>FAQs</Link>}/>
                <ListItem iconURL={<FaAngleRight className="mt-[2px]"/>} text={<Link className="hover:text-white text-gray-400" href={'/sitemap'}>Blog</Link>}/>
                <ListItem iconURL={<FaAngleRight className="mt-[2px]"/>} text={<Link className="hover:text-white text-gray-400" href={'/contact-us'}>Sitemap</Link>}/>
                <ListItem iconURL={<FaAngleRight className="mt-[2px]"/>} text={<Link className="hover:text-white text-gray-400 text-nowrap" href={'/privacy-policy '}>Contact Us</Link>}/>
                <ListItem iconURL={<FaAngleRight className="mt-[2px]"/>} text={<Link className="hover:text-white text-gray-400 text-nowrap" href={'/terms-conditon'}>Privacy Policy</Link>}/>
            </div>
          
        </div>    
        </div>
    </footer>
  )
}
