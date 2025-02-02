export const ADD_USER_FORM_RULES = {
  name: {
    pattern: /^[a-zA-Z0-9_][a-zA-Z0-9_.-]{0,31}$/,
    max: 32,
  },
  keys: {
    pattern: /^\S{1,254}$/,
    min: 1,
    max: 254,
  },
  categories: {
    pattern: /^[+-][a-z@]{0,253}$/,
    min: 1,
    max: 254,
  },
  commands: {
    pattern: /^[+-][a-z@]{0,253}$/,
    min: 1,
    max: 254,
  },
  channels: {
    pattern: /^\S{1,254}$/,
    min: 1,
    max: 254,
  },
};

export default {
  ADD_USER_FORM_RULES,
};
