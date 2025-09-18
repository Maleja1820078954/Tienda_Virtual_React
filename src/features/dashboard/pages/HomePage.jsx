import React from 'react';
import './HomePage.css';
import ProductCard from '../../products/components/ProductCard';
import Tarjeta from '../components/Tarjeta';
import { Link } from 'react-router-dom';
import useProducts from '../../products/hooks/useProducts'; 


function HomePage() {
  const { products, loading, error } = useProducts(); 


  if (loading) {
    return <p>Cargando productos destacados...</p>;
  }

  if (error) {
    return <p>Error al cargar los productos: {error.message}</p>;
  }
  const productosDestacados = products.slice(0, 4);

  return (
    <>
     <section className="section" id="inicio">
        <div className="section-content">
          <h2>Descubre lo Mejor en Moda, Joyería y Tecnología</h2>
          <p>
            Explora nuestra colección cuidadosamente seleccionada de ropa, joyas y productos electrónicos.
            Encuentra desde prendas modernas y cómodas, hasta accesorios elegantes y tecnología de alto rendimiento,
            todo pensado para adaptarse a tu estilo y necesidades.
          </p>
        </div>
      </section>

      <section className="productos-home" id="productos">
        <h2>Productos Destacados</h2>
        <div className="productos-grid">
          {productosDestacados.map(producto => (
            <ProductCard
              key={producto.id}
              title={producto.title}
              price={producto.price}
              description={producto.description}
              category={producto.category}
              image={producto.image}
              rating={producto.rating.rate}
              count={producto.rating.count}
            />
          ))}
        </div>
        <Link to="/productos" className="ver-mas-btn">
          Ver más productos
        </Link>
      </section>

      <Tarjeta />

      <section className="faq-section">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h4>¿Cómo puedo realizar una compra?</h4>
            <p>Solo debes agregar los productos al carrito y seguir el proceso de pago. Es rápido y seguro.</p>
          </div>

          <div className="faq-item">
            <h4>¿Cuánto tarda el envío?</h4>
            <p>El tiempo de entrega depende de tu ubicación, pero normalmente es entre 2 y 5 días hábiles.</p>
          </div>

          <div className="faq-item">
            <h4>¿Puedo devolver un producto?</h4>
            <p>Sí, tienes hasta 15 días para solicitar la devolución si el producto no cumple tus expectativas.</p>
          </div>

          <div className="faq-item">
            <h4>¿Qué métodos de pago aceptan?</h4>
            <p>Aceptamos tarjetas de crédito, débito y pagos electrónicos.</p>
          </div>

          <div className="faq-item">
            <h4>¿Hacen envíos internacionales?</h4>
            <p>Sí, realizamos envíos a varios países. El costo y tiempo de entrega varían según la ubicación.</p>
          </div>

          <div className="faq-item">
            <h4>¿Los productos tienen garantía?</h4>
            <p>Sí, todos nuestros productos cuentan con garantía contra defectos de fábrica.</p>
          </div>

          <div className="faq-item">
            <h4>¿Cómo puedo rastrear mi pedido?</h4>
            <p>Una vez realizado el envío, recibirás un código de seguimiento para revisar el estado en línea.</p>
          </div>

          <div className="faq-item">
            <h4>¿Puedo cambiar la dirección de entrega después de comprar?</h4>
            <p>Sí, puedes hacerlo antes de que el pedido sea despachado. Contáctanos lo antes posible.</p>
          </div>

          <div className="faq-item">
            <h4>¿Tienen descuentos o promociones?</h4>
            <p>Frecuentemente lanzamos promociones especiales y descuentos. ¡Mantente atento a nuestras redes y newsletter!</p>
          </div>
          
          <div className="faq-item">
            <h4>¿Qué hago si mi pedido llega dañado?</h4>
            <p>Ponte en contacto con nuestro servicio al cliente enviando fotos del producto, y te ayudaremos con el cambio o reembolso.</p>
          </div>

        </div>
      </section>
    </>
  );
}

export default HomePage;