import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

import { fetchConfiguration, Environment, LANGUAGES } from '@ovh-ux/manager-config';
import { loadLocaleMessages } from '@/i18n';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import '@ovh-ux/ui-kit/dist/css/oui.css';

import App from './App.vue';
import router from './router';
import store from './store';

fetchConfiguration('hub-next').then(() => {
  const locale = Environment.getUserLocale();

  const fallbackLocale = LANGUAGES.fallback;

  const i18n = createI18n({
    locale,
    fallbackLocale,
  });

  router.beforeEach(async (to, from, next) => {
    const translationFolders = [
      'products',
      'payment-status-tile',
      'order-tracking',
      'enterprise-billing-summary',
      'catalog-items',
      'carousel',
      'billing-summary',
      'support',
      'welcome',
    ];
    await loadLocaleMessages(i18n, locale, translationFolders);
    // TODO: also await fallbackMessages
    return next();
  });

  createApp(App)
    .use(store)
    .use(router)
    .use(i18n)
    .mount('#app');
});
