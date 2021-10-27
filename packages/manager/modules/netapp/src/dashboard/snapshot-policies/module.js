import angular from 'angular';
import '@ovh-ux/manager-core';
import '@ovh-ux/ng-translate-async-loader';
import '@uirouter/angularjs';
import 'angular-translate';

import create from './create';

import component from './component';
import routing from './routing';

const moduleName = 'ovhManagerNetAppSnapshotPolicies';

angular
  .module(moduleName, [
    create,
    'ovhManagerCore',
    'pascalprecht.translate',
    'ui.router',
  ])
  .component('ovhManagerNetAppSnapshotPolicies', component)
  .config(routing)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
