/*

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

SUMMARY PLAN -

Make a new variable that will contain our object with character and how many times it occured, Make a varaible to hold characters already added to object and a variable to keep count how many times we 
have encounted a character in the iteration. We want to iterate over the string twice. The second time is to go through and count how many times string[i] occurs and add it to the count variable.

- DONT NEED DUPES AS ALL KEYS IN OBJECTS ARE UNIQUE



*/

function count(string) {
  let charObj = {};
  let dupes = [];

  for (let i = 0; i < string.length; i++) {
    if (!dupes.includes(string[i])) {
      dupes.push(string[i]);
      charObj[string[i]] = 0;

      for (let j = 0; j < string.length; j++) {
        if (string[j] === string[i]) {
          charObj[string[i]]++;
        }
      }
    }
  }

  return charObj;
}
