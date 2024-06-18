/**
 * 判断某个对象是否存在于某个数组内
 * @param item
 * @param items
 */
export const checkObjectExistsInArray = (item: AnyObject, items: AnyArray) => {
  return JSON.stringify(items).indexOf(JSON.stringify(item));
};
