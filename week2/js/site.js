
const topOfStairs = 10; //Setting a condition to end the loop

let step = 1;

//While Loop
while(step < topOfStairs){
    console.log(`I am on step ${step}`); //Actions of the loop
    step++; //Increment the loop - Iteration
}

//Resetting the step variable
step = 1; //Initialising the statement

//Do while loop
do{
    console.log(`I am on step ${step}`);
    step++

}while(step < topOfStairs)

function travelOnStairs(start, end)
{
    //For Loop
    for(i = start; i < end; i++){

        /*let oddOrEven = "";
        var remainder = i % 2; //Modulo

        if(remainder == 0){
            oddOrEven = "even";
        }else{
            oddOrEven = "odd";
        }*/

        //ternary operator
        let oddOrEven = i % 2 == 0 ? 'even' : 'odd';

        console.log(`For loop: I am on step ${i} and it is ${oddOrEven}`);
    }
}

travelOnStairs(0, 150);
travelOnStairs(70, 100);
travelOnStairs(80, 90);

/*function travelDownStairs(start, end)
{
    //For Loop
    for(i = start; i > end; i--){

        console.log(`For loop: I am on step ${i}`);
    }
}

travelDownStairs(40, 20);*/



