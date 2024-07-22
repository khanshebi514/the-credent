export default function ServiceCard({title, description}) {
  return (
    <div className="w-[240px] cursor-pointer hover:translate-y-3 space-y-3 hover:border-b-2 border-primary bg-white shadow-lg transition-all p-5 h-[350px]">
        <h1 className="font-bold text-xl leading-5 font-poppins mb-5">{title}</h1>
        <p className="text-sm text-gray-400 font-poppins leading-6">{description}</p>
    </div>
  )
}
