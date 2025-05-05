// YOUR CODE BELOW
const onlyOdds= (num) => {
    let sum = 0;
    
    for(let i=1; i <= num; ++i){

        if (i % 2 ===1){
            sum += i;
        }   
    }
    return sum;
}
console.log(`the sum of only odds ${onlyOdds(9)}`);