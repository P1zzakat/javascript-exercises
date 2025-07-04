const fibonacci = function(n) {
    n = Number(n);
    // Make sure input is correct
    if (n < 0) return 'OOPS';
    if (!n) return 0;
    // First elements of the sequence
    let fibonacciArray = [1, 1];
    for (let i = fibonacciArray.length; fibonacciArray.length <= n; i++) {
        const nextElement = fibonacciArray[i - 2] + fibonacciArray [i - 1];
        fibonacciArray.push(nextElement);
    }

    return fibonacciArray[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
