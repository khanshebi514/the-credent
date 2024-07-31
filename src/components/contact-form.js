
import { Button, Form, Select, Input } from "antd";

import { SPECIOAL_OPTIONS } from "@/constants"; 
import './contact-form.css'

export default function ContactForm() {
  return (
    <Form className="bg-primary px-5 py-14 rounded-md w-[80vw] sm:w-[80vw] md:w-[60vw] lg:w-[600px]">
            <div className="flex justify-center items-center flex-col pb-5">
              <h2 className="text-[1.8rem] font-[600] text-white">Get 
                In Touch</h2>
              <p className="text-[16px] font-poppins text-[#fff] mb-5 text-wrap p-2 text-center font-[300] opacity-[0.7]">
                Lets start talking about getting you credentialed
              </p>

              <div className="flex flex-col gap-3 w-[100%]">
                <div className="flex justify-around items-center gap-2 md:gap-5 flex-col lg:flex-row w-[90%] m-auto">
                  <Input
                    type="text"
                    placeholder="Your Name ..."
                    name="name"
                    size="large"
                    className="rounded-[5px] w-full py-3"
                    
                  />
                  <Input type="phone" placeholder="Your Phone ..." name="phone" size="large"
                  className="rounded-[5px] w-full py-3"/>
                </div>

                <div className="flex justify-around items-center gap-2 md:gap-5 flex-col md:flex-row w-[90%] m-auto">
                  <Input type="email" placeholder="Your Email ..." name="email" size="large" className="w-full rounded-[5px] py-3"/>

                <select className="w-full p-2 h-[50px] rounded-[5px] outline-none border-none font-poppins py-3">
                <option value='select' className="p-3 font-poppins">Select Speciality</option>
                  <option value={SPECIOAL_OPTIONS[0].value}>{SPECIOAL_OPTIONS[0].label}</option>
                  <option value={SPECIOAL_OPTIONS[1].value}>{SPECIOAL_OPTIONS[1].label}</option>
                  <option value={SPECIOAL_OPTIONS[2].value}>{SPECIOAL_OPTIONS[2].label}</option>
                  <option value={SPECIOAL_OPTIONS[3].value}>{SPECIOAL_OPTIONS[3].label}</option>
                  <option value={SPECIOAL_OPTIONS[4].value}>{SPECIOAL_OPTIONS[4].label}</option>
                  
                </select>
                </div>
                <textarea
                  className="rounded-[5px] font-poppins px-5 py-2 h-32 outline-none w-[90%] m-auto"
                  placeholder="Message"
                />
                <button className="border-none rounded-[5px] bg-[#212529] hover:bg-[#32383e] h-14 font-semibold text-[0.8rem] text-white w-[90%] m-auto mt-3">
                  SUBMIT
                </button>
              </div>
            </div>
          </Form>
  )
}
