const arr = ['apple','oranges','','mango','','lemon']


const output  = arr.map((element)=>{
    if(element === ''){
        return('empty string')
        }else{
            return element
        }
})

console.table(output)


/* 3.  const hobbies does not change because it is stored in th same memory location without the const properties,
we are now changing the const but the thing const is pointing towards. */ 

/*Spread operaror (...) is used to spread out the array or object to be assigned to another variable(used to pull)*/

/* 4. Spread operator creates a new objet or array*/

/* 5. Rest operator(...) is different from spread because it is used to merge rather than pulling an array or object(used to merge) */






