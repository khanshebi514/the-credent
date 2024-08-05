
import { Button, Col, Image, Input,} from "antd";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TiLocation, TiSocialLinkedin } from "react-icons/ti";
import {FaAngleRight, FaFacebookF, FaXTwitter} from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";

import ListItem from "@/pages/Home/sections/listItem";

export default function Footer() {
  return (
    <footer className="bg-[#212529] w-full relative">
        
        <div className="max-w-[1200px] m-auto flex flex-col md:flex-row gap-5 md:gap-0 justify-around lg:justify-between items-start py-[80px] px-[20px] text-[.8em]">
        <div className="bg-primary w-[160px] flex justify-center items-center h-[48px] absolute -top-4 left-[30px] md:left-[50px] lg:left-[160px]  font-shadow text-[21.5px] text-white ">Get in Touch</div>
            
            <div className="text-area w-[80vw] sm:w-[70vw] md:w-[33%]">
                <h3 className="font-bold text-white mt-2 text-[1em]">NEWSLETTER</h3>
               <p className=" text-[#777] mt-3 leading-7 text-[14px]">
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
                className={'text-[14px]  text-[#777]'}/>

               <ListItem 
               iconURL={<FaPhone className="text-primary mt-1 mr-3"/>} 
               text={'(800) 500-8117'} 
               className={'text-[14px]  text-[#777]'}/>

               <ListItem
               iconURL={<MdOutlineEmail 
               className="text-primary mt-1 mr-3"/>} 
               text={'info@thecredentialing.com'}
               className={'text-[14px]  text-[#777]'}
               />

                </div>
                <div className="flex items-center gap-2 text-white mt-5">
                <FaFacebookF size={30} className="cursor-pointer bg-white rounded-full text-black w-[30px] h-[30px] p-1"/>
                <TiSocialLinkedin size={30} className="cursor-pointer bg-white rounded-full text-black w-[30px] h-[30px] p-1"/>
                <FaXTwitter size={30} className="cursor-pointe bg-white rounded-full text-black w-[30px] h-[30px] p-1"/>
                <FaInstagram size={30} className="cursor-pointe bg-white rounded-full text-black w-[30px] h-[30px] p-1"/>
               </div>
            </div>

            
        </div>
        <div className="bg-[#16181B] w-full">
         <div className="max-w-[1200px] m-auto text-white flex justify-center md:justify-between items-center gap-3 text-xs flex-wrap p-5 flex-1">
        
            <Image src="/images/logo-white.png" alt="" width={250} style={{opacity:'0.4'}}/>
           

           
             <p className="text-[#777] w-fit ">&copy; Copyright 2024. All Rights Reserved.</p>
 
            <div className="flex justify-center items-center gap-5 text-[11px] flex-wrap sm:flex-nowrap ">
                <ListItem  iconURL={<FaAngleRight className="mt-[2px]"/>} text={<Link className="hover:text-white text-[#777] text-[14px] " href={'/faqs'}>FAQs</Link>}/>
                <ListItem  iconURL={<FaAngleRight className="mt-[2px]"/>} text={<Link className="hover:text-white text-[#777] text-[14px]" href={'/sitemap'}>Blog</Link>}/>
                <ListItem  iconURL={<FaAngleRight className="mt-[2px]"/>} text={<Link className="hover:text-white text-[#777] text-[14px] " href={'/contact-us'}>Sitemap</Link>}/>
                <ListItem  iconURL={<FaAngleRight className="mt-[2px]"/>} text={<Link className="hover:text-white text-[#777] text-[14px] text-nowrap" href={'/privacy-policy '}>Contact Us</Link>}/>
                <ListItem  iconURL={<FaAngleRight className="mt-[2px]"/>} text={<Link className="hover:text-white text-[#777] text-[14px] text-nowrap" href={'/terms-conditon'}>Privacy Policy</Link>}/>
            </div>
          
        </div>    
        </div>
    </footer>
  )
}
