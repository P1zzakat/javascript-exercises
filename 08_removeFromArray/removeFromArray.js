const removeFromArray = function (arr) {
  const args = [...arguments].slice(1);
  for (let element of args) {
    while (arr.includes(element)) {
        arr.splice(arr.indexOf(element), 1);
    }
  }
  return arr;
};
// Do not edit below this line
module.exports = removeFromArray;
