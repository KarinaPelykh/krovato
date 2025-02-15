import { useTranslation } from 'react-i18next'
import { Button, Icon } from '../../../components'
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
            <Button className='tablet:mr-[30px] !w-fit gap-0 whitespace-nowrap'>
              <Icon
                className='mr-[17px]'
                name='add'
              />
              {t('writeReview')}
            </Button>
            <Button className='!bg-transparent !p-0 !w-fit !text-gray whitespace-nowrap'>
              <Icon name='chat' />
              {t('allReviews')}
            </Button>
          </div>
        </div>
        <ReviewSlider />
      </div>
    </section>
  )
}
