import { useTranslation } from "react-i18next";
import { Icon } from "../../ui";

export const Select = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.header",
  });

  return (
    <div className="w-[230px]  hidden desktop:flex ">
      <div className="flex gap-2.5">
        <Icon className="size-[50px]" name="tel" />

        <div className="flex items-center">
          <div>
            <span className="block text-xs">{t("schedule")}</span>
            <a className="text-xl text-dark" href="tel:+067 929-45-45">
              067 929-45-45
            </a>
          </div>

          <Icon className="size-6" name="select" />
        </div>
      </div>
    </div>
  );
};
