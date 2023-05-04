/*plan
1.Remove duplicates 
    - use a for loop on arr.length
    - if the index of the element is -1 then push it to the array
2.Sort the channels in an alphabetical order using sort method
3. Return the array as an object using Object.assign method
*/

function redarr(arr) {
    let uniqueChannels = []
  
    for (let i = 0 ;i <arr.length ; i++){
      if(uniqueChannels.indexOf(arr[i]) === -1) {
        uniqueChannels.push(arr[i])   
      }   
    }
    uniqueChannels.sort();
    return Object.assign({},uniqueChannels) 
  }