//FLATTEN A NESTED ARRAY

var a =[1,2,[3,4],5,[6,[7]]]

console.log(a.flat())       // this flatens for the first level
console.log(a.flat().flat())    //this flattens for the next level