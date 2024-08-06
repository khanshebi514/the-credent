'use client'
import { Carousel } from "antd";
import Image from "next/image";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

export default function PartnerSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay:true,
    centerPadding: "60px",
    speed: 200,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <section className="bg-white my-5 pb-14">
      <div className="max-w-[1200px] m-auto">
      <Slider {...settings} >

        <div>
          <Image src='/images/MedsDental.png' width={150} height={100} alt="slider-image"/>
        </div>

        <div>
          <Image src='/images/MedsIT Nexus.png' width={150} height={100} alt="slider-image"/>
        </div>

        <div>
          <Image src='/images/MedsLab.png' width={150} height={100} alt="slider-image"/>
        </div>

        <div>
          <Image src='/images/MedsDental.png' width={150} height={100} alt="slider-image"/>
        </div>

        <div>
          <Image src='/images/MedsIT Nexus.png' width={150} height={100} alt="slider-image"/>
        </div>

        <div>
          <Image src='/images/MedsLab.png' width={150} height={100} alt="slider-image"/>
        </div>
       </Slider>
      </div>
    </section>
  );
}
