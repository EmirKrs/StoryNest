import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from 'expo-localization';
import en from "../locales/en/en.json";
import tr from "../locales/tr/tr.json";
import 'intl-pluralrules';

const locales = Localization.getLocales();
const userLanguage = locales[0]?.languageCode || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    tr: { translation: tr },
  },
  lng: userLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;