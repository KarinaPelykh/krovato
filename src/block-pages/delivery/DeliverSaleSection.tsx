import { useTranslation } from 'react-i18next'
import { Icon } from '../../components/ui'
import { Headings } from '../../components/ui/Headings'

export const DeliverSaleSection = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'DeliveryPage.delivery-sale-section'
  })

  const list = t('list-sale', {
    returnObjects: true
  }) as string[]

  return (
    <section className='py-17 desktop:py-18'>
      <div className='container'>
        <Headings
          as='h2'
          className='mb-10 text-center'>
          {t('title')}
        </Headings>
        <ul className='flex flex-col gap-[30px] desktop:flex-row mb-10'>
          {list.map((text, i) => (
            <li
              className='flex gap-5 desktop:text-center desktop:flex-col desktop:justify-center
                desktop:items-center'
              key={i}>
              <Icon
                name='sale-icon'
                className='size-[70px]'
              />
              <p className='text-xl font-semibold w-full'>{text}</p>
            </li>
          ))}
        </ul>
        <p className='text-center'>{t('detail')}</p>
      </div>
    </section>
  )
}
