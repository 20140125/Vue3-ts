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

const reportLog = async (data) => {
  console.log(resp);
};
const eslintLog = readFile("./eslint.log").toString();
const regex = /(\d+) problems \((\d+) errors, (\d+) warnings\)/g;
const replacedString = eslintLog
  .replace(/\r\n\r\n/g, "Eslint")
  .replace(/\r\n/g, "");
for (const item of replacedString.split(/Eslint/)) {
  if (!regex.test(item)) {
    // 上报内容
    const errorLine = item.match(/\d+:\d+/g)?.[0];
    const errorInfo = item
      .slice(item.indexOf(errorLine) + errorLine.toString().length, -1)
      .split(":");
    const data = {
      16: "eslint",
      17: item.match(/mmpay[a-zA-Z]*\b/g)?.[0],
      18: item.slice(0, item.indexOf(errorLine)),
      19: errorLine,
      20: 0,
      21: errorInfo?.[0].trim(),
      22: errorInfo?.[1].trim(),
    };
    if (/error/.test(item)) {
      data[20] = 1;
    } else {
      data[20] = 2;
    }
    console.log(data);
    reportLog(data);
    break;
    // writeFile("./newEslint.log", `${item}\n`);
  }
}
