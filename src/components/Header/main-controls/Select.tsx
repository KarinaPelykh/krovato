import { useTranslation } from "react-i18next";
import Icons from "/sprite.svg";

export const Select = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.header",
  });

  return (
    <div className="h-[50px] w-[230px]  ">
      <div className=" flex gap-2.5">
        <svg className=" size-[50px] ">
          <use xlinkHref={Icons + "#tel"}></use>
        </svg>
        <div className="hidden  tablet:flex flex-col">
          <span className="inline-block  text-xs">{t("schedule")}</span>
          <a className="text-xl text-dark" href="tel:+067 929-45-45">
            067 929-45-45
          </a>
        </div>
      </div>
    </div>
  );
};
