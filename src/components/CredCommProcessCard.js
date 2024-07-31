import Image from "next/image";
import { FaCaretRight } from "react-icons/fa";

export default function CredCommProcessCard({ data, order }) {
  const { image, title, points,} = data;
  return (
    <div className="max-w-[1200px] m-auto py-[70px]">
      <div
        className={`grid grid-cols-1 ${!order ? 'md:grid-cols-[30%_1fr]' : 'md:grid-cols-[1fr_30%]'} justify-items-start place-items-center gap-[50px]`}
      >
        <div className={`${order ? 'order-last' : "order-first"}`}>
          <Image src={image} alt="web image" width={400} height={400} />
        </div>

        <div className={` ${order ? 'order-first' : "order-last"}`}>
          <h1 className="text-[28px] text-[#222] mb-5 ml-2 font-bold my-5">
            {title}
          </h1>

          <div className="flex justify-between items-start gap-[100px] mt-5">
           <ul className="left space-y-4 ">
           <li className="text-lg font-[400] flex justify-start items-center gap-2 text-[#777]">
                <span>
                  <FaCaretRight size={18} className="text-primary" />
                </span>
                {points['1']}
              </li>

              <li className="text-lg font-[400] flex justify-start items-center gap-2 text-[#777]">
                <span>
                  <FaCaretRight size={18} className="text-primary" />
                </span>
                {points['3']}
              </li>

              <li className="text-lg font-[400] flex justify-start items-center gap-2 text-[#777]">
            
                <span>
                  <FaCaretRight size={18} className="text-primary" />
                </span>
                {points['5']}
              </li>
           </ul>
           <ul className="right space-y-4 ">
           <li className="text-lg font-[400] flex justify-start items-center gap-2 text-[#777]">
              
                <span>
                  <FaCaretRight size={18} className="text-primary" />
                </span>
                {points['2']}
              </li>

              <li className="text-lg font-[400] flex justify-start items-center gap-2 text-[#777]">
              
                <span>
                  <FaCaretRight size={18} className="text-primary" />
                </span>
                {points['4']}
              </li>
              {
                points['6'] && <li className="text-lg font-[400] flex justify-start items-start gap-2 text-[#777]">
               
                <span>
                  <FaCaretRight size={18} className="text-primary" />
                </span>
                {points['6']}
              </li>
              }
              
           </ul>
          </div>
        </div>
      </div>

      
    </div>
  );
}
