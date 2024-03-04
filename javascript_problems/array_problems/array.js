//length of an array
var a =[1,2,3,4,5,6]
console.log(a.length)

//access an element in an array
console.log(a[1])

//add an element in an array
//depending on the location where we want to add 
//1. at the last - push
console.log(a.push(7))
var b= a.push(8)
console.log(a)
//2. at the first - unshift function
var c =a.unshift(0)
console.log(a)
//3. at middle

//remove element in the array - use shift

//to check if element exists in an array
console.log(a.includes(7))
