/*

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but 
containing one "needle"

After your function finds the needle it should return a message 
(as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> 
"found the needle at position 5"

PLAN -

Find the word "Needle" in an array.
Return the position of "needle" in the prewrote string above.

- Use for loop to iterate through array over the length of argument

- Use a if statement with the condition if haystack[i] === "needle"

- If true, return `found the needle at position ${i} `




*/


function findNeedle(haystack) {

    for(let i = 0;i < haystack.length;i++){

       if(haystack[i] === "needle"){

        return `found the needle at position ${i}`

       }

    }

}