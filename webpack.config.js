const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = function (env, { mode }) {
  const fullyArmedAndOperational = mode === "production";
  return {
    mode: fullyArmedAndOperational ? "production" : "development",
    devtool: fullyArmedAndOperational ? "source-map" : "inline-source-map",
    entry: {
      app: ["./src/main.ts"],
    },
    output: {
      publicPath: "/",
      filename: "bundle.js",
    },
    resolve: {
      extensions: [".ts", ".js"],
      modules: ["src", "node_modules"],
    },
    devServer: {
      static: "./",
      port: 9000,
      historyApiFallback: true,
      open: true,
      hot: true,
    },
    plugins: [new CleanWebpackPlugin()],
    module: {
      rules: [
        {
          test: /\.ts$/i,
          use: [
            {
              loader: "ts-loader",
            },
          ],
          exclude: /node_modules/,
        },
      ],
    },
  };
};
