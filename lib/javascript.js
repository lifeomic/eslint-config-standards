module.exports = {
  extends: [
    'eslint:recommended'
  ],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'work/',
    'coverage/',
    '**/*.bak/'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  plugins: [
    'prefer-arrow',
    'jsdoc'
  ],
  rules: {
    eqeqeq: 'error',
    'no-unused-vars': 'error',
    'no-undef': 'error',
    'no-constant-condition': 'error',
    'no-else-return': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    'prefer-arrow-callback': 'error',
    indent: ['error', 2],
    strict: 'off',
    semi: ['error', 'never'],

    // This rule is similar to `prefer-arrow-callback`, but also enforces
    // the general use of () => { ... } over `function` declarations
    'prefer-arrow/prefer-arrow-functions': 'error',
    'jsdoc/no-bad-blocks': ['error', { preventAllMultiAsteriskBlocks: true }],
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-line-alignment': 'error',
    'jsdoc/check-syntax': 'error',
    'jsdoc/multiline-blocks': 'error',
    'jsdoc/newline-after-description': 'error',
    'jsdoc/require-hyphen-before-param-description': ['error', 'never']
  }
}
