//declare and initialize an object.
let truck = {
    model: '1977 Mustang Convertible',
    make: 'Ford',
    city:'Detroit',
    year: '1977',
    convertible: true,
};

//Creates three parameter variables (see the curly braces around 'model, make, city').
//Then logs a message to the console depending on the content of the variables.
const printCarInfo = ({model, make, city}) => {
    console.log(`The ${model}, or ${make}, is in the city ${city}.`);
};

//When the object is the argument of 'printCarInfo',
// the function searches the object for the three matching property names.
//Then, it assigns those properties to the variables of 'printCarInfo'.
printCarInfo(truck);

let prairieRose = {
    name: 'Prairie Rose',
    scientificName: 'Rosa arkansana',
    kingdom: 'Plantae',
    genus: 'Rosa',
    use: 'ornamental'
}

const printPlantInfo = ({name, scientificName, kingdom}) => {
    console.log(`The ${name}, or ${scientificName}, is in the kingdom ${kingdom}`);
}

printPlantInfo(prairieRose);