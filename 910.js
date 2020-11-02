/**
 * 914. 卡牌分组
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  /**
   * 求a和b的最大公约数
   * @param {*} a
   * @param {*} b
   */
  let gcd = function (a, b) {
    if (a % b === 0) return b;
    return gcd(b, a % b);
  };

  let { length } = deck;
  if (length < 2) {
    return false;
  }
  let maps = new Map();
  deck.forEach((item) => {
    maps.set(item, maps.has(item) ? maps.get(item) + 1 : 1);
  });
  let timeAry = [...maps.values()];

  let g = timeAry[0];
  timeAry.forEach((time) => {
    g = gcd(g, time);
  });
  // console.log(g);
  return g >= 2;
};
hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3]);
