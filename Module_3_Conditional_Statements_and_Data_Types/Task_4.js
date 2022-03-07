//Perform explicit conversion (number, string, boolean)

let str = "StringValue";
let bool = true;
let num = 7;

function convertToNumber(a){
	alert(typeof(a) + ": " + a + " after conversion to number becomes to data type " + typeof(Number(a)) + " and value of: " + Number(a) );
}

convertToNumber(str);
convertToNumber(bool);
convertToNumber(num);

function convertToString(a){
	alert(typeof(a) + ": " + a + " after conversion to string becomes to data type " + typeof(String(a)) + " and value of: " + String(a) );
}

convertToString(str);
convertToString(bool);
convertToString(num);

function convertToBoolean(a){
	alert(typeof(a) + ": " + a + " after conversion to boolean becomes to data type " + typeof(Boolean(a)) + " and value of: " + Boolean(a) );
}

convertToBoolean(str);
convertToBoolean(bool);
convertToBoolean(num);