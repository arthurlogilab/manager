import isString from 'lodash/isString';
import isNumber from 'lodash/isNumber';
import isBoolean from 'lodash/isBoolean';
import isNull from 'lodash/isNull';
import isArray from 'lodash/isArray';
import isPlainObject from 'lodash/isPlainObject';
import isEmpty from 'lodash/isEmpty';
import forOwn from 'lodash/forOwn';

export default class {
  $onInit() {
    this.orderDataKeys = this.parameterKeys;
    if (!this.parameterKeys) {
      this.orderDataKeys = Object.keys(
        this.flattenObject(this.orderData, '', {}, false),
      );
    }
  }

  getRequestData() {
    return JSON.stringify(this.orderData, undefined, 4);
  }

  flattenObject(o, prefix = '', resultMerging = {}, keepNull = true) {
    const result = resultMerging;
    if (isString(o) || isNumber(o) || isBoolean(o) || (keepNull && isNull(o))) {
      result[prefix] = o;
      return result;
    }

    if (isArray(o) || isPlainObject(o)) {
      forOwn(o, (value, key) => {
        let pref = prefix;
        if (isArray(o)) {
          pref += `[${key}]`;
        } else {
          pref = isEmpty(prefix) ? key : `${prefix}.${key}`;
        }
        this.flattenObject(value, pref, result, keepNull);
      });
      return result;
    }
    return result;
  }

  static formatKey(key) {
    return key.replaceAll(/\./g, '_');
  }
}
