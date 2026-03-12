let legth;
let width;

function calculateArea() {
    legth = parseFloat(document.getElementById('legth').value);
    width = parseFloat(document.getElementById('width').value);

let area = legth * width
document.getElementById('result').innerText = `The area of th rectangle is: ${area}`;

}