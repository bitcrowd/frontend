Object.assign = Object.assign || require('object-assign');
module.exports = Object.assign({ extends: 'airbnb/base' }, require('./overrides'));
