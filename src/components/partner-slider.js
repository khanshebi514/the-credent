import Image from "next/image";

export default function PartnerSlider() {
  return (
    <section className="bg-white my-5 py-10">
        <div className="flex justify-center items-center gap-5 animate-pulse">
          <Image src={'/images/MedsDental.png'} alt="meds dental" width={150} height={100}/>
          <Image src={'/images/MedsIT Nexus.png'} alt="meds dental" width={150} height={100}/>
          <Image src={'/images/MedsLab.png'} alt="meds dental" width={150} height={100}/>
          <Image src={'/images/MedsDental.png'} alt="meds dental" width={150} height={100}/>
          <Image src={'/images/MedsIT Nexus.png'} alt="meds dental" width={150} height={100}/>
          <Image src={'/images/MedsLab.png'} alt="meds dental" width={150} height={100}/>
        </div>
    </section>
  )
}
