/*

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, 
pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. 
It must return the display text as shown in the examples:


[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
-----------------------------------------------------------------------------------------------
PLAN - 

Add "likes this" onto each array and process as a string.

- If no one likes, return no one likes this

- If 1 person likes, return "(person name) likes this"

- If 2 people like it, return "(person name 1) and (person name 2) like this"

- If 3 people like it, return "(person name 1), (person name 2) and (person name 3) like this"

- If 4 people like it, return "(person name 1),(person name 2) and 2 others like this"

- Create a variable called others and assign it to names.length - 2

- If more than 4 people like it, return "(person name 1),(person name 2) and (others) others like this"

*/

function likes(names) {

let others = names.length - 2
 
if(names.length === 0){

    return "no one likes this"

}else if (names.length === 1){

    return `${names[0]} likes this`

}else if(names.length === 2){

    return `${names[0]} and ${names[1]} like this`

}else if(names.length === 3){

    return `${names[0]}, ${names[1]} and ${names[2]} like this`

}else if(names.length === 4){

    return `${names[0]}, ${names[1]} and 2 others like this`

}else{

    `${names[0]}, ${names[1]} and ${others} others like this`
}


}