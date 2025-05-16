// YOUR CODE BELOW
const onlyOne = (a,b,c) => {
    return (!!a && !b && !c) || (!a && !!b && !c) || (!a && !b && !!c) 
    
}
console.log(onlyOne(0,5,""))