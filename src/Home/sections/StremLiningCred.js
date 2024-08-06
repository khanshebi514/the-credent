import CredSolCard from "@/components/cred-sol-card";
import { STREAMLINE_CREDENTILING } from "@/constants";

export default function StreamLining() {
  const {title, image, points} = STREAMLINE_CREDENTILING
  const span = {
   'first' :{
      "small": 20,
      "md": 9,
    },
    'second':{
      "small": 20,
      "md": 14,
    }
  };
  return (
  <>
  <CredSolCard title={title} image={image} points={points} display={'space-between'} span={span} order={true}/>
  </>
  )
}



