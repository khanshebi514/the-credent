import CredSolCard from "@/components/cred-sol-card";
import { HOW_GO_ABOUT_CRED } from "@/constants";

export default function CredMethod() {
  const {title, image, points} = HOW_GO_ABOUT_CRED
  const span = {
    'first':
    {
      "small": 20,
      "md": 12,
    },
   'second': {
      "small": 20,
      "md": 12,
    }
  };

  return (
  <CredSolCard title={title} image={image} points={points} span={span} display={'center'} order={false}/>
  )
}
