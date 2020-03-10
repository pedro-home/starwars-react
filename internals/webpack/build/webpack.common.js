const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BannerPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const __root = process.cwd();
const pkg = require(`${__root}/package.json`);

const BANNER_METADATA = [
  '/*!',
  ` * ${pkg.name} - ${pkg.description}`,
  ` * @version v${pkg.version}`,
  ` * @link ${pkg.homepage}`,
  ` * @license ${pkg.license}`,
  ' */',
].join('\n');

module.exports = {
  entry: {
    app: `${__root}/app/index`,
  },
  output: {
    path: `${__root}/dist`,
    filename: '[name].js',
    publicPath: '/',
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['sass-loader'],
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        enforce: 'post',
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(eot|otf|ttf|woff2?|jpe?g|png|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'media',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new BannerPlugin({
      banner: BANNER_METADATA,
      raw: true,
      entryOnly: true,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html',
      favicon: `${__root}/public/favicon.ico`,
    }),
  ],
};
