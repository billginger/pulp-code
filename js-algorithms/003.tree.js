// 实现一个二叉查找树，功能包括节点的插入、查找、排序
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  // 插入
  insert(value) {
    let node = new Node(value);
    if (this.root == null) {
      this.root = node;
    } else {
      insertNode(this.root, node);
    }
  }
  // 中序遍历
  midOrderTraverse(callback) {
    midOrderTraverseNode(this.root, callback);
  }
  // 先序遍历
  preOrderTraverse(callback) {
    preOrderTraverseNode(this.root, callback);
  }
  // 后序遍历
  lastOrderTraverse(callback) {
    lastOrderTraverseNode(this.root, callback);
  }
  // 最小值
  minNodeInTree(node) {
    if (node) {
      while (node && node.left) {
        node = node.left;
      }
      return node.value;
    } else {
      return null;
    }
  }
  // 最大值
  maxNodeInTree(node) {
    if (node) {
      while (node && node.right) {
        node = node.right;
      }
      return node.value;
    } else {
      return null;
    }
  }
  // 查找特定值的节点
  searchNodeInTree(value) {
    return searchNode(this.root, value);
  }
}

function insertNode(node, newNode) {
  if (newNode.value < node.value) {
    if (node.left == null) {
      node.left = newNode;
    } else {
      insertNode(node.left, newNode);
    }
  } else {
    if (node.right == null) {
      node.right = newNode;
    } else {
      insertNode(node.right, newNode);
    }
  }
}

function midOrderTraverseNode(node, callback) {
  if (node !== null) {
    midOrderTraverseNode(node.left, callback);
    callback(node);
    midOrderTraverseNode(node.right, callback);
  }
}

function preOrderTraverseNode(node, callback) {
  if (node !== null) {
    callback(node);
    preOrderTraverseNode(node.left, callback);
    preOrderTraverseNode(node.right, callback);
  }
}

function lastOrderTraverseNode(node, callback) {
  if (node !== null) {
    lastOrderTraverseNode(node.left, callback);
    lastOrderTraverseNode(node.right, callback);
    callback(node);
  }
}

function searchNode(node, value) {
  if (node == null) {
    return null;
  }
  if (value < node.value) {
    return searchNode(node.left, value);
  } else if (value > node.value) {
    return searchNode(node.right, value);
  } else {
    return node;
  }
}

function printBST(node) {
  console.log(node.value);
}

let bst = new BST();
bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);
bst.insert(6);

bst.midOrderTraverse(printBST);
