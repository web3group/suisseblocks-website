import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import TranslationEN from './locales/en/translateEN.json';
import TranslationPT from './locales/pt/translatePT.json';
import TranslationSP from './locales/sp/translateSP.json';
import TranslationDE from './locales/de/translateDE.json';
import TranslationDA from './locales/da/translateDA.json';
import TranslationRO from './locales/ro/translateRO.json';
import TranslationCN from './locales/cn/translateCN.json';


// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: TranslationEN
  },
  pt: {
    translation: TranslationPT
  },
  sp: {
    translation: TranslationSP
  },
  de: {
    translation: TranslationDE
  },
  da: {
    translation: TranslationDA
  },
  ro: {
    translation: TranslationRO
  },
    cn: {
        translation: TranslationCN
    },

};


const languages = Object.entries(resources).map(([lang]) => lang);
export const removeLangPrefix = (pathname) => {
  for (let lang of languages) {
    if (pathname.startsWith(`/${lang}` || pathname === `/${lang}`)) {
      return pathname.replace(`/${lang}`, '')
    }
  }
  return pathname;
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lang: 'en',
    fallbackLng: 'en',
    debug: true,

    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json'
    },
    interpolation: {
      escapeValue: false
    },

    order: [
      'path',
      'querystring',
      'cookie',
      'localStorage',
      'sessionStorage',
      'navigator',
      'htmlTag',
      'subdomain'
    ]
  });
export default i18n;
