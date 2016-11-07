Object.assign = Object.assign || require('object-assign'); // eslint-disable-line global-require
module.exports = Object.assign({ extends: 'stylelint-config-standard' }, require('./overrides'));
