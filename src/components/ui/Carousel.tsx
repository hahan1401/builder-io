import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import style from "./carousel.style.module.scss";

interface CarouselProps {
  data: any[];
  centerMode?: boolean;
  slidesToShow?: number;
  autoPlay?: boolean;
  responsive?: boolean;
  imageccessorKey?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  data = [],
  autoPlay,
  centerMode = true,
  slidesToShow,
  responsive = true,
}) => {
  const settings: Settings = {
    className: "center",
    centerMode: centerMode,
    infinite: true,
    slidesToShow: slidesToShow ?? 4,
    speed: 500,
    dots: true,
    autoplay: autoPlay,
    accessibility: true,
    ...(responsive
      ? {
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        }
      : {}),
  };
  return (
    <div className={style['carousel-wrapper']}>
      <Slider {...settings} >
        {data.map((item: any) => (
          <div key={item.email} className="relative pt-[100%]">
            <Image src={item.picture.large} fill alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
