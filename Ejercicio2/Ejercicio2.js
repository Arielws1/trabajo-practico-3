let palabras = [
    "Manzana", "Banana", "Naranja", "Pera"
];

function filtrarPalabras() {
    const entradaInput = document.getElementById('filtro');
    const entrada = entradaInput.value.trim();
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = '';

    if (entrada === '') {
        mensaje.textContent = 'ingrese una palabra para filtrar.';
        return;
    }

    if (!palabras.some(p => p.toLowerCase() === entrada.toLowerCase())) {
        palabras.push(entrada);
    }


    const resultado = palabras.filter(p =>
        p.toLowerCase().includes(entrada.toLowerCase())
    );

    mostrarLista(resultado);
    entradaInput.value = ''; 
    }

function mostrarLista(lista) {
    const ul = document.getElementById('listaPalabras');
    ul.innerHTML = '';

    if (lista.length === 0) {
        ul.innerHTML = '<li>No se encuentra coincidencias.</li>';
        return;
    }

    lista.forEach(p => {
        const li = document.createElement('li');
        li.textContent = p;
        ul.appendChild(li);
    });
}