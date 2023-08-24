import resources from 'i18n/resources';
import Language from 'i18n/supportedLanguages';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: (typeof resources)[Language.En];
  }
}
