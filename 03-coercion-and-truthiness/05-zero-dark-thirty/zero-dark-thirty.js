// YOUR CODE BELOW
const zeroDarkThirty = (aNumber) =>{

    if (aNumber === 0){
        return NaN;
    }

    let originalValue = String(aNumber);
    let newValue = "";
    
    for (let i = 0; i < originalValue.length ; i++){
        if(originalValue[i] !== "0"){
        newValue += originalValue[i];

    }
}
    return Number(newValue);
    
}
console.log(zeroDarkThirty(502220212022520));