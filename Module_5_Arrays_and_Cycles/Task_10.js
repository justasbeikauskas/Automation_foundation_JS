// Implement a loop that prints odd numbers to the console

let number = [1,2,3,6,7,8,3,4,5,6,10,12];

const isOdd = num => {
    for(let i = 0; i < num.length; i++)
        if(num[i] % 2 != 0) {
            console.log(`Number ${num[i]} is Odd`);
        }
}
