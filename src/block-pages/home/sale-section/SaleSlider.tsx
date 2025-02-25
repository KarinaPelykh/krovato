import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import './slider.css'

export const SaleSlider = () => {
  const images = [
    '/sale-slide/akciya-1.png',
    '/sale-slide/akciya-2.png',
    '/sale-slide/akciya-3.png'
  ]

  const slides = new Array(2).fill(images).flat()

  return (
    <div className='sale-slider'>
      <Swiper
        className='slider'
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1
          },
          1440: {
            slidesPerView: 3
          }
        }}>
        <ul className='flex'>
          {slides.map((img, i) => (
            <SwiperSlide key={i}>
              <li className='flex justify-center'>
                <img
                  src={img}
                  alt='sale'
                  className='desktop:w-[410px] desktop:h-[280px] object-contain block'
                />
              </li>
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
    </div>
  )
}
