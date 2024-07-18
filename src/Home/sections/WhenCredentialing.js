import CredCard from "@/components/cred-card";
import { WHEN_NEED_CREDENTIALING } from "@/constants";

export default function WhenCredentialing() {
  return (
    < CredCard title={WHEN_NEED_CREDENTIALING.title} image={WHEN_NEED_CREDENTIALING.image} point={WHEN_NEED_CREDENTIALING.points} background={'#ABB2B9'}/>
  )
}


