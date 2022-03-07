// When running 1/0, the error 'cannot be divided by zero'
   
let a = +prompt("Number a", 1);
let b = +prompt("Number b", 0);


try {
        

    function result(a,b) {
       return alert(a/b);
    }
    
    if(b === 0){
        throw new DivideByZeroError ("Can not divide by zero");
    }
    
    result(a, b);
    
    } catch (err) {
    
    alert(err.message);
    
    }