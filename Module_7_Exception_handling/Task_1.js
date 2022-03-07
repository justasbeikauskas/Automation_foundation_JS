/* In a try catch construction, wrap the code: console.log (a),
let a = 3. And display an error - ‘let must be declared’ before use.*/

try {
    console.log (a);
    let a = 3;
} catch (err) {
    alert("let must be declared");
}   