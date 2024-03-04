//slice - cuts the array elements slice and we can console those array elements 

var a =[1,3,4,5,6,7,8,9]

console.log(a.slice(1,5)) // gives the array which was sliced from the array index 1 to 5
console.log(a.slice(-2)) // gives the array which was sliced from the array index -2 from the end and logs from backwards 
console.log(a.slice(-2,1)) // empty array cause -2 starts from backwards and the index 1 starts from forward
console.log(a.slice(-2,-5)) // empty array -2 and -5 coz slicing always happens for index from the smallest to largest , here -2 > -5 
console.log(a.slice(-5,-2)) // doesnt give empty array cause we need to mention the smallest here first i.e., -5




//splice -adds the elements in middle - doubt here

//splice(index,how many delete,new value)
//index of next element before placing
//how many delete - optional- this is important coz it represnts how many we want to display
//new value is not being updated?
var b =[1,3,4,5,6,7,8,9]
console.log(b.splice(3,1))
console.log(b.splice(4))





