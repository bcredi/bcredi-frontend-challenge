const webpack = require("webpack");
const path = require("path");

// Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    filename: "script-[hash].js"
  },
  devServer: {
    contentBase: path.join(__dirname, "..", "dist"),
    compress: true,
    port: 9000
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/template.html",
      script: "script-[hash].js"
    }),
    new BundleAnalyzerPlugin()
  ]
};

module.exports = config;
