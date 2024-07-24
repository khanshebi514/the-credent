import CredCard from "@/components/cred-card";
import { STREAMLINE_CREDENTILING, HOW_GO_ABOUT_CRED } from "@/constants";

export default function StremLiningCred() {
  return  (
  <div className="">
    <CredCard title={STREAMLINE_CREDENTILING.title} point={STREAMLINE_CREDENTILING.points} image={STREAMLINE_CREDENTILING.image}/>
    <CredCard title={HOW_GO_ABOUT_CRED.title} point={HOW_GO_ABOUT_CRED.points} image={HOW_GO_ABOUT_CRED.image}/>
  </div>
  

  
)}
