import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import uk from "./locales/uk.json";

const options = {
  order: ["localStorage", "navigator", "htmlTag"],
  caches: ["localStorage"],
};
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: options,
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: en },
      uk: { translation: uk },
    },
  });

export default i18n;
