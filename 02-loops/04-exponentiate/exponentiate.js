// YOUR CODE BELOW
const exponentiate = (base, power) => {
    let result = 1;
    if (power >= 0){
        if (power > 0){
            result = base ** power;

        }
    return result
    }else{
        return "invalid"

    }
}
console.log(exponentiate(2,6));