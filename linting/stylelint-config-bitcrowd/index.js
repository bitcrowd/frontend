/* eslint-disable global-require */
Object.assign = Object.assign || require('object-assign');

module.exports = { extends: 'stylelint-config-standard', ...require('./overrides') };
