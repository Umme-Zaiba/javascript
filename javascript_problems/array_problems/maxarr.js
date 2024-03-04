//by using Math methods

//MAXIMUM AND MINIMUM OF THE ARRAY

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const findMax=(a)=>{
//     const max = Math.max(...a)
//     const min = Math.min(...a)
//     console.log(max, min)
//     return {max,min}
// }
console.log(Math.max(...a))
console.log(Math.min(...a))

//by using for loop
// let max1 =999
let max1 = a[0]
for (i = 0; i <= a.length; i++) {
    if (a[i] > max1)
        max1 = a[i];
}
console.log(max1)
