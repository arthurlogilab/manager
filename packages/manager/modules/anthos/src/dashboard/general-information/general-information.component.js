import controller from './general-information.controller';
import template from './general-information.html';

export default {
  bindings: {
    serviceName: '<',
    serviceInfo: '<',
    user: '<',
    isCommitmentAvailable: '<',
    tenant: '<',
    hosts: '<',
    storageUsage: '<',
    publicIPs: '<',
    privateIPs: '<',
    displayAlerterMessage: '<',
    goBack: '<',
    goToTenant: '<',
    goToOrderHost: '<',
    goToOrderStorage: '<',
    goToAssignPrivateIp: '<',
    goToOrderPublicIp: '<',
    goToRenameService: '<',
    generalInfoHitTracking: '<',
    trackClick: '<',
    trackingPrefix: '<',
  },
  controller,
  template,
};
