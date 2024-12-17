import { useTranslation } from "react-i18next";
import { Icon } from "../../ui";

export const Form = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.header",
  });
  return (
    <form className="hidden desktop:flex   relative w-fit">
      <input
        placeholder={t("placeholder")}
        className=" outline-none text-base py-2.5 px-[15px] rounded-xs border border-gray-light desktop:w-[421px]"
      />

      <Icon className="absolute top-2.5 right-[15px]  " name="search" />
    </form>
  );
};
