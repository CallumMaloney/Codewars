function sortMyString(s) {
  
    let evenIndex = ""
    let oddIndex = ""
    
    for(let i = 0; i < s.length; i++){
      if(i % 2 == 0){
        
        evenIndex += s[i]
        
      }else{

        oddIndex += s[i]
      }       
    } return evenIndex + " " + oddIndex     
} 
    
  