import { useTranslation } from 'react-i18next'
import { Icon } from '../../components'
import { Headings } from '../../components/ui/Headings'

export const PaymentDeliveryList = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'PaymentPage.payment-delivery-list'
  })

  return (
    <section className='bg-white py-17 desktop:py-18'>
      <div className='container'>
        <ul className='flex flex-col gap-[30px]'>
          <li className='flex flex-col items-center gap-5 desktop:flex-row'>
            <Icon
              name='map'
              className='size-[100px]'
              isScenery={true}
            />
            <div className='text-center desktop:text-start'>
              <Headings
                as='h3'
                className='text-lg mb-2.5'>
                {t('subtitle_1')}
              </Headings>
              <p className='desktop:w-[1170px]'>{t('text_1')}</p>
            </div>
          </li>
          <li className='flex flex-col items-center gap-5 desktop:flex-row'>
            <Icon
              name='allocation'
              className='size-[100px]'
              isScenery={true}
            />
            <div className='text-center desktop:text-start'>
              <Headings
                as='h3'
                className='text-lg mb-2.5'>
                {t('subtitle_2')}
              </Headings>
              <p className='desktop:w-[1170px]'>{t('text_2')}</p>
            </div>
          </li>
          <li className='flex flex-col items-center gap-5 desktop:flex-row'>
            <Icon
              name='success-payment'
              className='size-[100px]'
              isScenery={true}
            />
            <div className='text-center desktop:text-start'>
              <Headings
                as='h3'
                className='text-lg mb-2.5'>
                {t('subtitle_3')}
              </Headings>
              <p className='desktop:w-[1170px]'>{t('text_3')}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
