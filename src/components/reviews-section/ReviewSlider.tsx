import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { ReviewItem } from "./ReviewItem";

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
        className="h-[430px]  desktop:h-[430px] slider"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
        modules={[Autoplay, Pagination, Scrollbar]}
      >
        <ul className="flex  justify-center items-center desktop:justify-start ">
          {slides.map((i) => (
            <SwiperSlide
              key={i}
              className="pt-3 pl-5 tablet:!flex  tablet:justify-center desktop:pl-[30px]    desktop:!w-fit   desktop:!m-0 "
            >
              <ReviewItem />
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
    </div>
  );
};
