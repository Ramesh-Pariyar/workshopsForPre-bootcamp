// YOUR CODE BELOW
const mySlice = (originalString, startIdx = 0, endIdx = originalString.length) => {
    let newString = "";
        for ( let i = startIdx; i < endIdx; i++){
            const curChar = originalString[i];
            newString += curChar;
        }
        return newString;
    }
console.log( mySlice("pokhara is a beautiful place."));
console.log( mySlice("pokhara is a beautiful place.",5,9));