//Divide different types (string / boolean, string / number, number / Boolean)

let str = "StringValue";
let bool = true;
let num = 7;

function divide(a, b){
	alert(`${typeof(a)} "${a}" divided by ${typeof(b)} "${b}" is : ` + (a/b));
}

divide(str, bool);
divide(str, num);
divide(num, bool);
