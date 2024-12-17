import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";
import { ReviewList } from "./ReviewList";

export const ReviewSlider = () => {
  const slides = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="w-full  flex justify-center">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          1440: {
            slidesPerView: 3,
            spaceBetween: 130,
          },
        }}
        className="h-[430px]  desktop:h-[410px] slider"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
        modules={[Pagination, Scrollbar]}
      >
        <ul className="flex  ">
          {slides.map((i) => (
            <SwiperSlide
              key={i}
              className="!flex  justify-center desktop:justify-start "
            >
              <ReviewList />
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
    </div>
  );
};
