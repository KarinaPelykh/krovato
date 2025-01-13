import {
  FaqSection,
  PaymentDeliveryList,
  PaymentInfoSection,
  PaymentRangeSection,
} from "../components";

export const PaymentPage = () => {
  return (
    <>
      <PaymentInfoSection />
      <PaymentRangeSection />
      <PaymentDeliveryList />
      <FaqSection />
    </>
  );
};
