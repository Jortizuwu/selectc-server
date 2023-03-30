module.exports = {
  env: {
    node: true,
    // browser: true,
    commonjs: true,
    es2021: true
  },
  // extends: 'airbnb-base',
  extends: 'eslint:recommended',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  // plugins: ['import'],
  globals: {
    var1: 'writeable',
    Var2: 'readonly'
  },
  rules: {
    'comma-dangle': 1,
    'Linebreak-style': 0,
    'no-unused-vars': 0,
    'max-len': 0
  }
  // 'comma-dangle': ['error', 'always'],
}
