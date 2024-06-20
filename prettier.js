const { readFileSync, writeFileSync } = require("fs-extra");
/**
 * 文件读取
 * @param filename
 * @returns {*}
 */
const readFile = (filename) => {
  try {
    return readFileSync(filename, "utf8");
  } catch (e) {
    console.log(e);
  }
};

/**
 * 文件写入
 * @param filename
 * @param data
 * @returns {*}
 */
const writeFile = (filename, data) => {
  try {
    return writeFileSync(filename, data, { encoding: "utf8", flag: "a+" });
  } catch (e) {
    console.log(e);
  }
};

const prettierLog = readFile("./prettier.log").toString();
prettierLog.split(/[\r\n]/).forEach((item) => {
  if (/SyntaxError/g.test(item)) {
    // 内容上报
    writeFile("./newPrettier.log", `${item}\n`);
  }
});
