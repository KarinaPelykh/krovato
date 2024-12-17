import { useTranslation } from "react-i18next";
import { Button, Icon } from "../ui";

export const PopularGoodItem = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.popular-goods-section",
  });

  return (
    <li className="p-5 bg-white h-[488px] rounded-xs boxShadow-custom">
      <img
        src="/sofa.png"
        alt="furniture"
        className="w-[370px] h-[220px]  desktop:w-full desktop:h-[220px]  rounded-xs mb-5"
      />
      <p className=" mb-2.5 text-m desktop:text-xs">{t("size")}</p>
      <p className="mb-2.5 text-black text-xl">{t("subTitle")}</p>
      <p className="mb-2.5  flex gap-[5px]">
        <Icon className="" name="check" />
        {t("isAvailable")}
      </p>
      <div className=" flex items-center justify-between">
        <p className="flex flex-col text-xl text-black">
          <span className="inline-block text-red text-m line-through desktop:hidden">
            {t("costsWithoutSale")}
          </span>
          {t("costs")}
        </p>
        <div className="flex gap-2.5">
          <Button>
            <Icon className="size-[70px]" name="obrane" />
          </Button>

          <Button>
            <Icon className="size-[70px]" name="korzina" />
          </Button>
        </div>
      </div>
    </li>
  );
};
