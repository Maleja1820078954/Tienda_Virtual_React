import React from "react";
import "./Nosotros.css";
import NosotrosPage from "../pages/NosotrosPage";

function Nosotros() {
  const cards = [
    {
      title: "Significado del Nombre",
      description: "NovaShop representa innovación y calidad en productos de moda, joyería y tecnología, buscando siempre ofrecer lo mejor a nuestros clientes.",
      icon: "🌟",
    },
    {
      title: "Misión",
      description: "Brindar productos seleccionados cuidadosamente, combinando estilo, funcionalidad y calidad, para mejorar la experiencia de compra de nuestros clientes.",
      icon: "🎯",
    },
    {
      title: "Visión",
      description: "Ser una tienda reconocida por su excelencia, innovación y confianza, consolidándonos como referente en moda, joyería y tecnología a nivel nacional.",
      icon: "🚀",
    },
  ];

  return (
    <div className="nosotros-page">
      <section className="nosotros-section" id="nosotros">
        <h2>Nosotros</h2>
        <div className="nosotros-cards">
          {cards.map((card, index) => (
            <div className="nosotros-card" key={index}>
              <div className="icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Nueva sección: Nuestra Historia --- */}
      <section className="historia-section">
        <h2>Nuestra Historia</h2>
         <p>
            NovaShop nació de la pasión por crear un espacio donde cada persona pueda 
            encontrar productos que se adapten a su estilo de vida moderno. 
            Lo que comenzó como un pequeño proyecto, inspirado en la creatividad y 
            la innovación, se fue transformando en una tienda online que busca 
            marcar la diferencia en cada detalle.
          </p>
          <p>
            Desde nuestros primeros pasos, entendimos que no se trataba solo de vender, 
            sino de ofrecer experiencias. Por eso, cada producto que encuentras en 
            nuestro catálogo ha sido seleccionado cuidadosamente, combinando calidad, 
            diseño y accesibilidad. 
          </p>
          <p>
            Con el tiempo, NovaShop ha crecido gracias a la confianza de nuestros clientes 
            y al compromiso de un equipo que trabaja con dedicación para brindarte lo mejor. 
            Hoy, somos más que una tienda: somos una comunidad que comparte el deseo de 
            innovar, sorprender y hacer que cada compra sea inolvidable.
          </p>
      </section>

      {/* --- Nueva sección: Testimonios --- */}
      <section className="testimonios-section">
        <h2>Lo que dicen nuestros clientes</h2>
        <div className="testimonios-container">
          <div className="testimonio-card">
            <p>"Me encanta la calidad de los productos. ¡Mi nueva joya es perfecta!"</p>
            <span>— Ana G.</span>
          </div>

          <div className="testimonio-card">
            <p>"El servicio es excelente y el envío fue muy rápido. ¡Recomiendo NovaShop!"</p>
            <span>— Luis C.</span>
          </div>

          <div className="testimonio-card">
            <p>"La atención al cliente fue increíble, resolvieron todas mis dudas con paciencia."</p>
            <span>— Camila R.</span>
          </div>

          <div className="testimonio-card">
            <p>"Los precios son justos y la calidad superó mis expectativas. Volveré a comprar."</p>
            <span>— Jorge M.</span>
          </div>

          <div className="testimonio-card">
            <p>"Me sorprendió la variedad de productos, encontré justo lo que buscaba."</p>
            <span>— Valentina P.</span>
          </div>

          <div className="testimonio-card">
            <p>"La presentación del pedido fue impecable, se nota el cuidado en cada detalle."</p>
            <span>— Andrés L.</span>
          </div>

          <div className="testimonio-card">
            <p>"Definitivamente NovaShop se ha convertido en mi tienda favorita online."</p>
            <span>— Sofía T.</span>
          </div>

          <div className="testimonio-card">
            <p>"Me fascina NovaShop, ya que es una pagina responsive muy dinámica."</p>
            <span>— Fernanda L.</span>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Nosotros;