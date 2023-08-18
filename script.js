// not use regex
let text = "Visit My Skill";
let a = text.search("MySkill");
console.log(a);
// result
// -1       -> undefined
let textt = "Visit My Skill";
let b = textt.search("My Skill");
console.log(b);
// result
// 6

// using regex
let teks = "Visit My Skill";
let x = teks.search(/myskill/i); // i = Perform case-insensitive matching
console.log(teks.toString());
// result
// Visit My Skill

// Regex Modifiers
var t = " Visit mySkill";
let c = t.search(/mySkill/g); //Perform a global match(find all matches rather than stopping after the first match).
console.log(c);
// result
// 7

// Regex Modifiers 2 - match
let j = "\nIs th\nis it is?";
let result = j.match(/is/m); //Perform multiline matching
console.log(result);
// result
// is

// detail result
// 0: "is"
// groups: undefined
// index: 7
// input: "\nIs th\nis it is?"
// length: 1

// Regex test - Expression Descriptiion

const pattern = /a/;
console.log(pattern.test("The Best things in life are free!"));
// result
// true   - the letter a is true because the string above contains the letter a

const patterns = /[a-zA-Z]/; // description ini diketahui
let tekss = "visit MySkill MySkill";
console.log(patterns.test(tekss));
// result
// true

// SYNTAX EXPRESSION DESCRIPTION - to uses password,number,email,nama,phone
const patternsss = /(?=.*[0-9])([a-zA-z0-9!@#$]){6,20}/g; // {6,20} - char
let text0 = "hai"; // <- (> 3) char
console.log(patternsss.test(text0));
// result
// false

const pattern1 = /(?=.*[0-9])([a-zA-z0-9!@#$]){6,20}/g; // {6,20} - char
let text1 = "password1"; // <- (> 6) char
console.log(pattern1.test(text1));
// result
// true
