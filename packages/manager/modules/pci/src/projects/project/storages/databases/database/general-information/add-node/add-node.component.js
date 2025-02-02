import controller from './add-node.controller';
import template from './add-node.html';

const component = {
  bindings: {
    database: '<',
    goBack: '<',
    onNodeAdd: '<',
    price: '<',
    projectId: '<',
    trackDashboard: '<',
    user: '<',
  },
  template,
  controller,
};

export default component;
