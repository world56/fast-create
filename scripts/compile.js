const fs = require("fs");
const path = require("path");
const fse = require("fs-extra");
const babel = require("@babel/core");
const conf = require("../config/babel");

const styleType = ['css'];
const targetPath = "/lib";
const sourcePath = "/components";
const transitionType = ["ts", "tsx", "js"];
const rootPath = path.join(__dirname, "../", sourcePath);

function toFile(file) {
  let ctx;
  let toPath = file.replace(sourcePath, targetPath);
  const fileClass = toPath.split(".");
  const fileType = fileClass.pop();
  if (transitionType.includes(fileType)) {
    toPath = `${fileClass.join()}.js`;
    ctx = babel.transformFileSync(file, conf).code;
  } else if (styleType.includes(fileType)) {
    ctx = fs.readFileSync(file);
  }
  fse.outputFileSync(toPath, ctx);
}

function filterFile(filePath) {
  const files = fs.readdirSync(filePath);
  files.forEach((file) => {
    const fileDir = path.join(filePath, file);
    fs.stat(fileDir, (error, stats) => {
      if (error) return console.error(error);
      stats.isFile() ? toFile(fileDir) : filterFile(fileDir);
    });
  });
}

filterFile(rootPath);
