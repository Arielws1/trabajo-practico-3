const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operacion = document.getElementById("operacion");
const calcularBtn = document.getElementById("calcular");
const resultadoDiv = document.getElementById("resultado");

// Función para verificar si se debe deshabilitar el botón
function verificarDivision() {
    if (operacion.value === "division" && parseFloat(num2.value) === 0) {
        calcularBtn.disabled = true;
    } else {
        calcularBtn.disabled = false;
    }
}

// Evento para deshabilitar el botón si corresponde
num2.addEventListener("input", verificarDivision);
operacion.addEventListener("change", verificarDivision);

// Calcular operación
calcularBtn.addEventListener("click", () => {
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    let resultado;

    switch (operacion.value) {
        case "suma":
            resultado = a + b;
            break;
        case "resta":
            resultado = a - b;
            break;
        case "multiplicacion":
            resultado = a * b;
            break;
        case "division":
            resultado = a / b;
            break;
        default:
            resultado = "Operación no válida";
    }

resultadoDiv.textContent = `Resultado: ${resultado}`;
});
