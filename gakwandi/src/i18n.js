import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN
    },
    fr: {
      translation: translationFR
    }
  },
  lng: 'en', // Default language is set to English
  fallbackLng: 'en', // Fallback language if the translation isn't found
  interpolation: {
    escapeValue: false // React already escapes values by default
  }
});

export default i18n;
