// YOUR CODE BELOW
const crazyCaps = (stringValue) => {
    let result = "";

    for (let i = 0; i < stringValue.length; ++i){
        if (i % 2 === 1){
            result += stringValue[i].toUpperCase();
        }
        else{
            result += stringValue[i];
        }
    }
    return result;
}
console.log(crazyCaps("this is a javascript programming"));