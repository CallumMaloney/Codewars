function sortEmotions(arr, order){
      
   let emotionArr= [ ':D', ':)', ':|', ':(', 'T_T' ]

   if(order == true){

    return arr.sort((a,b)=>
         emotionArr.indexOf(a) - emotionArr.indexOf(b)
    )
   }else if (order == false){

    return arr.sort((a,b)=>
        emotionalArr.indexOf(b) - emotionalArr.indexOf(a)
    
    )
   }

    

     
      
     
     
}