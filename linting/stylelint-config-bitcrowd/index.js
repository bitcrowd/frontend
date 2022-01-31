/* eslint-disable global-require */
module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-prettier',
    'stylelint-config-property-sort-order-smacss',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'at-rule-no-vendor-prefix': true,
    'color-function-notation': null,
    'declaration-block-no-duplicate-properties': true,
    'declaration-no-important': true,
    'max-nesting-depth': 2,
    'media-feature-name-no-vendor-prefix': true,
    'no-descending-specificity': true,
    'no-unknown-animations': true,
    'property-no-vendor-prefix': true,
    'selector-class-pattern': null,
    'selector-max-id': 0,
    'selector-max-type': 0,
    'selector-no-vendor-prefix': true,
    'string-quotes': 'single',
    'value-keyword-case': [
      'lower',
      {
        camelCaseSvgKeywords: true,
      },
    ],
    'value-no-vendor-prefix': true,
    'scss/at-import-partial-extension': 'always',
    'scss/at-rule-no-unknown': true,
    'scss/comment-no-empty': null,
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/dollar-variable-default': null,
    'scss/map-keys-quotes': 'always',
    'scss/no-duplicate-dollar-variables': [
      true,
      {
        ignoreInsideAtRules: ['if', 'each'],
      },
    ],
    'scss/operator-no-newline-after': null,
  },
};
