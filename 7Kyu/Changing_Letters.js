/*
Capitalize all vowels in a string

- Make an array of all vowels

- Make a for loop to iterate through the string

- if the string includes a vowel capitalize it.



*/





function swap (string) {
    
    let result = ""
  
  let vowels = ['a','e','i','o','u']

  for(i = 0;i < string.length; i++){

    if(vowels.includes(string[i])){

        result += string[i].toUpperCase()
    }
    else{
        result += string[i]
        
    }

  }
  
  return result

  }