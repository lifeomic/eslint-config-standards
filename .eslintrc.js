module.exports = {
  extends: [
    'eslint',
    'plugin:eslint-plugin/recommended',
    'plugin:eslint-plugin-node/recommended'
  ],
  plugins: [
    'eslint-plugin',
    'eslint-plugin-node'
  ],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    strict: 'off',
    semi: ['error', 'never']
  }
}
