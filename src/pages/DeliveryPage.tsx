import { useTranslation } from 'react-i18next'
import {
  DeliverSaleSection,
  DeliverySection,
  DeliveryInfoSection
} from '../block-pages/delivery'
import { FaqSection, ServicesSection } from '../components'

type ListQuestion = {
  question: string
  answer: string
}

export const DeliveryPage = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'DeliveryPage'
  })

  const list = t('local-delivery.list', {
    returnObjects: true
  }) as string[]

  const deliveryInfoList = t('nationwide-delivery.list', {
    returnObjects: true
  }) as string[]

  const listQuestion = t('deliver-faq-section.list-question', {
    returnObjects: true
  }) as ListQuestion[]

  return (
    <>
      <DeliverySection />
      <DeliveryInfoSection
        title={t('local-delivery.title')}
        list={list}
        description={t('local-delivery.description')}
        text={t('local-delivery.text')}
        text2={t('local-delivery.text_2')}
        text3={t('local-delivery.text_3')}
        images='/delivery-section/map.png'
      />
      <DeliveryInfoSection
        bgClassName='bg-white pt-17 desktop:pt-18'
        title={t('nationwide-delivery.title')}
        list={deliveryInfoList}
        description={t('nationwide-delivery.description')}
        text3={t('nationwide-delivery.text')}
        images='/delivery-section/ua-map.png'
        textClassName='flex'
        info={t('nationwide-delivery.addition-info')}
      />
      <DeliverSaleSection />
      <ServicesSection />
      <FaqSection
        title={t('deliver-faq-section.title')}
        listQuestion={listQuestion}
      />
    </>
  )
}
