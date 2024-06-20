const { readFileSync } = require("fs-extra");

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
 * 日志上报
 * @param data
 */
const reportLog = (data) => {
  console.log(data);
};

// 方法执行
const eslintLog = readFile("./eslint.log").toString();
const regex = /(\d+) problems \((\d+) errors, (\d+) warnings\)/g;
const replacedString = eslintLog
  .replace(/\n\n|\r\n\r\n/g, "Eslint")
  .replace(/\n|\r\n/g, "");
for (const item of replacedString.split(/Eslint/)) {
  if (!regex.test(item)) {
    // 上报内容
    const errorLine = item.match(/\d+:\d+/g)[0];
    const errorInfo = item
      .slice(item.indexOf(errorLine) + errorLine.toString().length, -1)
      .split(":");
    /**
     * 16: 检验方式 (check_type)
     * 17: 项目名称 (project)
     * 18: 文件路径 (file_path)
     * 19: 错误行数 (error_line)
     * 20: 错误级别 (error_level)
     * 21: 错误类型 (error_type)
     * 22: 错误信息 (error_detail)
     */
    const data = {
      16: "eslint",
      17: item.match(/mmpay[a-zA-Z]*\b/g)[0],
      18: item.slice(0, item.indexOf(errorLine)).trim(),
      19: errorLine,
      20: 0,
      21: item.match(/[a-zA-Z]*\b error/g)[0].trim(),
      22: errorInfo[1].trim(),
    };
    if (/error/.test(item)) {
      data[20] = 1;
    } else {
      data[20] = 2;
    }
    reportLog(data);
  }
}
