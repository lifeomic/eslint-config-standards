module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  extends: [
    './lib/typescript',
    './lib/javascript',
    './lib/jest',
  ],
};
