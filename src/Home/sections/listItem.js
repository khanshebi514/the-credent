export default function ListItem({ iconURL, text, className, place='start' }) {
  return (
    <span className={`flex justify-start items-${place} gap-3 w-full`}>
      {iconURL}
      <li className={`text-wrap ${className}`}>{text}</li>
    </span>
  );
}
