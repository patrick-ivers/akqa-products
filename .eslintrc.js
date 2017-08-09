const OFF = 0, WARN = 1, ERROR = 2;

module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
  },
  plugins: [
    'import',
    'jsx-a11y',
    'react',
  ],
  settings: {
    'import/resolver': 'webpack',
  },
  rules: {
    'arrow-parens': [OFF, 'always'],
    'import/prefer-default-export': [OFF, 'always'],
    'import/no-extraneous-dependencies': [ERROR, { devDependencies: true }],
  },
};
