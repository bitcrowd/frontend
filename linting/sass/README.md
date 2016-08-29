# Sass linting

We use [scss-lint](https://github.com/brigade/scss-lint) and [sass-lint](https://www.npmjs.com/package/sass-lint) to ensure Sass code-consistency.

## Files
* [.scss-lint.yml](.scss-lint.yml)
* [.sass-lint.yml](.sass-lint.yml)

## Installation
A copy of one of these files should be placed in your projects root directory.

Make any changes to your copied file, such as specifying where to find Sass files, or project-specific overrides.

## Modifications
The `scss` and `sass` versions of these files should be kept in sync. To ensure this, changes should be initially made in [.scss-lint.yml](.scss-lint.yml), and then ported to [.sass-lint.yml](.sass-lint.yml). Details on how to do this are inside the [scss config file](.scss-lint.yml).
