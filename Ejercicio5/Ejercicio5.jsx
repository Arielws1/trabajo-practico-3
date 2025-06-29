function App() {
    const [num1, setNum1] = React.useState("");
    const [num2, setNum2] = React.useState("");
    const [operacion, setOperacion] = React.useState("suma");
    const [resultado, setResultado] = React.useState(null);

    const manejarCalculo = () => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        let res = "";

        switch (operacion) {
            case "suma":
                res = a + b;
                break;
            case "resta":
                res = a - b;
                break;
            case "multiplicacion":
                res = a * b;
                break;
            case "division":
                res = a / b;
                break;
            default:
                res = "Operación no permitida.";
        }

        setResultado(`Resultado: ${res}`);
    };

    // Condición especial: deshabilitar si división y segundo número es 0
    const deshabilitarBoton =
        operacion === "division" && parseFloat(num2) === 0;

    return (
        <div>
            <h2>Calculadora</h2>

            <input
                type="number"
                placeholder="Número 1"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />

            <input
                type="number"
                placeholder="Número 2"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />

            <select
                value={operacion}
                onChange={(e) => setOperacion(e.target.value)}
            >
                <option value="suma">Suma</option>
                <option value="resta">Resta</option>
                <option value="multiplicacion">Multiplicación</option>
                <option value="division">División</option>
            </select>

            <button onClick={manejarCalculo} disabled={deshabilitarBoton}>
                Calcular
            </button>

            {deshabilitarBoton && (
                <div style={{ color: "red", marginTop: "10px" }}>
                    No se puede dividir por cero.
                </div>
            )}

            {resultado && <div id="resultado">{resultado}</div>}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
