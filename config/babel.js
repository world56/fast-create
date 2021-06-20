module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        corejs: 3,
        useBuiltIns: "usage",
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    [
      "import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: "css",
      },
    ],
  ],
};
