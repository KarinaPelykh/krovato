import { useTranslation } from "react-i18next";
import { Icon } from "../../ui";

export const Select = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.header",
  });

  return (
    <div className="h-[50px]  hidden desktop:flex w-full">
      <div className=" flex gap-2.5">
        <Icon className="size-[50px]" name="tel" />

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
