var colourOfTheRainbow = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

//Iterators start with the letter i
var sizeOfList = colourOfTheRainbow.length;

for(i = 0; i < sizeOfList; i++){
    
    console.log(`Colour is: ${colourOfTheRainbow[i]}`);
}

outputList(colourOfTheRainbow)

function outputList(list){

    var sizeOfList = list.length;

    for(i = 0; i < sizeOfList; i++){
        console.log(`Item is ${list[i]}`);
    }
}

let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];

outputList(planets);
wrathOfThanos(colourOfTheRainbow);
wrathOfThanos(planets);

function wrathOfThanos(listOfThingsToDestroy){

    while(listOfThingsToDestroy.length){

        let destroyItem = listOfThingsToDestroy.pop();
        console.log(`I THANOS am destroying ${destroyItem}`);
    }

    console.log(`I THANOS have finished destroying for now`);
}