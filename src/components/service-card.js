export default function ServiceCard({title, description}) {
  return (
    <div className="w-[250px] flex justify-center flex-col items-center gap-5 cursor-pointer hover:translate-y-3  hover:border-b-2 border-primary bg-white shadow-lg transition-all py-3 px-5 h-[300px]">
        <h1 className="font-bold text-xl leading-5 font-poppins">{title}</h1>
        <p className="text-sm text-gray-400 font-poppins">{description}</p>
    </div>
  )
}
