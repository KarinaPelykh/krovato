import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { Card } from "../../../components/ui/Card/Card";

export const ReviewSlider = () => {
  const slides = [1, 2, 3, 4, 5, 6, 7];

  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.review-section",
  });

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
              <Card
                name={t("nameClient")}
                description={t("reviewDescription")}
                product={t("product")}
              />
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
    </div>
  );
};
