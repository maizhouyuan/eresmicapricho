import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./en.json";
import translationZH from "./zh.json";
import translationES from "./es.json";
import translationJP from "./jp.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: translationEN },
      zh: { translation: translationZH },
      es: { translation: translationES },
      jp: { translation: translationJP }
    },
  });

export default i18n;
