/*

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
PLAN -
- Make variable with to hold high score and make a variable to hold highest scoring word

- Make a for loop to iterate through x.
  - inside the for loop, define a variable called score to keep track of the current score
  - define a variable called word (x[i])to keep track of the word the array we are on 

- Make a nested for loop to iterate through word(x[i])

- Inside nested for loop, have the score += word.charCodeAt(j) - 96
  - This allows us to acess the character code of j (ASCII) in the word we are 
    iterating through.
  - We then take away 96. This allows us to acess the ascii a-z starting from one.
  - This is due to a-z in ASCII starting from 97. eg a = 97. - 96 = 1 

  - After the nested for loop but inside the first for loop, we make an if statement
   - Condition being if the score is higher than the current highScore (score>highScore)

- If true, we make the variable highScore the current score and the variable highScoreWord
  the current word we are iterating through. (highScore = score; highScoringWord = word)

- return word

*/

function high(x){
  x = x.split(" ")
  highScore = 0
  highScoreWord = ""
  for (let i = 0; i < x.length; i++){
    let score = 0
    let word = x[i]
    for (let j = 0; j < word.length; j++){
      score += word.charCodeAt(j) - 96
    }
    if(score>highScore){
      highScore = score
      highScoreWord = word
    }
  } return highScoreWord
 
  
}


