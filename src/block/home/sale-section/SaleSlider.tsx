import { SwiperSlide } from 'swiper/react'
import { Slider } from '../../../components/ui/Slider/Slider'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

export const SaleSlider = () => {
  const images = [
    '/sale-slide/akciya-1.png',
    '/sale-slide/akciya-2.png',
    '/sale-slide/akciya-3.png'
  ]

  const slides = new Array(2).fill(images).flat()

  return (
    <div className='reusable-slider'>
      <Slider
        modulesConfiguration={[Pagination, Navigation, Autoplay]}
        breakpoint={{
          320: {
            slidesPerView: 1
          },
          1440: {
            slidesPerView: 3
          }
        }}
        sliderClassName='h-80'>
        {slides.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt='sale'
              className='desktop:w-[410px] desktop:h-[280px] object-contain block'
            />
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  )
}
