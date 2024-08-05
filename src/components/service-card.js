export default function ServiceCard({title, description}) {
  return (
    <div className="w-[280px] md:w-[280px] lg:w-[220px] xl:w-[280px] cursor-pointer hover:-translate-y-3 space-y-5 hover:border-b-[6px] border-primary bg-white card-shadow transition-all duration-500 px-8 py-6 h-[350px] lg:h-[400px] xl:h-[420px] rounded">
        <h1 className="font-bold text-[18px] xl:text-[23px] leading-6 font-poppins my-4 text-[#222]">{title}</h1>
        <p className="text-[14px] md:text-[16px] font-poppins leading-5 xl:leading-7 text-[#777]">{description}</p>
    </div>
  )
}
