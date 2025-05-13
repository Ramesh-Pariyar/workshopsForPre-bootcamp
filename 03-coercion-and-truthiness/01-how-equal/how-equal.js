// YOUR CODE BELOW
const howEqual = (a,b) =>{
    
    if (a===b) return "strictly";
    if (a==b) return "loosely"
    return "not equal";
}

console.log(howEqual(2,"2"));