// (function exam(a){
//   console.log(a);
// }("korte"));
//
// (function exam(){
//   console.log("exam");
// }());

var fivePlusOne = (function exam(){
  let number  = 5;
  number += 1;
  // console.log("exam");
  return {number:number}
}());

console.log(fivePlusOne.number);
