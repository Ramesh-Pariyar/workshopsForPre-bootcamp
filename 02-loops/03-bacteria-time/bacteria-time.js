// YOUR CODE BELOW
const bacteriaTime = (currentNum, targetNum) =>{

    if ( currentNum > targetNum) return "targetNum must be larger than currentNum";

    let numMinutes = 0;

    while (currentNum < targetNum){
        numMinutes += 20;
        currentNum *= 2;
    }
    return numMinutes;
}
console.log(`the bacteria time is ${bacteriaTime(1,4)}`);