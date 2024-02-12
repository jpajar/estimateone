// babel.config.js
/**
 * Returns config object to transpile ES6, required to get Jest to work with ES6 JavaScript (ESM)
 * @function
 * @returns {object} returns object to transpile test files from ES6
 */
 module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ]
};
