import { SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { useTranslation } from 'react-i18next'

import { Card } from '../../../components/ui/Card/Card'
import { Slider } from '../../../components/ui/Slider/Slider'

import './reviews-slider.css'

export const ReviewSlider = () => {
  const slides = [1, 2, 3, 4, 5, 6, 7]

  const { t } = useTranslation('translation', {
    keyPrefix: 'HomePage.review-section'
  })

  return (
    <div className='w-full flex justify-center'>
      <Slider
        sliderClassName='review'
        paginationSetting={{ el: '.swiper-pagination', type: 'progressbar' }}
        modulesConfiguration={[Autoplay, Navigation, Pagination, Scrollbar]}
        breakpoint={{
          320: {
            slidesPerView: 1
          },

          1440: {
            slidesPerView: 3
          }
        }}>
        <ul className='flex justify-center items-center desktop:justify-start'>
          {slides.map(i => (
            <SwiperSlide
              key={i}
              className='pt-3 pl-5 tablet:!flex tablet:justify-center desktop:pl-[30px] desktop:!w-fit
                desktop:!m-0'>
              <Card
                name={t('nameClient')}
                description={t('reviewDescription')}
                product={t('product')}
              />
            </SwiperSlide>
          ))}
        </ul>
        <div
          className='hidden desktop:flex size-[60px] bg-white shadow-sm absolute -bottom-[1px]
            rounded-full z-20 left-[65px]'
        />
        <div className='swiper-pagination'></div>
      </Slider>
    </div>
  )
}
