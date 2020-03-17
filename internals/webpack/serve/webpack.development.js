const merge = require('webpack-merge');
const build = require('../build/webpack.development');

const PORT = 3000;

module.exports = merge(build, {
  devServer: {
    public: `starwars.localhost:${PORT}`,
    host: '0.0.0.0',
    port: PORT,
    contentBase: 'dist/',
    writeToDisk: true,
    open: true,
  },
});
