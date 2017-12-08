module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './config/webpack.common.js'
      }
    }
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: ['react'],
  extends: ['airbnb', 'prettier'],
  rules: {
    'no-console': 0,
    'global-require': 0,
    'no-param-reassign': [2, { props: false }],
    'import/no-extraneous-dependencies': 0, // allow import devDependencies
    'react/forbid-prop-types': 0, // allow all types of PropTypes
    'react/jsx-filename-extension': 0 // enfore all .js extension
  }
};
