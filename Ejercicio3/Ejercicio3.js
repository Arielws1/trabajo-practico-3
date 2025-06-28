document.addEventListener('DOMContentLoaded', function () {
    obtenerTareas();
});

function obtenerTareas() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(tareas => mostrarTareasCompletadas(tareas))
        .catch(error => console.error('Error al obtener las tareas:', error));
}

function mostrarTareasCompletadas(tareas) {
    const lista = document.getElementById('tareaLista');
    lista.innerHTML = '';

    const tareasCompletadas = tareas.filter(tarea => tarea.completed === true);

    tareasCompletadas.forEach(tarea => {
        const item = document.createElement('li');
        item.className = 'completada';
        item.textContent = `#${tarea.id} - ${tarea.title}`;
        lista.appendChild(item);
    });
}