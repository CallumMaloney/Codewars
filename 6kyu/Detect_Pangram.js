/*

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence 
"The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


*/
function isPangram(s){
    let aToZ = ""
    
    for(let i = 0;i<s.length;i++){
      
      if (!aToZ.toLowerCase().includes(s[i].toLowerCase())){
        
        aToZ+= s[i]
      
      }
    } let newatz = aToZ.toLowerCase().split("").sort().join("")
      newatz = newatz.replace(/[^a-z]/gi,"")

    if (newatz === "abcdefghijklmnopqrstuvwxyz"){

        return true
    }else{
        return false
    }
    
  }