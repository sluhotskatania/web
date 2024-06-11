const car = {
    engine: {
        cylinders : 5,
        horsepower : 600
    }
};

const {engine: {cylinders: engineCylinders, horsepower: engineHorsepower} } = car;

console.log(engineCylinders);
console.log(engineHorsepower);