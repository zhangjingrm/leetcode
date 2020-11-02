/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const { length } = root;
  const n = Math.sqrt(length + 1);
  console.log(n);
};

// isSymmetric([1, 2, 2, 3, 4, 4, 3]);


/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
};

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root === null) {
    return root;
  }
  const Q = [root];
  while (Q.length > 0) {
    const size = Q.length;
    for (i = 0; i < size; i++) {
      const node = Q.shift();
      if (i < size - 1) {
        node.next = Q[0];
      }
      if (node.left !== null) {
        Q.push(node.left);
      }
      if (node.right !== null) {
        Q.push(node.right);
      }
    }
  }
  console.log(root)
  return root;
};

var root1 = {
  "$id": "1",
  "left": {
    "$id": "2",
    "left": {
      "$id": "3",
      "left": null,
      "next": null,
      "right": null,
      "val": 4
    },
    "next": null,
    "right": {
      "$id": "4",
      "left": null,
      "next": null,
      "right": null,
      "val": 5
    },
    "val": 2
  },
  "next": null,
  "right": {
    "$id": "5",
    "left": {
      "$id": "6",
      "left": null,
      "next": {

      },
      "right": null,
      "val": 6
    },
    "next": null,
    "right": {
      "$id": "7",
      "left": null,
      "next": null,
      "right": null,
      "val": 7
    },
    "val": 3
  },
  "val": 1
}
// connect(root1)

/**
 * 121. 买卖股票的最佳时机
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const { length } = prices;
  if (length < 2) {
    return 0;
  }

  let min = prices[0];
  let result = 0;
  for (let i = 1; i < length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      result = Math.max(result, prices[i] - min);
    }
  }
  console.log(result);
  return result;
};
// maxProfit([7, 6, 4, 3, 1, 13]);


// ****************************************************************************
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 129. 求根到叶子节点数字之和
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  let sum = 0;
  const addStr = (parent, node) => {
    if (parent) {
      node.val = parseInt(`${parent}0`) + node.val;
    }
    if (node.left) {
      addStr(node.val, node.left);
    }
    if (node.right) {
      addStr(node.val, node.right);
    }
    if (!node.left && !node.right) {
      sum += parseInt(node.val);
    }
  }

  addStr(null, root);
  return sum;
};
let root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: {
        val: 8,
        left: {
          val: 16,
        },
        right: null
      },
      right: {
        val: 9,
      }
    },
    right: {
      val: 5,
      left: {
        val: 10,
      },
      right: {
        val: 11,
      }
    }
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: {
        val: 12,
      },
      right: {
        val: 13,
      }
    },
    right: {
      val: 7,
      left: {
        val: 14,
      },
      right: {
        val: 15,
      }
    }
  }
}
sumNumbers(root);
// ****************************************************************************

