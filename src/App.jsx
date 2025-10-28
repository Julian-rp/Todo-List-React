import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <nav>
          <ul>
            <li>INICIO</li>
            <li>PROGRAMAS</li>
            <li>CONTACTO</li>
          </ul>
        </nav>
        <h2>Servicio Nacional de Aprendizaje</h2>
        <h3>CGMLTI - Bogotá</h3>
      </header>

      {/* Programas */}
      <section className="programas">
        <div className="programa">ADSO</div>
        <div className="programa">REDES DE DATOS</div>
        <div className="programa">ANIMACIÓN 3D</div>
        <div className="programa">LOGÍSTICA</div>
        <div className="programa">MERCADO</div>
        <div className="programa">SISTEMAS</div>
      </section>

      {/* Contacto */}
      <section className="contacto">
        <h3>CONTACTO</h3>
        <form>
          <input type="text" placeholder="NOMBRES" />
          <input type="text" placeholder="APELLIDOS" />
          <textarea placeholder="MENSAJE"></textarea>
          <button type="submit">ENVIAR</button>
        </form>
      </section>
    </div>
  );
}

export default App;
