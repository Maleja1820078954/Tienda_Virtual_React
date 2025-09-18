import React from 'react';
import './Products.css';
import ProductCard from '../components/ProductCard';
import useProducts from '../hooks/useProducts';
import { useSearch } from '../../shared/hooks/useSearch';


function Products() {
  const { products, loading, error } = useProducts();
  const { searchTerm } = useSearch();

  if (loading) {
    return <div className="loading-message">Cargando productos...</div>;
  }

  if (error) {
    return <div>Error al cargar los productos: {error.message}</div>;
  }

  const productsToDisplay = searchTerm
    ? products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  return (
    <section className="productos" id="productos">
      <h2>Catálogo de Productos</h2>
      <div className="productos-grid">
        {productsToDisplay.length > 0 ? (
          productsToDisplay.map(producto => (
            <ProductCard
              key={producto.id}
              id={producto.id}
              title={producto.title}
              price={producto.price}
              description={producto.description}
              category={producto.category}
              image={producto.image}
              rating={producto.rating.rate}
              count={producto.rating.count}
            />
          ))
        ) : (
          <p>No se encontraron productos que coincidan con la búsqueda.</p>
        )}
      </div>
    </section>
  );
}

export default Products;