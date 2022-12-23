//Loop through the object, if the key value type is string then reverse it, if the type is number double it, if the type is boolean then make it true as false and false as true

obj = {
    name:'test name',
    age: 32,
    salary:12000,
    phone:9499902364,
    isActive:false,
    status:true,
    city:"hyderabad"
  }
  console.log("before",obj);

  for(let p in obj){
      if(p === 'name'){
          obj[p]=obj[p].split('').reverse().join('');
      }
      if(p === 'age'){
          obj[p] = obj[p] * obj[p];
      }
      if(p === 'salary'){
        obj[p] = obj[p] * obj[p]; 
      }
      if(p === 'phone'){
        obj[p] = obj[p] * obj[p];   
      }
      if(p === 'isActive'){
        obj[p] = !obj[p]; 
      }
      if(p === 'status'){
        obj[p] = !obj[p]
      }
      if(p === 'city'){
        obj[p] = obj[p].split('').reverse().join('');
      }
    }
    console.log("after",obj);

