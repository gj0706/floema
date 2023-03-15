// This file is used to merge the common webpack config with the development specific config
const { merge } = require("webpack-merge");

const path = require("path");
const config = require("./webpack.config");

// This is the development specific config
module.exports = merge(config, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
  },
  output: {
    path: path.resolve(__dirname, "public"),
  },
});
