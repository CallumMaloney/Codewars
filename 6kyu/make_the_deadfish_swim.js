/*

Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]

PLAN -

1. Split the string into an array of characters
2. declare a variable to hold the value, value will be 0
3. declare variable to hold the array that will be returned
4. Iterate through the array
5. using switch case increment, decrement, square, or output the value
6. return the array

*/

function parse( data )
{
    let value = 0;
    let newArray = [];

    data = data.split('');

    for (let i = 0; i < data.length; i++) {

        switch (data[i]) {
            case 'i':
                value++;
                break;
            case 'd':
                value--;
                break;
            case 's':
                value = value * value;
                break;
            case 'o':
                newArray.push(value);
                break;
            default:
                break;
        }

    }
    return newArray;
}