/*

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

PLAN -
1. Create a variable that will hold the result
2. Create a variable that will hold the checked value
3. Create a for loop that will iterate through the string
4. Create a conditional that will check if the current index is a "." or if the current index is a "/" and the next index is not a "w" or if the current index is not a "h" or "w" and the next index is not a "t"
5. If the conditional is true, set the checked variable to true
6. Create a conditional that will check if the checked variable is true
7. If the conditional is true, push the current index into the result array
8. Create a conditional that will check if the checked variable is true and the next index is a "."
9. If the conditional is true, set the checked variable to false and break out of the loop
10. Return the result array joined into a string and replace the "/" with an empty string


*/


function domainName(url){
    let result = [];
    let checked = null;
  console.log(url)
    for (let i=0; i<url.length; i++) {
        if (url[i - 1] === "." ||
            url[i - 1] === "/" && url[i+1] !== "w" || url[0] !== "h" && url[0] !== "w" && url[1] !== "t" ) {
        checked = true;
      } if (checked) {
        result.push(url[i])
      } if (checked && url[i+1] === ".") {
        checked = false;
        break;
      }
    } return result.join("").replace("/","");
  };