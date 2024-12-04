import { useTranslation } from "react-i18next";

export const LanguageButton = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      onChange={handleLanguageChange}
      className="bg-transparent outline-0 cursor-pointer	"
    >
      <option value="uk">{t("HomePage.header.buttonUK")}</option>
      <option value="en">{t("HomePage.header.buttonEG")}</option>
    </select>
  );
};
