export default function ListItem({ iconURL, text, className }) {
  return (
    <div className="flex justify-start items-center gap-3 font-poppins ">
      {iconURL}
      <li className={`text-wrap ${className}`}>{text}</li>
    </div>
  );
}
