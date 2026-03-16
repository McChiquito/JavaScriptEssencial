let testText = "El rapido zorro marron salta sobre el perro peresoso"
let startTime, endTime;

function startTest() {
    // Establecer el texto dde prueba
    document.getElementById("inputText").value = testText;

    // Reiniciar la entrada y salida del usuario
    let userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();

    document.getElementById("output").innerHTML = "";

    // Iniciar el temporizador
    startTime = new Date().getTime();
}

function endTest() {
    endTime = new Date().getTime();

    // Deshabilitar la entrada del usuario
    document.getElementById("userInput").readOnly = true;

    // Calcular el tiempo transcurrido y las palabras por minuto (WPM)
    var timeElapsed = (endTime - startTime) / 1000;
    var userTyperdText = document.getElementById("userInput").value;

    // Dividir el texto usando regex para contar las palabras correctamnete
    var typeWords = userTyperdText.split(/\s+/).filter(function (word){
        return word !== "";
        }).length;
    var wpn = 0;
    if(timeElapsed !== 0 && !isNaN(typeWords)){
        wpm = Math.round((typeWords / timeElapsed) * 60);
            }
    
    // Mostrar los resultados
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = 
    "<h2>Resultado de la Pruba de Escritura: </h2>" + 
    "<p> Total de caracteres del texto: " + userTyperdText.length + "<p>" +
    "<p> Palabras Escribidas: " + typeWords + "</p>" +
    "<p>Tiempo Transcurrido: " + timeElapsed.toFixed(2) + " segundos </p>" +
    "<p>Palabras por Minuto (WPM): " + wpm + "</p>";
}