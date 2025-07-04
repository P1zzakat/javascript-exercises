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
    const people = [
      {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
