const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  optimization: {
    minimize: false
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, "dist")
  },
  devtool: 'hidden-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader'
      },
      { enforce: "pre", test: /\.js$/, use: ["hidden-source-map-loader"] },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'index.html'
    }),
    new CopyPlugin({patterns: [
      {
        from: 'node_modules/@mp/bundle-sdk',
        to: 'bundle'
      },
      { from: 'assets', to: 'assets'}
    ]}),
  ],
  devServer: {
    host: process.env.HOST || '0.0.0.0',
    port: 80,
    allowedHosts: ['.ondigitalocean.app', '.g-maps.info', '.vercel.app'],
    devMiddleware: {
      writeToDisk: true
    }
  }
}
