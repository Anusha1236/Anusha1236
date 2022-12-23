let arr = [1, 2, 5, 10, 20];
// let reducer = (cv , pv) => cv + pv ;

// let t = arr.reduce(reducer);
// console.log(t);

let x = arr.reduce((cv,pv)=>{
    return (cv + pv)
})
console.log(x);