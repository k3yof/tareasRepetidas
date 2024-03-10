document.addEventListener("DOMContentLoaded", function () {
    var idioma = obtenerCookie("idioma");
    var tituloPagina = document.getElementById("tituloPagina");

    if (idioma === "es") {
        tituloPagina.innerHTML = "Página Española";
    } else if (idioma === "fr") {
        tituloPagina.innerHTML = "Page French";
    } else if (idioma === "ig") {
        tituloPagina.innerHTML = "Page English";
    }

    const color = obtenerCookie('color');
    if (color === 'negro') {
        activarNegro();
    } else {
        activarBlanco();
    }
});

function activarNegro() {
    document.body.classList.add('negro');
}

function activarBlanco() {
    document.body.classList.remove('negro');
}

function irAPagina(numero) {
    window.location.href = "pagina" + numero + ".html";
}


function irAConfiguracion() {
    window.location.href = "index.html";
}
