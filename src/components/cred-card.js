
import Image from "next/image";
import { FaCaretRight } from "react-icons/fa";

export default function CredCard({image, title, point, background='white'}) {
    point.forEach((element)=>console.log(element))
  return (
    <section className={`flex justify-evenly items-center py-[50px] md:py-[100px] flex-col md:flex-row max-w-[1280px] m-auto`}
    style={{background:background}}
    >
    <div className="w-full md:w-[300px] flex justify-center items-center">
        <Image src={image} alt="back image" width={300} height={300}/>
    </div>
    <div className="space-y-3 w-full md:w-[500px] md:text-start py-2 px-5">
        {title ? <h1 className="text-[25px] md:text-[35px] text-[#222] font-bold my-3">{title}</h1> :<h1 className="text-[25px] md:text-[35px] text-[#222] my-3"><span className="font-bold">When Do</span> You need Credentialing Services</h1> }

        {/* {point.forEach(element =>
         <span className="flex items-center gap-2"><FaCaretRight className="text-primary"/> <li className="text-gray-500 text-lg">{element}</li> </span> 
        )} */}

<span className="flex items-center gap-2"><FaCaretRight className="text-primary"/> <li className="text-gray-500 text-lg">{point[0]}</li> </span>
<span className="flex items-center gap-2"><FaCaretRight className="text-primary"/> <li className="text-gray-500 text-lg">{point[1]}</li> </span>
<span className="flex items-center gap-2"><FaCaretRight className="text-primary"/> <li className="text-gray-500 text-lg">{point[2]}</li> </span>
<span className="flex items-center gap-2"><FaCaretRight className="text-primary"/> <li className="text-gray-500 text-lg">{point[3]}</li> </span>
<span className="flex items-center gap-2"><FaCaretRight className="text-primary"/> <li className="text-gray-500 text-lg">{point[4]}</li> </span>
{point[5] && <span className="flex items-center gap-2"><FaCaretRight className="text-primary"/> <li className="text-gray-500 text-lg">{point[5]}</li> </span>}

{point[6] && <span className="flex items-center gap-2"><FaCaretRight className="text-primary"/> <li className="text-gray-500 text-lg">{point[6]}</li> </span>}

    </div>
</section>
  )
}
