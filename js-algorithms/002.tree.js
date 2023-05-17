// 对二叉树分别进行深度优先遍历和广度优先遍历
const tree = {
  val: 'a',
  children: [{
    val: 'b',
    children: [{
      val: 'd',
      children: []
    }, {
      val: 'e',
      children: []
    }]
  }, {
    val: 'c',
    children: [{
      val: 'f',
      children: []
    }, {
      val: 'g',
      children: []
    }]
  }]
}

// 深度优先遍历
const fc = tree => {
  let arr = [];
  const add = node => {
    arr.push(node.val);
    node.children.forEach(add);
  }
  add(tree);
  return arr;
}

// 广度优先遍历
const fc2 = tree => {
  let arr = [];
  let arrTemp = [tree];
  while(arrTemp.length > 0) {
    const node = arrTemp.shift();
    arr.push(node.val);
    node.children.forEach(element => {
      arrTemp.push(element);
    });
  }
  return arr;
}

// 验证
console.log(fc(tree));
console.log(fc2(tree));
