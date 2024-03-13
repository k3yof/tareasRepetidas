document.addEventListener('DOMContentLoaded', () => {
    const tabla = document.getElementById('gridDatos');
    const buscar = document.createElement('input');
    buscar.setAttribute('placeholder', 'Introduce tu búsqueda');
    buscar.setAttribute('type', 'text');
    tabla.parentElement.prepend(buscar);

    buscar.addEventListener('input', evento => {
        const filtro = evento.target.value.toLowerCase();
        const filas = tabla.querySelectorAll('.fila');

        filas.forEach(fila => {
            let coincide = false;
            fila.querySelectorAll('td').forEach(celda => {
                const texto = celda.textContent.toLowerCase();
                if (texto.includes(filtro)) {
                    coincide = true;
                }
            });

            if (coincide) {
                fila.style.display = '';
            } else {
                fila.style.display = 'none';
            }
        });
    });

    const cantidadFilas = 3000;
    const cantidadColumnas = 5;
    const lorem = 'lorem3';

    for (let i = 0; i < cantidadFilas; i++) {
        const fila = document.createElement('tr');
        fila.classList.add('fila');

        for (let j = 0; j < cantidadColumnas; j++) {
            const celda = document.createElement('td');
            celda.textContent = lorem;
            fila.appendChild(celda);
        }

        tabla.appendChild(fila);
    }
});
