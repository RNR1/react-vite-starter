import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from 'i18n/resources';
import Language from 'i18n/supportedLanguages';

export default i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    postProcess: ['pseudo'],
    resources,
    lng: Language.En,
    fallbackLng: Language.En,
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
