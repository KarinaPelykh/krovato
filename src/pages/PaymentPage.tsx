import {
  FaqSection,
  OurServicesList,
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
      <OurServicesList />
    </>
  );
};
