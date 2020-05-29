/**
 * Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.
 * https://leetcode.com/problems/backspace-string-compare
 * 
 * Examples;
 * S=> ab#c, ab##, a##c, a#c
 * T=> ad#c, c#d#, #a#c, b 
 */

 /**
  * This is a different solution. 
  * I solved it with using regular expression and while loop
  * Firstly we are checking if string contains "#"
  * then replace with "" 
  */
let S = "a#c";
let T = "b";

var forS=true, forT = true;
let pattern = /[a-z]#|#/i;
let char = /#/;
while(forS && forT){
    //Check string is contain #
    forS = char.test(S); 
    forT = char.test(T);
    //Then replace with ""  
    S = S.replace(pattern, ""); 
    T = T.replace(pattern, "");
}

//Check if S and T are equal
console.log(S === T)
