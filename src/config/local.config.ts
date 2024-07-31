const baseConfig = require('./base.config');
const { join } = require('path');

exports.config = {
  ...baseConfig,
  maxInstances: 3,
  capabilities: [
    {
      maxInstances: 3,
      browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
              '--disable-gpu',
            '--window-size=1914,1026'],
            w3c: false
        },
}],
};
