//  Create a car object, add a color property to it with the value equals 'black'

let car = {
	color: "black"
}

//Change the color property of the car object to 'green'
car.color = "green";

// Add the power property to the car object, which is a function and displays the engine power to the console
car.power = n => alert(`"Car engine power is: ${n}"`);

car.power(60);