export default function ListItem({iconURL, text, className}) {
  return <span className="flex items-start gap-2 font-poppins ">{iconURL}<li className="text-wrap">{text}</li></span>
}
