// const filterArray = (arr,condition)=>arr.filter(condition)

// var a =[1,3,4,5,6,7,8,9]
// var f1 = filterArray(a,(num)=>num>2)
// console.log(f1)

// FILTER FUNCTION USED TO CREATE AN ARRAY OBTAINED BY CONDITIONS 
// it should have a function which provides a condition

var a =[1,2,3,4,5,6,7]

const filtered = a.filter((num)=> num%2==0)
console.log(filtered)