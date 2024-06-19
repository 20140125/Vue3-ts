// const exec = require("child_process").exec;
//
// // 运行Prettier格式化文件
// exec("npx prettier --write src/ --list-different", (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Prettier 执行错误: ${error}`);
//     return;
//   }
//   if (stderr) {
//     console.error(`Prettier 标准错误输出: ${stderr}`);
//   }
// });
//
// // 运行ESLint查找错误信息
// exec("npx eslint --ext src/", (error, stdout, stderr) => {
//   if (error) {
//     console.error(`ESLint 执行错误: ${error}`);
//     return;
//   }
//   if (stderr) {
//     console.error(`ESLint 标准错误输出: ${stderr}`);
//   }
// });

const { readFileSync } = require("fs-extra");
const read_file = (filename) => {
  try {
    return readFileSync(filename, "utf8");
  } catch (e) {
    console.log(e);
  }
};
const logTxt = read_file("./eslint.log").toString();
const regex = /(\d+) problems \((\d+) errors, (\d+) warnings\)/g;
console.log(logTxt);
console.log(logTxt.match(regex));

const ERROR_REG = /error/g;
const errorCount = logTxt.match(ERROR_REG).length;
console.log(errorCount);
// 1 Custom elements in iteration require 'v-bind:key' directives  vue/valid-v-for
// 2 'MenuItem' is defined but never used  @typescript-eslint/no-unused-vars
