/*
//1

function doubleValues(array){
    function double(num) {
        return num * 2;
    }
    return array.map(double);
}
console.log(doubleValues([1,2,3]))
//2

function onlyEven(array){
    function even(number){
        return number%2===0
    }
    return array.filter(even)
}
console.log(onlyEven([2,3,4,5,6,7]))
//3

function showFirstAndLast(array){
   function isString(args){
        return typeof args === "string"
   }
   let lstOfStr = []
   if(isString(array[0])){
    lstOfStr.push(array[0])
   }
   if(isString(array[array.length -1])){
    lstOfStr.push(array[array.length -1])
   }

   return lstOfStr
}
console.log(showFirstAndLast(["345",34,"234",4,4,"yoni"]))
//4

function  vowelCount(string){
    function isVowel(letter){
        const vowels = "aeiou";
        if(vowels.includes(letter)){
            return letter
        }
    }
    let listStr = string.split("")
    let dicVowel = {}
    listStr.forEach(char => {
        if(isVowel(char)){
            if (dicVowel[char]){
                dicVowel[char]++
            }
            else{
                dicVowel[char]=1
            }
        }
    });
    return dicVowel
}
console.log(vowelCount("kdfjghsdneowaaaa"))
//5
*/
function  capitalize(string){
    let upperStr = ""
    let listStr = string.split("")
    listStr.forEach(char => {
        upperStr+=char.toUpperCase()       
    });
    return upperStr
}
console.log(capitalize("jfkhg"))
//6
/*
function shiftLetters(string){
    let listCod = []
    function encode(letter){
        if(letter === "z"){
            return "a"
        }
        else if(letter === "Z"){
            return "A"
        }
        else{
            let temp = letter.charCodeAt(0)+1
            return String.fromCharCode(temp)
        }
    }
    string.split("").forEach(letter => {
       let code = encode(letter)
       listCod.push(code) 
    });
    return listCod.join("")

}
console.log(shiftLetters("abcz"))
//7 חייב להפעיל את תרגיל 5 כדי להשתמש בפונקציה שלו
*/
function swapCase(string){
    listWords = string.split(" ")
    let swapped = listWords.map((word, index) => {
        if (index % 2 === 0) {
            return word;
        } else {
            return capitalize(word);
        }
    });
    return swapped.join(" ");
}
console.log(swapCase("hi my name is yonatan")); 
