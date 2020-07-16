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

isSymmetric([1, 2, 2, 3, 4, 4, 3]);
