/*

Usually when you buy something, you're asked whether your credit card number, 
phone number or answer to your most secret question is still correct. However, 
since someone could look over your shoulder, you don't want that shown on your screen. 
Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four 
characters into '#'.

PLAN - 

Make all BUT last 4 characters of a string #

- Reverse characters in cc and grab the last 4

- Reverse the last 4 again to get the exact order of the last 4 from the string

- create empty string variable called octos

- use a for loop with the condition cc.length - 4
    - every iteration, += '#' to octos

*/

function maskify(cc) {
    let rcharacters = cc.split("").reverse().join("").substring(0,4) // gives us last 4 characters of cc
    let characters = rcharacters.split("").reverse().join("")
    let octos = ''
    for(let i = 0; i < cc.length - 4; i++){
      
      octos += '#'
    }
      
      return octos + characters
  
  }