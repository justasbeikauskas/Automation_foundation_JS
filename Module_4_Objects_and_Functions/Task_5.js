/* Your name is saved in the payment terminal, write a function to define the name in the terminal 
(if you entered your name, then hello + name, if not, then there is no such name)*/

let terminal = {
	name: "Justas"
}

function nameDef() {
	let item = prompt("Please input your name", "Your name");
	if (item == "Justas") {
		alert(`Welcome ${item}`);
	} else { 
		alert("There is no such name");
	}
}

nameDef()

