import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import ShoppingButton from "../ui/ShoppingButton";

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
          <Image alt="" src={item.image} fill className="object-contain" />
          <div className="absolute bottom-20 md:bottom-auto md:left-32 md:max-w-48">
            <p className="text-lg mb-4">{item.title}</p>
            <ShoppingButton title={`$${item.price}`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSection;
