//Perform addition of various types (string + boolean, string + number, number + boolean)

let str = "StringValue";
let bool = true;
let num = 7;

function add(a, b){
	alert(`${typeof(a)} "${a}" plus ${typeof(b)} "${b}" is : ` + (a+b));
}

add(str, bool);
add(str, num);
add(num, bool);