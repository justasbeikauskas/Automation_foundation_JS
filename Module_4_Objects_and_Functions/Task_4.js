//Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples

let warehouse = {
	pears: 500,
	apples: 20
}

function addStock(){
	let item = prompt("Accept to warehouse pears or apples?", "pears");
	let itemQuantity;
	
	if(item == "apples" || item == "Apples") {
		itemQuantity = +prompt("Enter the quantity of apples to be accepted by warehouse", "0");

        if(isFinite(itemQuantity) == true) {
            warehouse.apples += itemQuantity;
            alert(`Amount of  ${itemQuantity} apples was added to the warehouse, current total amount is: ${warehouse.apples}`);
        } else {
            alert("Only numbers can be added");
        }
		
	} else if (item == "pears" || item == "Pears") {
		itemQuantity = +prompt("Enter the quantity of apples to be accepted by warehouse", "0");

        if(isFinite(itemQuantity) == true) {
            warehouse.pears += itemQuantity;
            alert(`Amount of  ${itemQuantity} pears was added to the warehouse, current total amount is: ${warehouse.pears}`);
        } else {
            alert("Only numbers can be added");
        }
	} else if (item == null) {
		alert("Action canceled");
	} else {
		alert("Warehouse accepts only apples or pears");
	};
}


addStock()