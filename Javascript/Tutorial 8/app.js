/* 

find Biggest Number (10,20)
expected output 20 is bigger than 10.

*/

function findBiggestNumber(a,b){
    return a>b? `${a} is greater than ${b}`:`${b} is greater than ${a}`
}
let result = findBiggestNumber(120,0);
console.log(result)
