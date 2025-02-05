import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
export const ProductSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-[630px] overflow-hidden desktop:mr-10">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mb-[30px]"
      >
        <ul>
          {[1, 2, 3, 4, 5].map(() => (
            <SwiperSlide>
              <img
                className="w-[630px] h-[538px]"
                src="/product-slider/img-main.png"
              />
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        <ul>
          {[1, 2, 3, 4, 5].map(() => (
            <SwiperSlide>
              <img
                className="size-[100px] rounded-lg"
                src="/product-slider/img-main.png"
              />
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
    </div>
  );
};
