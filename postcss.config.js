const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');

let plugins = [postcssPresetEnv()];
if (process.env.NODE_ENV === 'production') {
  plugins = [...plugins, cssnano({ preset: 'default' })];
}

module.exports = {
  plugins,
};
