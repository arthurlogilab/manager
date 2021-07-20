import 'script-loader!jquery'; // eslint-disable-line
import 'whatwg-fetch';
import {
  attach as attachPreloader,
  displayMessage,
} from '@ovh-ux/manager-preloader';
import registerApplication from '@ovh-ux/ufrontend/application';
import { findAvailableLocale, detectUserLocale } from '@ovh-ux/manager-config';

import bootstrapShellApplication from '@ovh-ux/manager-shell';

bootstrapShellApplication({ app: 'telecom' });

attachPreloader(findAvailableLocale(detectUserLocale()));

registerApplication('telecom').then(({ environment }) => {
  environment.setVersion(__VERSION__);

  if (environment.getMessage()) {
    displayMessage(environment.getMessage(), environment.getUserLanguage());
  }

  import(`./config-${environment.getRegion()}`)
    .catch(() => {})
    .then(() => import('./app.module'))
    .then(({ default: startApplication }) => {
      startApplication(document.body, environment);
    });
});
