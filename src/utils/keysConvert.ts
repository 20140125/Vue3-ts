import _ from "lodash";

/**
 * 下划线转驼峰
 * @param str
 */
export const camelizeStr = (str: string): string =>
  str.replace(/_(\w|$)/g, (_: string, x: string) => x.toUpperCase());

/**
 * 驼峰转下划线
 * @param str
 */
export const decamelizeStr = (str: string): string =>
  str.replace(/[A-Z]/g, (x: string) => `_${x.toLowerCase()}`).replace(/^_/, "");

/**
 * 字符串
 * @param obj
 */
const typeStr = (obj: string): string => Object.prototype.toString.call(obj);
/**
 * 日期
 * @param obj
 */
const isDate = (obj: AnyObject): boolean => typeStr(obj) === "[object Date]";
/**
 * 对像
 * @param obj
 */
const isObject = (obj: AnyObject): boolean =>
  typeStr(obj) === "[object Object]";
/**
 * 正则
 * @param obj
 */
const isRegex = (obj: AnyObject): boolean => typeStr(obj) === "[object RegExp]";
/**
 * 错误信息
 * @param obj
 */
const isError = (obj: AnyObject): boolean => typeStr(obj) === "[object Error]";

/**
 * 数据转换
 * @param obj
 * @param converter
 */
export const convert = (
  obj: AnyObject,
  converter: (o: AnyObject) => AnyObject
): AnyObject => {
  if (!obj || typeof obj !== "object") return obj;
  if (isDate(obj) || isRegex(obj) || isError(obj)) return obj;
  if (Array.isArray(obj)) {
    return (obj as AnyObject[]).map((it: AnyObject) => convert(it, converter));
  }
  return Object.keys(obj).reduce((acc: AnyObject, key: string) => {
    acc[converter(key)] = convert(obj[key], converter);
    return acc;
  }, {});
};

/**
 * 下划线转驼峰
 * @param obj
 */
export const camelize = (obj: AnyObject): AnyObject =>
  convert(obj, camelizeStr);
/**
 * 驼峰转下划线
 * @param obj
 */
export const decamelize = (obj: AnyObject): AnyObject =>
  convert(obj, decamelizeStr);

/**
 * 驼峰字段带数字转下划线
 * @param obj
 */
export function setNumberBeforeCamelize(obj: AnyObject) {
  obj = _.cloneDeep(obj);
  const regExpNumber = /\d+/g;
  Object.keys(obj).forEach((key: string) => {
    if (isObject(obj[key]) && Object.keys(obj[key]).length > 0) {
      setNumberBeforeCamelize(obj[key]);
    }
    if (Array.isArray(obj[key]) && obj[key].length > 0) {
      obj[key].forEach((item: AnyObject) => {
        if (isObject(item) && Object.keys(item).length > 0) {
          setNumberBeforeCamelize(item);
        }
      });
    }
    if (regExpNumber.test(key)) {
      const num = (regExpNumber.exec(key) || [])[0];
      if (typeof num === "string") {
        obj[key.replace(num, `_${num}`)] = obj[key];
        delete obj[key];
      }
    }
  });
  return obj;
}
