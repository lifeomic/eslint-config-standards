module.exports = {
  extends: [
    './javascript.js'
  ],
  overrides: [
    {
      files: [
        '*.{ts,tsx}'
      ],
      plugins: [
        '@typescript-eslint'
      ],
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2020,
        tsconfigRootDir: '.'
      },
      rules: {

        // BEGIN ERRORS
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/restrict-template-expressions': [
          'error',
          { allowNumber: true, allowBoolean: true }
        ],
        '@typescript-eslint/restrict-plus-operands': [
          'error',
          { checkCompoundAssignments: true }
        ],

        // This prevents declarations like `interface ISomething { ... }`
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'interface',
            format: ['PascalCase'],
            custom: {
              regex: '^I[A-Z]',
              match: false
            }
          }
        ],

        // BEGIN DISABLED. Some of these are disabled just to prevent warnings.
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-empty-function': 'off'
      }
    },
    {
      files: [
        'test/**/*.{ts,tsx,js,jsx}',
        '*.test.{ts,tsx,js,jsx}'
      ],
      plugins: [
        '@typescript-eslint'
      ],
      rules: {

        // Allow ! in tests.
        '@typescript-eslint/no-non-null-assertion': 'off',

        // Allow tests to create odd string templates if they want.
        '@typescript-eslint/restrict-template-expressions': 'off'
      }
    }
  ]
}
