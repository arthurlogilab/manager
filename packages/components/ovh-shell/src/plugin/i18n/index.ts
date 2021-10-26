import { Environment, LANGUAGES } from '@ovh-ux/manager-config';
import { KeyPairName } from '@ovh-ux/manager-config/types/locale';

export function i18n(environment: Environment) {
  let callbacks = {
    onLocaleChange: <Function>null,
  };

  return {
    getLocale: (): string => environment.getUserLocale(),
    setLocale: (locale: string): void => {
      console.log('plugin i18n setLocale');
      environment.setUserLocale(locale);
      callbacks?.onLocaleChange && callbacks.onLocaleChange(locale);
    },
    getAvailableLocales: (): Array<KeyPairName> => LANGUAGES.available,
    onLocaleChange: (onLocaleChangeCallback: Function): void => {
      console.log('plugin onLocaleChange');
      callbacks.onLocaleChange = onLocaleChangeCallback;
    },
  };
}

export default i18n;
