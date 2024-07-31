
import CredSolCard from "@/components/cred-sol-card";
import { WHEN_NEED_CREDENTIALING } from "@/constants";


export default function WhenCredentialing() {
  const {image, points} = WHEN_NEED_CREDENTIALING
  const span = {
   'first': {
      "small": 20,
      "md": 8,
    },
    'second':{
      "small": 20,
      "md": 16,
    }
  };
  return (
  <>
  <CredSolCard image={image} points={points} span={span} display={'start'}  background="#f4f4f4" order={false}/>
  </>
  )
}


