import { useTranslation } from 'react-i18next'
import { SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import { Link } from '../../../components'
import { Headings } from '../../../components/ui/Headings'
import { Slider } from '../../../components/ui/Slider/Slider'

import { ItemList } from './ItemList'
import { NewsList } from './NewsList'

export const NewsSection = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'HomePage.news-section'
  })

  return (
    <section className='py-17 desktop:py-18'>
      <div className='container overflow-hidden'>
        <div className='desktop:flex mb-10 desktop:gap-[30px] desktop:items-center'>
          <Headings className='mb-[27px] desktop:mb-0'>{t('title')}</Headings>
          <Link
            to='/blog'
            linkClassName='hidden desktop:flex'>
            {t('linkBlog')}
          </Link>
        </div>
        <div className='reusable-slider hidden desktop:flex'>
          <Slider modulesConfiguration={[Navigation, Autoplay]}>
            <ul>
              {[...Array(10)].map((_, i) => (
                <SwiperSlide key={i}>
                  <ItemList id={i} />
                </SwiperSlide>
              ))}
            </ul>
          </Slider>
        </div>
        <div className='desktop:hidden'>
          <NewsList />
        </div>
      </div>
    </section>
  )
}
