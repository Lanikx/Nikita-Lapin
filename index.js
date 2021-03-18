function lengthOfStr(givenWords){
wordsArray = givenWords.split(' ');
let returnArray = "";
 for (i = 0; i < wordsArray.length; i++)
 {
     returnArray += wordsArray[i] +wordsArray[i].length + " "
 }
 return returnArray;
}

function wordPattern(str) {
    str = str.toLowerCase()
    let letters = Array.from(new Set(str));
    let results = [];
    for (let letter of str) {
        results.push(letters.indexOf(letter))
    }
    return results.join('.')
}

function stringParse(str) {
    if (typeof(str) != "string")
    return "it's not string"
    let a = ""
    let counter = 0
    let newStr = ""
    for (let letter of str)
    {
        
        if (counter >= 3 & letter !== a)
        {
            newStr += ']';
        }    
        if (letter === a)
        {
            counter++;
        }
        if (a !== letter)
        {
            a = letter;           
            counter = 1;
        }   
        if (counter === 3)
        {
            newStr+='[';
        }    
        newStr += letter
    }
    return newStr
}

//"" + 1 + 0 -> "10"
//"" - 1 + 0 -> -1
//true + false -> 1
//6 / "3" -> 2
//"2" * "3" -> 6
//4 + 5 + "px" -> "9px"
//"$" + 4 + 5 -> "$45"
//"4" - 2 -> 2
//"4px" - 2 -> NaN
//7 / 0 -> Infinity
//"  -9  " + 5 -> "  -9  5"
//"  -9  " - 5 -> -14
//null + 1 -> 1
//undefined + 1 -> NaN
//" \t \n" - 2 -> -2