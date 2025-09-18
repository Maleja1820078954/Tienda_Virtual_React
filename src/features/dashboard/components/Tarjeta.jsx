import "./Tarjeta.css";

function Tarjeta() {
  return (
    <section className="why-us" id="tarjeta">
      <h2>¿Por qué elegirnos?</h2>
      <div className="why-us-container">
        <div className="card">
          <h3>Calidad Garantizada</h3>
          <p>Trabajamos con los mejores proveedores y materiales para ofrecerte productos duraderos.</p>
        </div>
        <div className="card">
          <h3>Entrega Rápida</h3>
          <p>Tu pedido llegará en el menor tiempo posible, sin complicaciones.</p>
        </div>
        <div className="card">
          <h3>Atención Personalizada</h3>
          <p>Estamos para escucharte y ayudarte a encontrar lo que necesitas.</p>
        </div>
      </div>
    </section>
  );
}

export default Tarjeta;
