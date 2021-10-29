import controller from './order-command.controller';
import template from './order-command.html';
import './order-command.scss';

export default {
  transclude: true,
  bindings: {
    orderApiUrl: '<',
    orderData: '<',
    parameterKeys: '<',
    helpLink: '<',
    autoHeight: '<',
  },
  controller,
  template,
};
