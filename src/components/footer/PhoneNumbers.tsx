import { useTranslation } from "react-i18next";
import { Icon } from "../ui";

export const PhoneNumbers = () => {
  const { t } = useTranslation("translation", { keyPrefix: "HomePage.footer" });

  return (
    <div className="mb-[30px] desktop:mb-0   desktop:flex desktop:gap-[15px]">
      <Icon name="tel-footer" className="size-[50px] hidden desktop:flex" />
      <div className="flex flex-col gap-2.5">
        <a
          className="text-xl font-semibold text-white"
          href="tel: +38 067 929-45-45"
        >
          +38 067 929-45-45
        </a>
        <a
          className="text-xl font-semibold text-white"
          href="tel:  +38 050 133-45-45"
        >
          +38 050 133-45-45
        </a>
        <a
          className="text-xl font-semibold text-white"
          href="tel:  +38 093 170-75-45"
        >
          +38 093 170-75-45
        </a>
        <span className="text-yellow text-xl font-semibold ">
          {t("askForCall")}
        </span>
      </div>
    </div>
  );
};
