import { useTranslation } from "react-i18next";
import { Icon } from "./ui";
import { useState } from "react";
import clsx from "clsx";

export const LanguageSelect = () => {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const [isUA, setIsUA] = useState<string | undefined>(
    i18n.language === "uk" ? "UA" : "EN"
  );

  const handleCloseModal = () => setIsOpen(false);

  const handleLanguageChange = (e?: any) => {
    const value = (e.target as HTMLButtonElement).dataset.value;

    i18n.changeLanguage(value === "UA" ? "uk" : "en");

    setIsUA(value);
  };

  return (
    <div className="relative cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex">
        {isUA === "UA"
          ? t("HomePage.header.buttonUK")
          : t("HomePage.header.buttonEG")}
        <Icon className="fill-gray rotate-180" name="select" />
      </div>

      {isOpen && (
        <div
          onClick={handleLanguageChange}
          className="py-2.5  h-[76px] px-1.5 absolute top-0 left-0 bg-white rounded-xs  cursor-pointer justify-center  shadow-1xl	flex flex-col gap-2.5  "
        >
          <button
            className={clsx(
              "flex justify-start text-ms",
              isUA === "UA" ? "text-yellow" : "text-black"
            )}
            data-value="UA"
            onClick={handleCloseModal}
          >
            {t("HomePage.header.buttonUK")}
            <Icon
              className={clsx(
                "fill-gray rotate-180 hidden",
                isUA === "UA" && "!flex"
              )}
              name="select"
            />
          </button>
          <button
            className={clsx(
              "flex text-ms justify-start",
              isUA === "EN" ? "text-yellow" : "text-black"
            )}
            data-value="EN"
            onClick={handleCloseModal}
          >
            {t("HomePage.header.buttonEG")}

            <Icon
              className={clsx(
                "fill-gray rotate-180 hidden",
                isUA === "EN" && "!flex"
              )}
              name="select"
            />
          </button>
        </div>
      )}
    </div>
  );
};
