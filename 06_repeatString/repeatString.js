const repeatString = function(str, iterations) {
  let result = '';
  if (iterations < 0) return 'ERROR';
  for (let i = 0; i < iterations; i++) result += str;
  return result;
};

// Do not edit below this line
module.exports = repeatString;
