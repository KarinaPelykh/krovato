import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import './slider.css'

export const SaleSlider = () => {
  const images = [
    '/sale-slide/akciya-1.png',
    '/sale-slide/akciya-2.png',
    '/sale-slide/akciya-3.png'
  ]

  const slides = new Array(2).fill(images).flat()

  return (
    <>
      <ul className='hidden desktop:flex desktop:gap-[30px]'>
        {slides.slice(0, 3).map((img, i) => (
          <li
            key={i}
            className='flex justify-center'>
            <img
              src={img}
              alt='sale'
              className='w-[410px] h-[280px] object-contain block'
            />
          </li>
        ))}
      </ul>
      <div className='flex desktop:hidden'>
        <Swiper
          className='slider h-80'
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}>
          <ul className='flex'>
            {slides.map((img, i) => (
              <SwiperSlide key={i}>
                <li className='flex justify-center'>
                  <img
                    src={img}
                    alt='sale'
                    className='object-contain block'
                  />
                </li>
              </SwiperSlide>
            ))}
          </ul>
        </Swiper>
      </div>
    </>
  )
}
