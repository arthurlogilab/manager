import controller from './controller';
import template from './template.html';

export default {
  bindings: {
    addSnapshotLink: '<',
    deleteSnapshot: '<',
    editSnapshot: '<',
    serviceName: '<',
    snapshots: '<',
    totalSnapshots: '<',
    volumeId: '<',
    trackClick: '<',
  },
  controller,
  template,
};
