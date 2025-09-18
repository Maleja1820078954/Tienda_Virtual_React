import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainLayout() {
  return (
    <div>
      <Header />
      <main>
        {/*
          <Outlet /> renderizará la ruta anidada (ej. HomePage, Products)
          en este lugar.
        */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;