
## Migrating from [`@lifeomic/typescript-tools`](https://github.com/lifeomic/typescript-tools)

If you are migrating from `@lifeomic/typescript-tools`, you may need to make some or all of these changes:

- Install and extend [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier), to prevent conflicting behavior between `prettier` and ESLint.
  ```
  yarn add -D eslint-config-prettier
  ```
  ```javascript
  // .eslintrc.js
  module.exports = {
    extends: [
      '@lifeomic/standards',
      'prettier' // <-- this
    ],
    // ...
  }
  ```