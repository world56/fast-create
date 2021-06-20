const path = require("path");

function rootPath(file) {
  return path.resolve(__dirname, file);
}

function resolve(moduleName) {
  return require.resolve(moduleName);
}

module.exports = {
  rootPath,
  resolve,
};
