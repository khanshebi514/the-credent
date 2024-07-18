import { Button } from "antd";
export default function button({
  type,
  label,
  className,
  size = "medium",
  ...props
}) {
  return (
    <Button type={type} className={`rounded-md ${className} `} {...props}>
      {label}
    </Button>
  );
}
