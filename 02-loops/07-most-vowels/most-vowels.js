// YOUR CODE BELOW
const mostVowels = (aString) => {

    let currentWord = "";
    let currentVowelCount = 0;

    let maxWord = "";
    let maxVowelCount = 0;

    const isVowel = (char) => {
        let vowels = "aeiouAEIOU";
        if ( vowels.indexOf(char) >= 0){
            return true;
        }
        else{
            return false;
        }
    }
    for (let i = 0; i < aString.length; i++) {
        let char = aString[i];
        
        if(char !== " " && i !== aString.length -1 ){
            currentWord += char;

            if (isVowel(char)){

                currentVowelCount += 1;
            }
        }
        else {
            if( currentVowelCount > maxVowelCount){

                maxWord = currentWord;
                maxVowelCount = currentVowelCount;

            }
            currentVowelCount = 0;
            currentWord = "";
        }
    }
    return maxWord;
    
}
console.log (mostVowels("This is the first time I am getting interested in javascript"));