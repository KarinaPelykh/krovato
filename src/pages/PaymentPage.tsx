import { FaqSection } from "../components/faq-section/FaqSection";
import { OurServicesList } from "../components/our-advantages-section/OurServicesList";
import { PaymentInfoSection } from "../components/payment-info-section/PaymentInfoSection";
import { PaymentRangeSection } from "../components/payment-range-section/PaymentRangeSection";

export const PaymentPage = () => {
  return (
    <>
      <PaymentInfoSection />
      <PaymentRangeSection />
      <FaqSection />
      <OurServicesList />
    </>
  );
};
