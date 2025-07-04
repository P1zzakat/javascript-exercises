const palindromes = function (str) {
    let splitStr = str.toLowerCase().split('');
    let result = new Array();
    splitStr.forEach(element => {
        if (element !== ' ' && element !== '!' && element !== ',' && element !== '.') result.push(element);
    });
    for (let i = 0; i < result.length; i++) {
        if (result[i] !== result.reverse()[i]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
