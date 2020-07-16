/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let arrS = S.split("");
  return arrS.filter((item) => J.includes(item)).length;
};

numJewelsInStones("aA", "aAAbbbb");
