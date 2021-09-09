const listOfNames = ['Daysi', 'Bryanna', 'Gaylene', 'Frida', 'Jama', 'Wally', 'Margherita', 'Tuan', 'Ashlea', 'Sherrie', 'Laurena'];


//Assumes it is a simple list of strings with a string to find
function findItemInList(listOfItems, itemToFind)
{
    let position = -1;

    for(i = 0; i < listOfItems.length; i++)
    {
        let currentItem = listOfItems[i];

        if(currentItem == itemToFind){
            console.log(`Found ${itemToFind} at position ${i}`);
            position = i;
            break;
        }
    }
    return position;
}

let findItem = "Wally"
let findPosition = findItemInList(listOfNames, findItem);

if(findPosition !== -1){
    console.log(`Found ${findItem} at position ${findPosition}`);
}else{
    console.log(`Could not find ${findItem} in the list`);
}