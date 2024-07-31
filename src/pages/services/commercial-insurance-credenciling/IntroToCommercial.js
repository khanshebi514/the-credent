import SimpleIntro from "@/components/SimpleIntro"
import { COMM_INNSU_CRED } from "@/constants"

export default function IntroToCommercialCred() {
  const{title, description} = COMM_INNSU_CRED.intro
  return (
    <section className="py-[100px] max-w-[1200px] m-auto">
    <div className="mt-10">
      <SimpleIntro title={title} description={description}/>
    </div>

    <div className="w-full mt-[50px] h-[1px] bg-[#7777]"></div>

    </section>
  )
}