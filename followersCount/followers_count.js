let count = 0; // Initialize count to 0

function increaseCount() {
    count++; // incrementa el conteo en 1
    displayCount(); // Mostrar el conteo
    checkCountValue();
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
    // Mostrar el conteo en el HTML
}

function checkCountValue() {
    if (count === 10) {
        alert ("¡Tu publicidad de Intagram gano 10 seguidores! ¡Felicidades!");
        } else if (count === 20) {
            alert("¡Tu publicacion de Instagram ganó 20 seguidores! ¡Sigue así!");
        }
    }
