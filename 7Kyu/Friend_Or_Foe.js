/*

Make a program that filters a list of strings 
and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has 
to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.
--------------------------------------------------------------------
PLAN

- Create a new variable called realFriends. This will store all the friends
with exactly 4 letters.

- Iterate through using a for loop and the length of the array (friends)

- Use an if statement with the condition of  if the word in the array 
of friends is strictly equal to 4.
    - (friends[i].length === 4)

- When true, push the friends[i] to our empty array of realFriends

- Outside the for loop, return the array realFriends

*/

function friend(friends){

    let realFriends = []

    for( let i = 0; i < friends.length; i++ ){

        if(friends[i].length === 4){

            realFriends.push(friends[i])

        }

    }
    return realFriends
}