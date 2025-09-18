import { useState, useEffect } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // La URL ahora es local, el proxy la redirigirá a la API
        const response = await fetch('/api/products'); 
        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;