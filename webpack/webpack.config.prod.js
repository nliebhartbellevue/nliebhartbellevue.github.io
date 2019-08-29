require("dotenv").config();
const Path = require("path");
const Webpack = require("webpack");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  stats: "errors-only",
  bail: true,
  output: {
    filename: "js/[name].[chunkhash:8].js",
    chunkFilename: "js/[name].[chunkhash:8].chunk.js"
  },
  plugins: [
    new Webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      GITHUB_CLIENT_ID: JSON.stringify(process.env.GITHUB_CLIENT_ID),
      GITHUB_CLIENT_SECRET: JSON.stringify(process.env.GITHUB_CLIENT_SECRET)
    }),
    new Webpack.optimize.ModuleConcatenationPlugin(),
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.s?css/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  }
});
