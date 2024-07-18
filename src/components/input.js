import { Input } from 'antd';

export default function input({type, placeholder, className, name, ...props}) {
  return (
   <Input type={type} placeholder={placeholder} name={name} className={`px-5 py-2 outline-none rounded-md ${className}`} {...props}/>
  )
}
