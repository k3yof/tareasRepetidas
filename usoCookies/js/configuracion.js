document.addEventListener('DOMContentLoaded', function () {
    var guardarBtn = document.getElementById('guardarConfig');
    guardarBtn.addEventListener('click', guardarConfiguracion);
});

function obtenerCookie(name) {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();

        if (cookie.indexOf(name + '=') === 0) {
            return cookie.substring(name.length + 1);
        }
    }

    return null;
}

function guardarConfiguracion() {
    var color = document.getElementById('color').value;
    var idioma = document.getElementById('idioma').value;

    document.cookie = "color=" + color + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    document.cookie = "idioma=" + idioma + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

    window.location.href = "pagina1.html";
}
