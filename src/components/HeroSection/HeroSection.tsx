import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

interface HeroSectionProps {
  data: any[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ data = [] }) => {
  return (
    <Swiper
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper h-full"
    >
      {data.map((item) => (
        <SwiperSlide className="h-full content-center" key={item.id}>
          {/* <div className="relative pt-[100%]"> */}
          <Image alt="" src={item.image} fill className="object-contain" />
          {/* </div> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSection;
