module.exports = {
  extends: [
    'eslint:recommended',
  ],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'work/',
    'coverage/',
    '**/*.bak/',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: [
    'prefer-arrow',
    'jsdoc',
  ],
  rules: {
    eqeqeq: 'error',
    'no-unused-vars': 'error',
    'no-undef': 'error',
    'no-constant-condition': 'error',
    'no-else-return': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    'prefer-arrow-callback': 'error',
    strict: 'off',
    'no-trailing-spaces': 'error',
    'no-tabs': 'error',
    'arrow-parens': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-spread': 'error',
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': 'error',
    'dot-notation': 'error',
    'dot-location': ['error', 'property'],
    'no-multi-str': 'error',
    'no-multi-spaces': ['error', {
      ignoreEOLComments: true,
      exceptions: {
        VariableDeclarator: true,
        ImportDeclaration: true,
      },
    }],
    'require-await': 'error',
    'no-sequences': 'error',
    'wrap-iife': ['error', 'any'],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'lodash',
            message:
              "Please use `import [package] from 'lodash/[package]'` instead.",
          },
        ],
        patterns: ['!lodash/*'],
      },
    ],

    // This rule is similar to `prefer-arrow-callback`, but also enforces
    // the general use of () => { ... } over `function` declarations
    'prefer-arrow/prefer-arrow-functions': 'error',
    'jsdoc/no-bad-blocks': ['error', { preventAllMultiAsteriskBlocks: true }],
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-line-alignment': 'error',
    'jsdoc/check-syntax': 'error',
    'jsdoc/multiline-blocks': 'error',
    'jsdoc/newline-after-description': 'error',
    'jsdoc/require-hyphen-before-param-description': ['error', 'never'],

    indent: ['error', 2, {
      SwitchCase: 1,
    }],
  },
};
