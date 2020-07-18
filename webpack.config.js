const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const dfxJson = require("./dfx.json");
const aliases = require("./webpack.aliases");

const isDevelopment = process.env.NODE_ENV === "development";

/**
 * Generate a webpack configuration for a canister.
 */
function generateWebpackConfigForCanister(name, info) {
  if (typeof info.frontend !== "object") {
    return;
  }

  const inputRoot = __dirname;

  return {
    mode: isDevelopment ? "development" : "production",
    entry: {
      index: path.join(inputRoot, info.frontend.entrypoint),
    },
    devtool: isDevelopment ? "cheap-module-source-map" : "source-map",
    optimization: {
      minimize: !isDevelopment,
      minimizer: [new TerserPlugin()],
    },
    resolve: {
      alias: aliases,
      extensions: [".tsx", ".ts", ".js"],
    },
    output: {
      filename: "[name].js",
      path: path.join(__dirname, info.frontend.output),
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            { loader: "css-loader", options: { importLoaders: 1 } },
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss",
                plugins: [require("tailwindcss"), require("autoprefixer")],
              },
            },
          ],
        },
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
          loader: "url-loader",
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin()],
    devServer: {
      proxy: {
        "/api": `http://${dfxJson.networks.local.bind}`,
      },
    },
  };
}

// If you have additional webpack configurations you want to build
//  as part of this configuration, add them to the section below.
module.exports = [
  ...Object.entries(dfxJson.canisters)
    .map(([name, info]) => {
      return generateWebpackConfigForCanister(name, info);
    })
    .filter((x) => !!x),
];
