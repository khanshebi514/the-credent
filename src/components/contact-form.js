
import { Button, Form, Select, Input } from "antd";

import { SPECIOAL_OPTIONS } from "@/constants"; 
import './contact-form.css'

export default function ContactForm() {
  return (
    <Form className="bg-primary px-2 py-10 rounded-md w-[300px] sm:w-[360px] md:w-[400px] lg:w-[450px] xl:w-[500px]">
            <div className="flex justify-center items-center flex-col">
              <h2 className="text-[1.8em] font-bold text-white">Get in Touch</h2>
              <p className="font-poppins text-xs text-gray-400 my-5 text-wrap p-2 text-center">
                Lets Start Talking About getting You Credentialed
              </p>

              <div className="flex flex-col gap-3 w-[100%]">
                <div className="flex justify-around items-center gap-2 md:gap-5 flex-col lg:flex-row w-[90%] m-auto">
                  <Input
                    type="text"
                    placeholder="Your Name ..."
                    name="name"
                    size="large"
                    className="rounded-[5px] w-full"
                    
                  />
                  <Input type="phone" placeholder="Phone" name="phone" size="large"
                  className="rounded-[5px] w-full"/>
                </div>

                <div className="flex justify-around items-center gap-2 md:gap-5 flex-col md:flex-row w-[90%] m-auto">
                  <Input type="email" placeholder="Your Email" name="email" size="large" className="w-full rounded-[5px]"/>

                <select className="w-full p-2 h-[40px] rounded-[5px] outline-none border-none ">
                <option value='select'>--Select Speciality--</option>
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
                <Button className="border-none rounded-[5px] bg-[#222] hover:bg-[#333] h-12 text-white w-[90%] m-auto">
                  Submit
                </Button>
              </div>
            </div>
          </Form>
  )
}
