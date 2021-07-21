module.exports = {
  overrides: [
    {
      files: [
        'jest.*.js',
        'test/**/*.{ts,tsx,js,jsx}',
        '*.test.{ts,tsx,js,jsx}',
        '__mocks__/**/*.{ts,tsx,js,jsx}'
      ],
      plugins: [
        'jest'
      ],
      extends: [
        'plugin:jest/recommended'
      ],
      env: {
        "jest/globals": true
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2020,
        tsconfigRootDir: '.'
      },
      rules: {

        // Allow ! in tests.
        '@typescript-eslint/no-non-null-assertion': 'off',

        // Allow tests to create odd string templates if they want.
        '@typescript-eslint/restrict-template-expressions': 'off',
        'jest/expect-expect': 'off',
        'jest/no-test-callback': 'off',

        // This rule will often flag test utilities.
        'jest/no-export': 'off',

        // We often need to conditionally call expect(...) in test helpers
        'jest/no-conditional-expect': 'off',

        // The jest recommended config sets this rule to 'warn', so just turn it off
        'jest/no-commented-out-tests': 'off'
      }
    }
  ]
}
