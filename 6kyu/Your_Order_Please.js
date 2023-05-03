/*

Your task is to sort a given string. Each word in the string will contain a single number. 
This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
-----------------------------------------------------------------------------------------------
PLAN - 

If a word contains a number, put that word in the numbers index position

make variable for the result

split the string so we can have it in x seperate words

Iterate through each word
    -second for loop inside the for loop

When we iterate to a number, put the word in the result variable in that index number
    Use splice



*/

function order(words){
    result = ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-']
    words = words.split(" ")
    
    for(let i = 0;i<words.length;i++){
        for(let j = 0;j<words[i].length;j++){
            let letter = words[i][j]  
            if(letter.match(/[0-9]/)){   

                 result.splice(letter,1,words[i])
                console.log("hi")
            }
        }       
    }return result.filter(function(x) {
        return x !== '-';
    }).join(" ");                                                      
}




