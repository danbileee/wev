const baseConfig = require('../../jest.config.js');
const pkg = require('./package.json');

module.exports = {
  ...baseConfig,
  displayName: {
    name: `${pkg.name}`,
    color: 'blue',
  },
};
