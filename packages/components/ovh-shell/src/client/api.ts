import ShellClient from './shell-client';

export default function exposeApi(shell: ShellClient) {
  return {
    i18n: {
      getLocale: () =>
        shell.invokePluginMethod({
          plugin: 'i18n',
          method: 'getLocale',
        }),
      getAvailableLocales: () =>
        shell.invokePluginMethod({
          plugin: 'i18n',
          method: 'getAvailableLocales',
        }),
      onLocaleChange: () =>
        shell.invokePluginMethod({
          plugin: 'i18n',
          method: 'onLocaleChange',
        }),
    },
    routing: {
      init: () =>
        window.addEventListener('hashchange', () => {
          if (window.parent !== window.self) {
            shell.invokePluginMethod({
              plugin: 'routing',
              method: 'onHashChange',
              args: [
                {
                  hash: window.location.hash,
                  path: window.location.pathname,
                },
              ],
            });
          }
        }),
    },
  };
}
