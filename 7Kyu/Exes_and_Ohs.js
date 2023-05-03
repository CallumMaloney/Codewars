/*

Check to see if a string has the same amount of 'x's and 'o's. The method must 
return a boolean and be case insensitive. The string can contain any char.

Examples input/output:


XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false



/*



*/












function XO(str){
    let oList = 0
    let xList = 0
    
    for(i=0;i < str.length;i++){
        let letter = str[i]
        if (letter === "o" || letter === "O"){
            oList ++
          }
        else if (letter === "x" || letter === "O"){
            xList ++
        }
    }
    return oList === xList
}