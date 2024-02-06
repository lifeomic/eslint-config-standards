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
    'simple-import-sort',
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
    'jsdoc/require-hyphen-before-param-description': ['error', 'never'],
    'jsdoc/tag-lines': [
      'error',
      'any',
      {
        startLines: 1,
      },
    ],

    indent: ['error', 2, {
      SwitchCase: 1,
    }],

    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // React related packages come first.
          ['^react', '^@?\\w'],
          // Internal packages.
          ['^(@|components)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.?(css)$'],
        ],
      },
    ],
  },
};
