const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./example/",
  output: {
    path: __dirname + "/public",
    filename: "./app.js",
    publicPath: "/"
  },
  devServer: {
    port: 8080,
    contentBase: "./public",
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      modules: __dirname + "/node_modules"
    }
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
        loader: "file-loader"
      }
    ]
  }
};
