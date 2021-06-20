// const { initBabel } = require("./babel");
const { rootPath, resolve } = require("./utils");
// const ESLintPlugin = require("eslint-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

// console.log('@resolve("./tsconfig.json")',resolve("./tsconfig.json"))

const conf = {
  mode: process.env.NODE_ENV,
  entry: "../component/index",
  output: {
    filename: "[name].js",
    path: rootPath("../lib"),
    libraryTarget: 'umd'
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: ["node_modules"],
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(tsx|ts)$/,
            include: rootPath("../component"),
            use: [
              {
                loader: "babel-loader",
                options: {
                  // babelrc: true,
                  cacheDirectory: true,
                  presets: [
                    "@babel/preset-env",
                    "@babel/preset-react",
                    "@babel/preset-typescript",
                  ],
                },
              },
              // {
              //   loader: "ts-loader",
              //   options: {
              //     transpileOnly: true,
              //     configFile: resolve("./tsconfig.json"),
              //   },
              // },
            ],
          },
          {
            test: /\.css$/,
            use: [
              "style-loader",
              "css-loader",
              {
                loader: "postcss-loader",
                options: {
                  postcssOptions: {
                    plugins: ["postcss-preset-env"],
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  },
  externals: {
    React: {
      commonjs: "React",
      commonjs2: "React",
    },
  },
  plugins: [
    // new ForkTsCheckerWebpackPlugin({
    //   async: false,
    //   // eslint: {
    //   //   files: "../component/**/*.{ts,tsx,js,jsx}",
    //   // },
    // }),
    // new ESLintPlugin({
    //   // Plugin options
    //   extensions: ["js", "mjs", "jsx", "ts", "tsx"],
    //   formatter: require.resolve("react-dev-utils/eslintFormatter"),
    //   eslintPath: require.resolve("eslint"),
    //   context: paths.appSrc,
    //   cache: true,
    //   // ESLint class options
    //   cwd: paths.appPath,
    //   resolvePluginsRelativeTo: __dirname,
    //   baseConfig: {
    //     extends: [require.resolve("eslint-config-react-app/base")],
    //     rules: {
    //       ...(!hasJsxRuntime && {
    //         "react/react-in-jsx-scope": "error",
    //       }),
    //     },
    //   },
    // }),
  ],
};
module.exports = conf;
