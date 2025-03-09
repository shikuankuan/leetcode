const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:8080", // 注意这里的URL要与devServer.host和devServer.port相匹配
    "webpack/hot/only-dev-server",
    "./src/index.js",
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    environment: {
      module: false, // 确保设置为 true 以支持 ES 模块
    },
  },
  experiments: {
    outputModule: false, // 对于较新的 Webpack 版本，可能需要这个选项来启用 ES Modules 支持
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  mode: "development",
  devServer: {
    hot: true, // 启用热更新
    // port: 8080, // 指定端口号
  },
  // target:'web'
};
