const webpack = require("webpack");
const path = require("path");

// Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

// Postcss
const postcssCustomProperties = require("postcss-custom-properties");

const config = (_, env) => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: "public/template.html",
      script: "script-[hash].js"
    })
  ];

  if (env.mode === "development") {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return {
    entry: "./src/index.js",
    mode: env.mode,
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
                plugins: () => [
                  postcssCustomProperties({
                    importFrom: "./src/index.css",
                    preserve: false
                  })
                ]
              }
            }
          ]
        },
        {
          test: /\.svg$/,
          use: "file-loader"
        },
        {
          test: /\.(png|jpg)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[path][name].[ext]",
                outputPath: "images"
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx"]
    },
    plugins
  };
};

module.exports = config;
