// find the missing number from first 20 natural number

// 1,2,3,4,5
let total = 0;
givenSum = 195;
let sumOfTen=function(num){
    let number = num;
for(let i =1;i<=number;i++){
    // console.log(i);
    total += i;
}
console.log("n natural num sum",total);
missedOne = total - givenSum;
console.log("missed num",missedOne);
}
sumOfTen(20);