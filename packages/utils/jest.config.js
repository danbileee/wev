import baseConfig from '../../jest.config.js';
import pkg from './package.json' assert { type: 'json' };

export default {
  ...baseConfig,
  displayName: {
    name: `${pkg.name}`,
    color: 'blue',
  },
};
