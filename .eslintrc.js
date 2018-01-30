// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  globals: {
    $: false,
  },
  extends: ['airbnb-base'],
  // required to lint *.vue files
  plugins: ['html'],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js',
      },
    },
  },
  // add your custom rules here
  rules: {
    'dot-notation': 0,
    'no-unused-vars': 0,
    'no-unused-expressions': 0,
    'no-unresolved': 0,
    'global-require': 0,
    'import/no-webpack-loader-syntax': 0,
    'import/no-dynamic-require': 0,
    'object-shorthand': 0,
    'no-plusplus': 0,
    'prefer-template': 0,
    'prefer-const': 0,
    'no-param-reassign': 0,
    'arrow-parens': 0,
    // don't require .vue extension when importing
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never',
      },
    ],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: ['test/unit/index.js'],
      },
    ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
};
