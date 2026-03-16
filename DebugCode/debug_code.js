function performOperation() {
    // Get user input from fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if(!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
        let result2 = suma(num1, num2);
        displayResult2(result2);
        let result3 = resta(num1, num2);
        displayResult3(result3);
        let result1 = multiply(num1, num2);
        // Display the result
        displayResult(result1);
    } else {
        displayResult('Please enter valid numbers');
    }
}
    function multiply(a, b) {
        // Introduce a bugger statement to pause execution
        debugger;
        // Multiply the numbers
        return a * b;
    }

    function suma(a, b) {
        debugger;
        return a + b;

    }
    function resta(a, b) {
        debugger;
        return a - b;
    }

    function displayResult(result1) {
        // Display the result in the paragraph element
        const resultElement = document.getElementById('result1');
        resultElement.textContent = `The result is: ${result1}`;
    }

    function displayResult2(result2) {
        const resultElement = document.getElementById('result2');
        resultElement.textContent = `El resultado de tu suma es: ${result2}`;
    }

    function displayResult3(result3) {
        const resultElement = document.getElementById('result3');
        resultElement.textContent = `El resultado de tu resta es: ${result3}`;
    }