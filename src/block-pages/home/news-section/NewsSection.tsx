import { useTranslation } from 'react-i18next'
import { Link } from '../../../components'
import { Headings } from '../../../components/ui/Headings'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { NewCard } from '../../../components/ui/NewCard'
import '../sale-section/slider.css'
import { NewsList } from './NewsList'
export const NewsSection = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'HomePage.news-section'
  })
  const list = [1, 2, 3, , 4, 5, 6, 7, 8, 9, 10]
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
        <div className='sale-slider h-[410px] hidden desktop:flex'>
          <Swiper
            className='slider'
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            pagination={{ clickable: true }}
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            navigation={true}>
            <ul className='flex'>
              {list.map(i => (
                <SwiperSlide key={i}>
                  <Link
                    key={i}
                    to='/'
                    iconClassName='hidden'>
                    <NewCard />
                  </Link>
                </SwiperSlide>
              ))}
            </ul>
          </Swiper>

          {/* <Slider
            slidesPerView={3}
            data={list}
            paginationSetting={{ clickable: true }}
            modulesConfiguration={[Navigation, Autoplay]}>
            <Link
              to='/'
              iconClassName='hidden'>
              <NewCard />
            </Link>
          </Slider> */}
        </div>
        <div className='flex flex-col desktop:hidden'>
          <NewsList />
        </div>
      </div>
    </section>
  )
}
