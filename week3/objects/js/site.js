
//JSON Structure
let car1 = {
    'mf' : `Volkswagen`,
    'model' : `Golf`,
    'engine' : `1.6`,
    'engineType' : `petrol`,
    'bodyType' : `Hatchback`
}

let car2 = {
    'mf' : `Ford`,
    'model' : `Fiesta`,
    'engine' : `0.1`,
    'colour' : `pink`,
    'type' : `Sedan`
}

let car3 = {
    'mf' : `Nissan`,
    'model' : `Navara`,
    'engine' : `2.5`,
    'colour' : `Grey`,
    'type' : `Pickup`
}

let fleet = [
    {
        'mf': `Volkswagen`,
        'model': `Golf`,
        'engine': '1.6',
        'engineType': 'petrol',
        'bodyType': 'Hatchback'
    },
    {
        'mf': 'Ford',
        'model': `Fiesta`,
        'engine': '0.1',
        'colour': 'Pink',
        'type': 'Sedan'
    },
    {
        'mf': 'Nissan',
        'model': `Navara`,
        'engine': '2.5',
        'colour': 'Grey',
        'type': 'Pickup'

    },
    {
        'mf': 'Opel',
        'model': `Senator`,
        'engine': '0.1',
        'colour': 'Red',
        'type': 'Hatchback'
    }
]

for(let i = 0; i < fleet.length; i++){

    const currentCar = fleet[i];
    console.log(`Car #${i} : ${currentCar.mf} | ${currentCar.model}`);
}

for (const currentCar of fleet){
    const message = `FOREACH Car :${currentCar.mf} | ${currentCar.model}`;
    console.log(message);
}

for (const [index, currentCar] of fleet.entries()){
    const message = `FOREACH Car ${index} :${currentCar.mf} | ${currentCar.model}`;
    console.log(message);
}

function getAllManufacturers(listOfCars){
    console.log(`Invoking getAllManufacturers(): ${listOfCars.length}`);

    let listOfManufacturers = [];

    for(const currentCar of listOfCars){
        const currentManufacturer = currentCar.mf;

        listOfManufacturers.push(currentManufacturer);
    }

    return listOfManufacturers;
}

let listOfManufacturersReturned = getAllManufacturers(fleet);

console.log(listOfManufacturersReturned.join());
