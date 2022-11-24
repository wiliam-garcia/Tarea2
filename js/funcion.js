function aplicarCambios(){
    let texto = document.getElementById("texto")
    texto.style.color = document.getElementById('colorLetra').value
    texto.style.background = document.getElementById('colorFondo').value
    texto.style.fontSize = document.getElementById('tamanoFuente').value + 'px'
}

function aplicarDefault(){
    texto.style.color = document.getElementById('colorLetra').value = '#008000'
    texto.style.background = document.getElementById('colorFondo').value = '#FF0000'
    texto.style.fontSize = document.getElementById('tamanoFuente').value = '25px'
}

// Agregar Eventos a los Botones
aplicarDefault()
document.getElementById('btnAplicar').onclick = aplicarCambios
document.getElementById('btnRevertir').onclick = aplicarDefault