import { useTranslation } from "react-i18next";
import { Icon } from "../../../components/ui";

export const PaymentRangeSection = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "PaymentPage.payment-range-section",
  });
  return (
    <section className="pb-[60px] desktop:pb-[70px]  ">
      <div className="container text-center">
        <h2 className="text-black font-semibold text-1xl mb-10">
          {t("title")}
        </h2>
        <ul className="flex flex-col gap-5 desktop:flex-row desktop:items-start">
          <li className=" flex flex-col items-center justify-center text-center">
            <Icon
              isScenery={true}
              name="counter"
              className=" size-[100px] mb-5"
            />
            <h3 className="text-black text-lg font-semibold mb-5">
              {t("subtitle_1")}
            </h3>
            <p>{t("text_1")}</p>
          </li>
          <li className=" flex flex-col items-center justify-center  text-center">
            <Icon
              isScenery={true}
              name="credit-card"
              className=" size-[100px] mb-5"
            />
            <h3 className="text-black text-lg font-semibold  mb-5">
              {t("subtitle_2")}
            </h3>
            <p>{t("text_2")}</p>
          </li>
          <li className=" flex flex-col items-center justify-center  text-center">
            <Icon
              isScenery={true}
              name="receipt"
              className=" size-[100px]  mb-5"
            />
            <h3 className="text-black text-lg font-semibold  mb-5">
              {t("subtitle_3")}
            </h3>
            <p>{t("text_3")}</p>
          </li>
          <li className=" flex flex-col items-center justify-center  text-center">
            <Icon
              isScenery={true}
              name="withdraw-money"
              className=" size-[100px]  mb-5"
            />
            <h3 className="text-black text-lg font-semibold  mb-5">
              {t("subtitle_4")}
            </h3>
            <p>{t("text_4")}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
