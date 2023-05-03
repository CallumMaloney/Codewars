/*

created new variable with str index 1 sliced = ello
created another new string with the last index sliced = ello
    - slice(0,-1) starts from index 0 and goes backwards using -1
    so -1 is the last index of the string

    return str.slice(1,-1) is better
*/

function removeChar(str) {
  return str.slice(1, -1);
}
removeChar("hello");
