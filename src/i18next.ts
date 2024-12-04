import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import uk from "./locales/uk.json";

i18n.use(initReactI18next).init({
  fallbackLng: "uk",
  lng: "uk", // if you're using a language detector, do not define the lng option
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
