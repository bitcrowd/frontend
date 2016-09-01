# eslint-config-bitcrowd

**!! THIS VERSION IS OUTDATED!
PLEASE USE [HTTPS://GITHUB.COM/BITCROWD/JAVASCRIPT](https://github.com/bitcrowd/javascript)
INSTEAD !!**

[![npm version](https://badge.fury.io/js/eslint-config-bitcrowd.svg)](http://badge.fury.io/js/eslint-config-bitcrowd)

This package provides bitcrowd's .eslintrc as an extensible shared config.

It is derived from [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

## Usage

We export three ESLint configurations for your usage.

### eslint-config-bitcrowd

Our default export contains all of our ESLint rules, including ECMAScript 6+
and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`,
and `eslint-plugin-jsx-a11y`.

1. `npm install --save-dev eslint-config-bitcrowd eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint`
2. add `"extends": "bitcrowd"` to your .eslintrc

### eslint-config-bitcrowd/base

Lints ES6+ but does not lint React. Requires eslint and eslint-plugin-import.

1. `npm install --save-dev eslint-config-bitcrowd eslint-plugin-import eslint`
2. add `"extends": "bitcrowd/base"` to your .eslintrc

### eslint-config-bitcrowd/legacy

Lints ES5 and below. Requires `eslint` and `eslint-plugin-import`.

1. `npm install --save-dev eslint-config-bitcrowd eslint-plugin-import eslint`
2. add `"extends": "bitcrowd/legacy"` to your .eslintrc

See [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
and [ESlint shareable configs](http://eslint.org/docs/developer-guide/shareable-configs) for details.
