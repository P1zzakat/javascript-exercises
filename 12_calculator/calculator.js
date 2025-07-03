const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (arr) {
    let summ = 0;
    arr.forEach((element) => {
        summ += element;
    });
    return summ;
};

const multiply = function (arr) {
    let prod = 1;
    arr.forEach((element) => {
        prod *= element;
    });
    return prod;
};

const power = function (a, b) {
    return a ** b;
};

const factorial = function (n) {
    let prod = 1;
    for (let i = n; i > 1; i--) {
        prod *= i;
    }
    return prod;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
