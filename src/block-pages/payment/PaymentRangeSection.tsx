import { useTranslation } from 'react-i18next'
import { Icon } from '../../components'
import { Headings } from '../../components/ui/Headings'

export const PaymentRangeSection = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'PaymentPage.payment-range-section'
  })

  return (
    <section className='pb-17 desktop:pb-18'>
      <div className='container text-center'>
        <Headings className='mb-10'>{t('title')}</Headings>
        <ul className='flex flex-col gap-5 desktop:flex-row desktop:items-start'>
          <li className='flex flex-col items-center justify-center text-center'>
            <Icon
              isScenery={true}
              name='counter'
              className='size-[100px] mb-5'
            />
            <Headings
              as='h3'
              className='text-lg mb-5'>
              {t('subtitle_1')}
            </Headings>
            <p>{t('text_1')}</p>
          </li>
          <li className='flex flex-col items-center justify-center text-center'>
            <Icon
              isScenery={true}
              name='credit-card'
              className='size-[100px] mb-5'
            />
            <Headings
              as='h3'
              className='text-lg mb-5'>
              {t('subtitle_2')}
            </Headings>
            <p>{t('text_2')}</p>
          </li>
          <li className='flex flex-col items-center justify-center text-center'>
            <Icon
              isScenery={true}
              name='receipt'
              className='size-[100px] mb-5'
            />
            <Headings
              as='h3'
              className='text-lg mb-5'>
              {t('subtitle_3')}
            </Headings>
            <p>{t('text_3')}</p>
          </li>
          <li className='flex flex-col items-center justify-center text-center'>
            <Icon
              isScenery={true}
              name='withdraw-money'
              className='size-[100px] mb-5'
            />
            <Headings
              as='h3'
              className='text-lg mb-5'>
              {t('subtitle_4')}
            </Headings>
            <p>{t('text_4')}</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
