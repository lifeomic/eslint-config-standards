This repo contains [ESLint configurations](https://eslint.org/docs/developer-guide/shareable-configs) to help enforce code standards at LifeOmic.

## Usage

```
yarn add -D @lifeomic/eslint-config-standards
```

```javascript
// eslintrc.js
module.exports = {
  extends: ['@lifeomic/standards'],
  ...
}
```

## Configurations
This package provides a handful of configurations:

- [`@lifeomic/standards`](index.js)
- [`@lifeomic/standards/lib/lavascript`](lib/javascript.js)
- [`@lifeomic/standards/lib/typescript`](lib/typescript.js)
- [`@lifeomic/standards/lib/jest`](lib/jest.js)
