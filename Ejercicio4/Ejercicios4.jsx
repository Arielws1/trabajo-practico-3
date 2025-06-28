function App() {
    const [habilitadoIzquierdo, setHabilitadoIzquierdo] = React.useState(true);

    const manejarClickIzquierdo = () => {
    setHabilitadoIzquierdo(false);
    };

    const manejarClickDerecho = () => {
    setHabilitadoIzquierdo(true);
    };

return (
    <div>
        <button onClick={manejarClickIzquierdo} disabled={!habilitadoIzquierdo}>
        Izquierdo
        </button>

        <button onClick={manejarClickDerecho} disabled={habilitadoIzquierdo}>
        Derecho
        </button>
    </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
