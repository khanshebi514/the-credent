export default function ServiceCard({title, description}) {
  return (
    <div className="w-[300px] cursor-pointer hover:-translate-y-3 space-y-5 hover:border-b-[6px] border-primary bg-white card-shadow transition-all p-10 h-[450px]">
        <h1 className="font-bold text-[21px] leading-5 font-poppins my-5 text-[#222]">{title}</h1>
        <p className="text-[16px] font-poppins leading-7 text-[#777]">{description}</p>
    </div>
  )
}
