
import { Button, Form, Select, Input } from "antd";

import { SPECIOAL_OPTIONS } from "@/constants"; 
import './contact-form.css'

export default function ContactForm() {
  return (
    <Form className="bg-primary px-2 py-10 rounded-md">
            <div className="flex justify-center items-center flex-col">
              <h2 className="info-text text-white">Get in Touch</h2>
              <p className="font-poppins text-xs text-gray-400 my-5 text-wrap p-2 text-center">
                Lets Start Talking About getting You Credentialed
              </p>

              <div className="flex flex-col gap-2 w-[100%]">
                <div className="flex justify-around items-center gap-2 md:gap-5 flex-col md:flex-row w-[90%] m-auto">
                  <Input
                    type="text"
                    placeholder="Your Name ..."
                    name="name"
                    size="large"
                    className="rounded-[5px]"
                    
                  />
                  <Input type="phone" placeholder="Phone" name="phone" size="large"
                  className="rounded-[5px]"/>
                </div>

                <div className="flex justify-around items-center gap-2 md:gap-5 flex-col md:flex-row w-[90%] m-auto">
                  <Input type="email" placeholder="Your Email" name="email" size="large" className="w-full rounded-[5px]"/>

                  <Select
                    defaultValue="Select Speciallity"
                    size="large"
                    className="w-full rounded-[5px]"
                    style={{borderRadius:'5px'}}
                    options={ SPECIOAL_OPTIONS}
                  />
                </div>
                <textarea
                  className="rounded-[5px] font-poppins px-5 py-2 h-32 outline-none w-[90%] m-auto"
                  placeholder="Message"
                />
                <Button className="border-none rounded-[5px] bg-[#222] hover:bg-[#333] h-10 text-white w-[90%] m-auto">
                  Submit
                </Button>
              </div>
            </div>
          </Form>
  )
}
