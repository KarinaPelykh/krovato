import { useTranslation } from "react-i18next";
import { Icon } from "../ui";

export const PaymentDeliveryList = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "PaymentPage.payment-delivery-list",
  });
  return (
    <section className="bg-white py-[60px]  desktop:py-[70px]">
      <div className="container">
        <ul className=" flex flex-col gap-[30px]">
          <li className="flex flex-col items-center gap-5 desktop:flex-row">
            <Icon name="map" className="size-[100px] " isScenery={true} />
            <div className="text-center desktop:text-start">
              <h3 className="text-black font-semibold text-lg mb-2.5">
                {t("subtitle_1")}
              </h3>
              <p className="text-black desktop:w-[1170px]">{t("text_1")}</p>
            </div>
          </li>
          <li className="flex flex-col items-center gap-5  desktop:flex-row">
            <Icon
              name="allocation"
              className="size-[100px] "
              isScenery={true}
            />
            <div className="text-center desktop:text-start">
              <h3 className="text-black font-semibold text-lg mb-2.5">
                {t("subtitle_2")}
              </h3>
              <p className="text-black desktop:w-[1170px]">{t("text_2")}</p>
            </div>
          </li>
          <li className="flex flex-col items-center   gap-5 desktop:flex-row">
            <Icon
              name="success-payment"
              className="size-[100px] "
              isScenery={true}
            />
            <div className="text-center desktop:text-start">
              <h3 className="text-black font-semibold text-lg mb-2.5">
                {t("subtitle_3")}
              </h3>
              <p className="text-black desktop:w-[1170px]">{t("text_3")}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
