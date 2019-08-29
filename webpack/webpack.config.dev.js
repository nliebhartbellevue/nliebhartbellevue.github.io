require("dotenv").config();
const Path = require("path");
const Webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-eval-source-map",
  output: {
    chunkFilename: "[name].chunk.js"
  },
  devServer: {
    inline: true
  },
  plugins: [
    new Webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      GITHUB_CLIENT_ID: JSON.stringify(process.env.GITHUB_CLIENT_ID),
      GITHUB_CLIENT_SECRET: JSON.stringify(process.env.GITHUB_CLIENT_SECRET),
      URL: JSON.stringify(process.env.URL)
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: Path.resolve(__dirname, "../src"),
        enforce: "pre",
        loader: "eslint-loader",
        options: {
          emitWarning: true
        }
      },
      {
        test: /\.(js)$/,
        include: Path.resolve(__dirname, "../src"),
        loader: "babel-loader"
      },
      {
        test: /\.s?css$/i,
        use: ["style-loader", "css-loader?sourceMap=true", "sass-loader"]
      }
    ]
  }
});
