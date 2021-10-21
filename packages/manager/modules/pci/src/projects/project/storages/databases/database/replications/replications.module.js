import angular from 'angular';

import '@ovh-ux/ng-ovh-cloud-universe-components';
import '@ovh-ux/ui-kit';

import component from './replications.component';
import routing from './replications.routing';

const moduleName = 'ovhManagerPciStoragesDatabasesReplications';

angular
  .module(moduleName, ['ngOvhCloudUniverseComponents', 'oui'])
  .config(routing)
  .component('ovhManagerPciStoragesDatabaseReplicationsComponent', component)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
