import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Autoplay, Navigation, Thumbs } from 'swiper/modules'
import { Swiper as TypeSwiper } from 'swiper'
import clsx from 'clsx'

export const ProductSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<TypeSwiper | null>(null)

  return (
    <div className='desktop:w-[630px] overflow-hidden desktop:mr-10'>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Autoplay, Navigation, Thumbs]}
        className='mb-[30px]'>
        <ul>
          {[...Array(20)].map((_, i) => (
            <SwiperSlide key={i}>
              <img
                className='desktop:w-[630px] desktop:h-[538px]'
                src='/product-slider/img-main.png'
              />
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
      <Swiper
        onSwiper={swiper => {
          setThumbsSwiper(swiper)
        }}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}>
        <ul>
          {[...Array(10)].map((_, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <img
                  className={clsx(
                    ' size-[50px] desktop:size-[100px] rounded-lg border border-gray-light',
                    isActive && 'border-[3px] border-yellow'
                  )}
                  src='/product-slider/img-main.png'
                />
              )}
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
    </div>
  )
}
