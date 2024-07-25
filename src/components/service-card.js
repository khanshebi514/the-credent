export default function ServiceCard({title, description}) {
  return (
    <div className="w-[240px] cursor-pointer hover:-translate-y-3 space-y-5 hover:border-b-2 border-primary bg-white card-shadow transition-all p-5 h-[350px]">
        <h1 className="font-bold text-[21px] leading-5 font-poppins my-5 text-[#222]">{title}</h1>
        <p className="text-sm font-poppins leading-6 text-[#777]">{description}</p>
    </div>
  )
}
