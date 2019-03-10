const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    inline: true,
    hot: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: [path.join(__dirname, "src"), "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(j|t)sx?$/,
        use: "react-hot-loader/webpack",
        include: /node_modules/
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
}
