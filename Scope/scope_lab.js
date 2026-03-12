//ambito global
var globalVar = "Soy una variable global";
let globalLet = "Tambine soy global, pero con ambito de let";
const globalConst = "Soy una constante global";


{
    // ambito de bloque
    var blockVar = "Soy un var con ambito de bloque";  
    let blockLet = "Soy un let con ambito de bloque";
    const blockConst = "Soy un const con ambito de bloque";
}

// alcance global
console.log(globalVar); // salida: "Soy una variable global"
console.log(globalLet); // salida: "Tambine soy global, pero con ambito de let"
console.log(globalConst); // salida: "Soy una constante global"

// block scope
// console.log(blockVar); // salida: "Soy un var con ambito de bloque"
// console.log(blockLet); // ReferenceError: blockLet is not defined

function show() {
    var functionVar = "Soy una var con alcance de bloque"
    let functionLet = "Soy un let con alcance de bloque"
    const functionConst = "Soy un const con alcance de bloque"
}

show();

// console.log(functionVar); // Lanza ReferenceError
// console.log(functionLet); // Lanza ReferenceError
// console.log(functionConst); // Lanza ReferenceError

{
    let blockLet2 = "Soy un let con ambito de bloque";
    const blockConst2 = "Soy un const con ambito de bloque";
    var blockVar2 = "Soy un var con ambito de bloque";
}