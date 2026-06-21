import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { COMPANY } from "../data/company";
import en from "./locales/en";
import hr from "./locales/hr";

export const SUPPORTED_LANGUAGES = ["en", "hr"] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hr: { translation: hr },
    },
    fallbackLng: "en",
    supportedLngs: SUPPORTED_LANGUAGES as unknown as string[],
    interpolation: {
      escapeValue: false,
      defaultVariables: {
        company: COMPANY.name,
      },
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "language",
    },
  });

export default i18n;
