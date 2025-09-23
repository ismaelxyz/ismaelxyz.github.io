import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/common.json";
import es from "./locales/es/common.json";

// i18next configuration
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "es"],
    interpolation: {
      escapeValue: false, // react already safeguards from xss
    },
    react: {
      useSuspense: false,
    },
    detection: {
      // Prioritize <html lang> so SSR and client render the same language first (avoids hydration mismatch)
      order: [
        "htmlTag",
        "localStorage",
        "cookie",
        "path",
        "subdomain",
        "navigator",
      ],
      caches: ["localStorage"],
    },
  });

export default i18n;
