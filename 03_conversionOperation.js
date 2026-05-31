// let score = 45
// console.log(typeof score); // Output: number
// let scoreString = String(score);
// console.log(typeof scoreString); // Output: string
// console.log(scoreString); // Output: "45"
let score = "33ab";
console.log(typeof(score)); //string
let scoreInnumber= Number(score)
console.log(typeof(scoreInnumber)) //number
console.log(scoreInnumber)  //NaN
//so it hasn't stored the value as a number rather just converted it into number
// console.log(33ab==scoreInnumber );

let score = null;
console.log(typeof(score)); //null
let scoreInnumber= Number(score)
console.log(typeof(scoreInnumber)) //number
console.log(scoreInnumber)  //NaN