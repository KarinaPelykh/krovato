import { useTranslation } from 'react-i18next'
import { InfoSection } from '../../../components/ui/info-section/InfoSection'

export const DeliverySection = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'DeliveryPage.delivery-section'
  })

  return (
    <InfoSection
      title={t('title')}
      subtitle={t('subtitle')}
      description={t('description')}
      bgClassName="top-0 h-[524px] w-full  bg-[url('/delivery-section/bg-delivery-mob.png')] desktop:bg-[url('/delivery-section/bg-delivery-desk.png')]"
    />
  )
}
