const rootConfig = require('../../eslint.config.cjs');

module.exports = [
  ...rootConfig,
  {
    files: ['**/*.ts'],
    // Override or add rules here
    rules: {
      semi: 'warn',
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      'prefer-const': 'error',
    },

  },
];
