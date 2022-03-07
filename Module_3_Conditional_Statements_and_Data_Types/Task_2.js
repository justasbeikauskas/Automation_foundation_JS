//Perform multiplication of various types (string * boolean, string * number, number * boolean)

let str = "StringValue";
let bool = true;
let num = 7;

function multiply(a, b){
	alert(`${typeof(a)} "${a}" multiplied by ${typeof(b)} "${b}" is : ` + (a*b));
}

multiply(str, bool);
multiply(str, num);
multiply(num, bool);
