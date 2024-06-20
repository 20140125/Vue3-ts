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
const errorRegRex = /[a-zA-Z]+Error/g;
const lineRegRex = /\(\d+:\d+\)/g;
const prettierLog = readFile("./prettier.log").toString();
for (const item of prettierLog.split(/[\r\n]/)) {
  if (errorRegRex.test(item)) {
    const errorType = item.match(errorRegRex)[0];
    const errorLine = item.match(lineRegRex)[0];
    const errorInfo = item.split(": " + errorType + ":");
    /**
     * 16: 检验方式 (check_type)
     * 17: 项目名称 (project)
     * 18: 文件路径 (file_path)
     * 19: 错误行数 (error_line)
     * 20: 错误级别 (error_level)
     * 21: 错误类型 (error_type).
     * 22: 错误信息 (error_detail)
     */
    const data = {
      16: "prettier",
      17: "",
      18: "",
      19: errorLine,
      20: 0,
      21: errorType,
      22: errorInfo[1].replace(lineRegRex, "").trim(),
    };
    if (/\[error\]/g.test(item)) {
      data[18] = errorInfo[0].replace(/\[error\]/g, "").trim();
      data[20] = 1;
    } else if (/\[warning\]/g.test(item)) {
      data[18] = errorInfo[0].replace(/\[warning\]/g, "").trim();
      data[20] = 2;
    }
    reportLog(data);
  }
}
