// 将数组扁平化并去除其中重复部分数据，最终得到一个升序且不重复的数组
var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

// 我的答案
const fc = arr => {
  let newArr = [];
  // 递归扁平化
  const arraySplit = arr => {
    arr.forEach(element => {
      if (Array.isArray(element)) {
        arraySplit(element);
      } else {
        newArr.push(element);
      }
    });
  }
  arraySplit(arr);
  // 去重
  newArr = [...new Set(newArr)];
  // 排序
  newArr.sort((a, b) => a - b);
  // 返回结果
  return newArr;
};

// 标准答案
const fc2 = arr => {
  // 扁平化
  let flatArr = arr.flat(4)
  // 去重
  let disArr = Array.from(new Set(flatArr))
  // 排序
  let result = disArr.sort(function(a, b) {
      return a-b
  })
  // 返回结果
  return result
};

// 验证
console.log(fc(arr));
console.log(fc2(arr));

// 收获
// 数组扁平化可以使用 flat() 方法
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
