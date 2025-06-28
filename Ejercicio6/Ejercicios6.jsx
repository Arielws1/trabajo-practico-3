function App() {
    const [peso, setPeso] = React.useState("");
    const [altura, setAltura] = React.useState("");
    const [imc, setImc] = React.useState(null);
    const [clasificacion, setClasificacion] = React.useState("");

    const calcularIMC = () => {
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);

        if (!pesoNum || !alturaNum || alturaNum === 0) {
            setImc(null);
            setClasificacion("");
            return;
        }

        const alturaMetros = alturaNum / 100;
        const imcCalculado = pesoNum / (alturaMetros * alturaMetros);
        const imcFinal = imcCalculado.toFixed(2);
        setImc(imcFinal);

        if (imcFinal < 18.5) {
            setClasificacion("amarillo");
        } else if (imcFinal >= 18.5 && imcFinal <= 24.9) {
            setClasificacion("verde");
        } else if (imcFinal >= 25 && imcFinal <= 29.9) {
            setClasificacion("naranja");
        } else {
            setClasificacion("rojo");
        }
    };

    const obtenerMensaje = () => {
        switch (clasificacion) {
            case "amarillo": {
                return "Nivel bajo";
            } 
                
            case "verde": {
                return "Nivel normal";
            }
                
            case "naranja":{
                return "Nivel de sobrepeso";
            }
                
            case "rojo":{
                return "Nivel de obesidad";
            }
                
            default:{
                return "";
            }
                
        }
    };

    return (
        <div>
            <h2>Calculadora de IMC</h2>

            <input
                type="number"
                placeholder="Peso en kg"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
            />

            <input
                type="number"
                placeholder="Altura en cm"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
            />

            <button onClick={calcularIMC}>Calcular IMC</button>

            {imc && (
                <div className={`resultado ${clasificacion}`}>
                    Tu IMC es: {imc} – {obtenerMensaje()}
                </div>
            )}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
