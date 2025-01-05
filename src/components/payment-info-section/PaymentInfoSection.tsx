import { useTranslation } from "react-i18next";

export const PaymentInfoSection = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "PaymentPage.paymentInfo-section",
  });
  return (
    <section className="pb-[60px] desktop:pb-[70px]  ">
      <div className="container text-center  z-10  h-[524px] relative desktop:flex desktop:text-start desktop:h-[454px]">
        <div className="desktop:w-[450px] desktop:my-auto">
          <h1 className="text-black text-1xl font-semibold mb-[30px]">
            {t("title")}
          </h1>
          <p className="text-black text-xl font-semibold mb-5">
            {t("subtitle")}
          </p>
          <p className="text-black">{t("description")}</p>
        </div>

        <div className="absolute top-20 mobile:top-0 left-0 object-center -z-10 w-full min-h-full bg-[url('/payment-section/mob-payment.png')] bg-contain  bg-no-repeat desktop:bg-[url('/payment-section/bg-desk-payment.png')] desktop:h-auto"></div>
      </div>
    </section>
  );
};
