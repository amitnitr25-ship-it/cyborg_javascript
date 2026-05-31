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

let test = null;
console.log(typeof(test)); //null
let testInNumber= Number(test)
console.log(typeof(testInNumber)) //number
console.log(testInNumber)  //0
//for true it will show 1
let isloggedIn=""//for no inputi string the bool is false
let booleanIsloggedIn=Boolean(isloggedIn)
console.log(booleanIsloggedIn); //false
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(3+3+"4") //64           
console.log("1"+3+3)//133
// String + Anything or Anything + String will always force the entire operation to become a string concatenation
