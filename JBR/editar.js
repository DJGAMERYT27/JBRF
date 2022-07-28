function escribe() {
    escribir = document.getElementById("caja")
    miTitulo1 = "<h3>" + document.rellenar.titulo1.value + "</h3>"
    miTitulo2 = "<p>" + document.rellenar.titulo2.value + "</p>"
    miTexto = "<p>" + document.rellenar.texto.value + "</p>"
    escribir.innerHTML = miTitulo1 + miTitulo2 + miTexto
    }
window.onload = function() {
document.rellenar.ver.onclick = escribe
} 