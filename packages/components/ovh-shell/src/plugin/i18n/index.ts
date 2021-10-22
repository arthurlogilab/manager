import { Environment, LANGUAGES } from '@ovh-ux/manager-config';
import { KeyPairName } from '@ovh-ux/manager-config/types/locale';

export function i18n(environment: Environment) {
  let callbacks = {
    onLocaleChange: <Function>null,
  };

  return {
    getLocale: (): string => environment.getUserLocale(),
    setLocale: (locale: string): void => {
      console.log('setLocale');
      environment.setUserLocale(locale);
      callbacks?.onLocaleChange && callbacks.onLocaleChange(locale);
    },
    getAvailableLocales: (): Array<KeyPairName> => LANGUAGES.available,
    onLocaleChange: (onLocaleChangeCallback: Function): void => {
      callbacks.onLocaleChange = onLocaleChangeCallback;
    },
  };
}

export default i18n;
