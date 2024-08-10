// Función para agregar una nueva materia
function agregarMateria() {
    const materiasContainer = document.getElementById('materias-container');
    const numMaterias = materiasContainer.getElementsByClassName('materia').length + 1;

    const nuevaMateria = document.createElement('div');
    nuevaMateria.className = 'materia';
    nuevaMateria.innerHTML = `
        <h2>Materia ${numMaterias}</h2>
        <input type="text" class="nombre-materia" placeholder="Nombre de la materia" value="Materia ${numMaterias}">
        <div class="form-group">
            <label>Parcial 1:</label>
            <input type="number" class="calificacion parcial1" placeholder="P1" min="0" max="10" step="0.01">
            <label>Parcial 2:</label>
            <input type="number" class="calificacion parcial2" placeholder="P2" min="0" max="10" step="0.01">
            <label>Parcial 3:</label>
            <input type="number" class="calificacion parcial3" placeholder="P3" min="0" max="10" step="0.01">
        </div>
        <p class="promedio-materia">Promedio de la materia: <span>0.00</span></p>
        <button class="btn-quitar" onclick="quitarMateria(this)">Quitar</button>
    `;

    materiasContainer.appendChild(nuevaMateria);
    // Nota: Ya no actualizamos los promedios aquí; solo se actualizan cuando se hace clic en "Calcular Promedio"
}

// Función para quitar una materia
function quitarMateria(boton) {
    const materia = boton.parentNode;
    materia.remove();
    // Nota: Ya no actualizamos los promedios aquí; solo se actualizan cuando se hace clic en "Calcular Promedio"
}

// Función para actualizar los promedios
function actualizarPromedios() {
    const materias = document.getElementsByClassName('materia');
    let sumaPromedios = 0;
    let cantidadMaterias = 0;

    for (let i = 0; i < materias.length; i++) {
        const materia = materias[i];
        const calificacion1 = parseFloat(materia.querySelector('.parcial1').value) || 0;
        const calificacion2 = parseFloat(materia.querySelector('.parcial2').value) || 0;
        const calificacion3 = parseFloat(materia.querySelector('.parcial3').value) || 0;

        if (calificacion1 >= 0 && calificacion1 <= 10 &&
            calificacion2 >= 0 && calificacion2 <= 10 &&
            calificacion3 >= 0 && calificacion3 <= 10) {

            const promedioMateria = (calificacion1 + calificacion2 + calificacion3) / 3;
            sumaPromedios += promedioMateria;
            cantidadMaterias++;

            // Mostrar el promedio de la materia
            materia.querySelector('.promedio-materia span').innerText = promedioMateria.toFixed(2);
        } else {
            // Si las calificaciones son inválidas, muestra 0.00
            materia.querySelector('.promedio-materia span').innerText = '0.00';
        }
    }

    // Mostrar el promedio general
    if (cantidadMaterias === 0) {
        document.getElementById('resultado').innerText = 'Promedio general: 0.00';
    } else {
        const promedioGeneral = sumaPromedios / cantidadMaterias;
        document.getElementById('resultado').innerText = `Promedio general: ${promedioGeneral.toFixed(2)}`;
    }
}
