// 判断一个二叉树是不是标准的二叉查找树
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function isValidBST(root) {
  if (!root) {
    // An empty tree is a valid binary search tree
    return true;
  }
  function isSubtreeValid(node, minVal, maxVal) {
    if (!node) {
      // An empty subtree is a valid binary search tree
      return true;
    }
    if (node.value <= minVal || node.value >= maxVal) {
      // The node's value violates the binary search tree property
      return false;
    }
    return isSubtreeValid(node.left, minVal, node.value) && isSubtreeValid(node.right, node.value, maxVal);
  }
  
  // Check if the entire tree is a valid binary search tree
  return isSubtreeValid(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}

// Example binary tree that is a valid binary search tree
const root1 = new Node(4,
  new Node(2,
    new Node(1),
    new Node(3)
  ),
  new Node(6,
    new Node(5),
    new Node(7)
  )
);
console.log(isValidBST(root1)); // true

// Example binary tree that is not a valid binary search tree
const root2 = new Node(5,
  new Node(1),
  new Node(4,
    new Node(3),
    new Node(6)
  )
);
console.log(isValidBST(root2)); //false
