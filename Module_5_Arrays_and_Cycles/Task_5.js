//Sort the array [1,6,7,8,3,4,5,6] in descending order

let numbers = [1,6,7,8,3,4,5,6,10,12];

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let sortedNumbersDesc = numbers.sort(compareNumeric);