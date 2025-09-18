import React from 'react';
import { useCart } from '../../shared/hooks/useCart';
import './ProductCard.css';

function ProductCard({ id, title, price, description, category, image, rating, count }) {
  const { addToCart } = useCart();

  // Función para resumir la descripción
  const summarizeDescription = (desc, maxLength = 80) => {
    if (desc.length > maxLength) {
      return desc.substring(0, maxLength) + '...';
    }
    return desc;
  };

  const product = {
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
    count,
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="producto-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="categoria">{category}</p>
      {/* Se usa la función para resumir la descripción */}
      <p className="descripcion">{summarizeDescription(description, 50)}</p>
      <p className="precio">${price}</p>
      <div className="valoracion-carrito">
        <p className="valoracion">⭐ {rating} ({count} opiniones)</p>
        <button className="btn-agregar-carrito" onClick={handleAddToCart}>
          🛒
        </button>
      </div>
    </div>
  );
}

export default ProductCard;