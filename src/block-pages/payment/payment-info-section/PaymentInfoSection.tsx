import { useTranslation } from 'react-i18next'
import { InfoSection } from '../../../components/ui/info-section/InfoSection'

export const PaymentInfoSection = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'PaymentPage.paymentInfo-section'
  })

  return (
    <InfoSection
      title={t('title')}
      subtitle={t('subtitle')}
      description={t('description')}
      bgClassName=" top-20 mobile:top-0  w-full min-h-full bg-[url('/payment-section/mob-payment.png')]  desktop:bg-[url('/payment-section/bg-desk-payment.png')] desktop:h-auto"
    />
  )
}
