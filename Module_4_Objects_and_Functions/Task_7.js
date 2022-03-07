//   Write a function that determines whether a number is prime or not

function isPrime(n){
	if(n <= 1){
		return false;
	} else {
		for(let i = 2; i<n; i++) {
			if(n % i == 0){
				return false;
			} else {
			return true;
	  	    }
        }
	}
}