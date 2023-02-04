let output =``
for (let i = 1 ; i<=100 ; i++){
    output = `${i}` 
    
    if (i%3==0 && i%5===0){
        output = `${i} fizzbuzz`
    }
    else if(i%3===0){
        output = `${i} fizz`
    }
    else if (i%5===0){
        output = `${i} buzz`
    } 

    console.log(output)
}
