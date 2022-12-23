//take one array sort it and extract the unique numbers from that array.
//problem Array is Sarray = [1,2,2,4,13,45,5,9,3,1,4,8,5]

//first writing code
let Sarray1 = [1,2,2,4,13,45,5,9,3,1,4,8,5];
let arr1 = new Set(Sarray1);
let newArr1 = Array.from(arr1);
console.log(newArr1)
let uniArr = newArr1.sort((a,b)=>a-b);
console.log(uniArr)


//optimized code
// let Sarray = [1,2,2,4,13,45,5,9,3,1,4,8,5];
// let arr = (Array.from(new Set(Sarray))).sort((a,b) => a-b);
// console.log(arr);
