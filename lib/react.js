module.exports = {
  extends: [
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react-hooks', 'react-compiler'],
  rules: {
    'react-hooks/exhaustive-deps': 'error',
    'react-compiler/react-compiler': 'error',
  },
};
