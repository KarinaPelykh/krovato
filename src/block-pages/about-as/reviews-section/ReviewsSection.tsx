import { useTranslation } from 'react-i18next'
import {Icon, Link } from '../../../components'
import { ReviewSvgList } from './RevievSvgList'
import { ReviewSlider } from './ReviewSlider'
import { Headings } from '../../../components/ui/Headings'

export const ReviewsSection = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'HomePage.review-section'
  })

  return (
    <section className='bg-[#E9E9E9] overflow-hidden py-17 desktop:py-18'>
      <div className='container desktop:flex'>
        <div className='flex flex-col mb-10 desktop:mr-[55px]'>
          <Headings className='mb-10'>{t('mainTitle')}</Headings>
          <div className='flex mb-10 justify-center desktop:justify-start'>
            <Icon
              className='size-[50px] mr-2.5 tablet:size-20 tablet:mr-[30px]'
              name='ava'
            />
            <div>
              <p className='text-xl mb-10 w-[300px]'>{t('title')}</p>
              <div className='flex gap-2.5'>
                <span className='text-yellow text-ms'>0.5</span>
                <ReviewSvgList className='fill-yellow' />
              </div>
              <p> {t('reviews')}269</p>
            </div>
          </div>
          <div
            className='flex gap-2.5 flex-col items-center tablet:flex-row tablet:justify-center
              desktop:justify-start'>
<Link
              linkClassName='tablet:mr-[30px] !w-fit !bg-yellow py-[13px] px-5 whitespace-nowrap rounded-lg !text-white'
               iconName='add'
              iconClassName='mr-[17px] !size-6'
              to='/reviews'>
              {t('writeReview')}
            </Link>

            <Link
              linkClassName=' !text-gray whitespace-nowrap'
              iconName='chat'
              iconClassName=' !size-6'
              to='/reviews'>
              {t('allReviews')}
            </Link>
          </div>
        </div>
        <ReviewSlider />
      </div>
    </section>
  )
}
