// YOUR CODE BELOW
const isTruthy = (value) => {
    
    
    if (value === false){
        return "the boolean value false is falsey";
    }
    
    if (value === null){
        return " the null value is falsey";
    }
    
    if (value === ''){
        return "the empty string is falsey( the only falsey string)";
    }
    
    if (value === 0){
        return "the number 0 is falsey (the only falsey number)";
    }
    
    if (!!value) return true;
    return "the undefined is falsey";
}