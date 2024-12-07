import { useTranslation } from "react-i18next";
import Icons from "/sprite.svg";

export const Form = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.header",
  });
  return (
    <form className="relative w-fit">
      <input
        placeholder={t("placeholder")}
        className=" outline-none text-base py-2.5 px-[15px] rounded-xs border border-gray-light desktop:w-[421px]"
      />
      <svg className="absolute top-2.5 right-[15px]  size-6 ">
        <use xlinkHref={Icons + "#search"}></use>
      </svg>
    </form>
  );
};
