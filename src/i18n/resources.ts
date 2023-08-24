import common from 'i18n/en/common.json';
import errorBoundary from 'screens/ErrorBoundary/i18n/en.json';

import home from 'screens/Home/i18n/en.json';

import Language from 'i18n/supportedLanguages';

const resources = {
  [Language.En]: {
    common,
    'error-boundary': errorBoundary,
    home,
  },
} as const;

export default resources;
