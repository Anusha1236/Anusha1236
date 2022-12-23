let obj = [
    {
        name : "Anusha",
        Age : 31,
        designation  : "Node Developer"
    },
    {
        name : "Saraswathi",
        Age : 27,
        designation  : "Angular Developer"
    },
    {
        name : "Harika",
        Age : 26,
        designation  : "Angular Developer"
    },
    {
        name : "Lakshmi",
        Age : 25,
        designation  : "PHP Developer"
    },
    {
        name : "Veena",
        Age : 25,
        designation  : "Software Engineer"
    },
    {
        name : "Vani",
        Age : 24,
        designation  : "Software Developer"
    },
    {
        name : "Janu",
        Age : 33,
        designation  : "Senior Software Engineer"
    }
]

let byName = obj.sort((a,b)=>{
    if(a.designation.toLocaleUpperCase() > b.designation.toLocaleUpperCase()) return 1;

    if(a.designation.toLocaleUpperCase() < b.designation.toLocaleUpperCase()) return -1;

    return 0;
})
console.log(byName)