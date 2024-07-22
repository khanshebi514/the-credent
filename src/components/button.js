export default function Button({
  type,
  label,
  className,
  ...props
}) 

{
  return (
    <button type={type} className={`rounded-md ${className} `} {...props}>
      {label}
    </button>
  );
}
