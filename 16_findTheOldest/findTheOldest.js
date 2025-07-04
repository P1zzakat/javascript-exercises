const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    let accumulatorAge;
    let currentAge;
    return people.reduce(function(accumulator, currentValue) {
        if (!accumulator) return currentValue;
        accumulator.yearOfDeath ? accumulatorAge = accumulator.yearOfDeath - accumulator.yearOfBirth : accumulatorAge = currentYear - accumulator.yearOfBirth
        currentValue.yearOfDeath ? currentAge = currentValue.yearOfDeath - currentValue.yearOfBirth : currentAge = currentYear - currentValue.yearOfBirth
        return currentAge > accumulatorAge ? currentValue : accumulator;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
