/* 
    Acronyms

    Create a function that, given a string, returns the string’s acronym 
    (first letter of each word capitalized). 
    Do it with .split first if you need to, then try to do it without
    split MDN Document Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
    Try to account for 'edge cases' in your function! Such as if we split the words and potentially get an empty string.
*/

const str1 = "object oriented programming";
const expected1 = "OOP";

// The 4 pillars of OOP
const str2 = "abstraction polymorphism inheritance encapsulation";
const expected2 = "APIE";

const str3 = "software development life cycle";
const expected3 = "SDLC";

// Bonus: ignore extra spaces
const str4 = "  global   information tracker    ";
const expected4 = "GIT";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
function acronymize(str) { }

/*****************************************************************************/

const str1 = "object oriented programming";

function hello(string){

let stringArr = string.split(' ');
let acronym = "";

if(stringArr.length == 0){
return "Empty String";
}

for(var i=0; i < stringArr.length; i++){
    acronym+=(stringArr[i][0]).toUpperCase();
}
return acronym;
}

console.log(hello(str1));




// const str4 = "  global   information tracker    "

// function hello(string){

// string = string.replace(/\\s+/g,''); // "thiscontainsspaces"
// let stringArr = string.split(' ');    
// let acronym = "";

// if(stringArr.length == 0){
// return "Empty String";
// }

// for(var i=0; i < stringArr.length; i++){
//     acronym+=(stringArr[i][0]).toUpperCase();
// }
// return acronym;
// }


// console.log(hello(str4));
