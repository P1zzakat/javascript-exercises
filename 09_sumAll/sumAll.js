const sumAll = function (firstNumber, lastNumber) {
  if (
    firstNumber < 0 ||
    lastNumber < 0 ||
    typeof firstNumber !== 'number' ||
    typeof lastNumber !== 'number' ||
    !Number.isInteger(firstNumber) ||
    !Number.isInteger(lastNumber)
  )
    return "ERROR";
  let sum = 0;
  if (firstNumber > lastNumber) {
    let placeHolder = firstNumber;
    firstNumber = lastNumber;
    lastNumber = placeHolder;
  }
  for (let i = firstNumber; i <= lastNumber; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumAll(1, 3));

// Do not edit below this line
module.exports = sumAll;
