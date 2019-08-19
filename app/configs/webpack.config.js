const webpack = require("webpack");
const path = require("path");

// Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

// Postcss
const postcssCustomProperties = require("postcss-custom-properties");

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
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [postcssCustomProperties({
                importFrom: './src/index.css',
                preserve: false,
              })]
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: "file-loader"
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/png"
            }
          }
        ]
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
