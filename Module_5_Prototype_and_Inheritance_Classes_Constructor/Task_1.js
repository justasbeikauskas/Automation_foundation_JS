//Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal

let animal = {
	move: true
  };
  
  let cat = {
	jumps: true,
	__proto__: animal
  };