import { Routes, Route } from 'react-router-dom';
import MainLayout from './features/shared/layouts/MainLayout.jsx';
import HomePage from './features/dashboard/pages/HomePage.jsx';
import ProductPage from './features/products/pages/ProductPage.jsx';
import NosotrosPage from './features/nosotros/pages/NosotrosPage.jsx';
import ContactPage from './features/contact/pages/ContactPage.jsx';
import Tarjeta from './features/dashboard/components/Tarjeta.jsx';
import { CartProvider } from './features/shared/contexts/CartContext'; 
import CartPage from './features/cart/pages/CartPage'; 
import { SearchProvider } from './features/shared/contexts/SearchProvider';


function App() {
  return (
    <CartProvider>
       <SearchProvider>
        <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="productos" element={<ProductPage />} />
          <Route path="nosotros" element={<NosotrosPage />} />
          <Route path="tarjeta" element={<Tarjeta />} />
        </Route>

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        </Routes>
       </SearchProvider>      
    </CartProvider>
  );
}

export default App;
