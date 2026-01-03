export function one() {

 // if

 const isUserloggedIn = true

 if (2 != 3) {
   console.log("Executed"); 
 }

 // <, >, <=, >=, ==, !=, ===, !==


//  switch(expression) {
//     case value1:
//       // code to execute if expression === value1
//       break;
//     case value2:
//       // code to execute if expression === value2
//       break;
//     default:
//       // code to execute if no case matches
//   }



  // truthy values and falsy values

  // falsy 
  // false, 0, -0, BigInt 0n, "", null, undefined, NaN


  //truthy value 
  // "0", "false", " ", [], {}, function(){} 


  // Nullish Coalescing Opration (??) : null undefined

  let val1;
  // val1 = 5 ?? 10
  // val1 = null ?? 10
  // val1 = undefined ?? 15
  // val1 = null ?? 10 ?? 20


 // Terniary Oprator

 // condition ? true : false

 const iceTeaPrice = 100
 iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80");
}