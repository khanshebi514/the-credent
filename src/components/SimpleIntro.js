'use client'
import { Button } from "antd"
import { delay, easeInOut, motion, spring, staggerChildren } from "framer-motion"
export default function SimpleIntro({title, description, background='white'}) {

    const container = {
        hidden: { 
            opacity: 0, 
        },
        show: {
          opacity: 1,
          transition: {
            delayChildren:0.5,
            staggerChildren: 0.5,
          }
        }
      }
      
      const item = {
        hidden: { 
            opacity: 0,
             y:30,  
             transition:{
                duration:1,
             }
            },
        show: { 
            opacity: 1,
            y:-30,
            transition:{
                delay:1,
                ease:easeInOut,
                type:spring,
            }

        }
      }
  return (

    <motion.div className="flex justify-between items-start md:items-center flex-col md:flex-row p-5 md:p-0"
    variants={container}
    initial="hidden"
    animate="show"
    >
        <div className="w-full md:w-[80%] mt-10">
        <motion.h1
        variants={item}
        className="text-3xl md:text-4xl font-bold font-poppins"
        >
            {title}
        </motion.h1>

        <motion.p
        variants={item}
        className="text-xl text-[#777] mt-5 tracking-tighter"
        >
            {description}
        </motion.p>
        </div>

        <div className="w-full md:w-[20%] flex md:justify-center md:items-center mt-6">
        <motion.button className="bg-[#212529] hover:bg-[#32383e] text-white py-[0.8rem] px-[1.5rem] rounded-[5px] " variants={item}>
            Learn More
        </motion.button>
        </div> 
    </motion.div>
  )
}
