import {
  PaymentDeliveryList,
  PaymentInfoSection,
  PaymentRangeSection
} from '../block-pages/payment'
import { FaqSection } from '../components'

export const PaymentPage = () => (
  <>
    <PaymentInfoSection />
    <PaymentRangeSection />
    <PaymentDeliveryList />
    <FaqSection />
  </>
)
