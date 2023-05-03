/*

Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!


*/
/*

PLAN-

- Seperate Both Teams into 2 arrays DONE

-Iterate through the input of the function DONE

- Give each time a score counter to keep track of winner DONE

- if statements for each letter called in the function
    leftscore ++ Or leftscore += their score added

- outside the loop, make win and draw if, elif and else statements.

*/

// const leftTeam = ['w', 'p', 'b', 's'];
// const rightTeam = ['m', 'q', 'd', 'z'];



function alphabetWar(fight) {
    let leftScore = 0
    let rightScore = 0
  for (let i = 0; i < fight.length; i++){

    if(fight[i] === "s"){
        leftScore++
    }
    if(fight[i] === "b"){
        leftScore += 2
    }
    if(fight[i] === "p"){
        leftScore += 3
    }
    if(fight[i] === "w"){
        leftScore += 4
    }
    if(fight[i] === "z"){
        rightScore ++
    }
    if(fight[i] === "d"){
        rightScore += 2
    }
    if(fight[i] === "q"){
        rightScore += 3
    }
    if(fight[i] === "m"){
        rightScore += 4
    }
    
  }
  if(leftScore>rightScore){
    return "Left side wins!"
}
else if(rightScore>leftScore){
    return "Right side wins!"
}
else{
    return "Let's fight again!"
}
  
}
