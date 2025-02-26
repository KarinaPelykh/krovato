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
    <section className='py-17 desktop:py-18 overflow-hidden'>
      <div className='container'>
        <div className='desktop:flex mb-10 desktop:gap-[30px] desktop:items-center'>
          <Headings>{t('title')}</Headings>
          <Link
            to='/blog'
            linkClassName='hidden desktop:flex '>
            {t('linkBlog')}
          </Link>
        </div>
        <div className='reusable-slider hidden desktop:flex'>
          <Slider modulesConfiguration={[Navigation, Autoplay]}>
            <ul className='flex w-full h-fit'>
              {[...Array(10)].map((_, i) => (
                <SwiperSlide key={i}>
                  <ItemList id={i} />
                </SwiperSlide>
              ))}
            </ul>
          </Slider>
        </div>
        <div className='flex flex-col desktop:hidden'>
          <NewsList />
        </div>
      </div>
    </section>
  )
}
