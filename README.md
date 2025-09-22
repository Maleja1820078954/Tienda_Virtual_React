# Tienda Virtual - Proyecto de ADSO

Este es el proyecto final del curso de **Análisis y Desarrollo de Software (ADSO)** en el SENA. Se trata de una **tienda virtual** desarrollada con React, que consume una API pública para gestionar un catálogo de productos. El proyecto está diseñado con una arquitectura modular y un enfoque en la experiencia de usuario, ofreciendo un **diseño responsive** que se adapta a cualquier dispositivo.

---

## 💻 Tecnologías Utilizadas

-   **Frontend:** React con Vite
-   **Estilos:** CSS
-   **API Pública:** [Fake Store API](https://fakestoreapi.com/products) para la gestión de productos.


---

## ✨ Funcionalidades y Entregables

La aplicación está organizada en una serie de vistas y componentes que cumplen con los requisitos del proyecto, garantizando una experiencia de navegación fluida.

### Vistas Principales

-   **Inicio:** La página de bienvenida de la tienda.
-   **Productos:** Muestra el catálogo completo de productos obtenidos de la API.
-   **Búsqueda de Productos:** Permite a los usuarios filtrar productos por nombre o descripción.
-   **Carrito de Compras:** Funcionalidad para agregar, visualizar y gestionar los productos seleccionados antes de la compra.
-   **Nosotros:** Sección informativa sobre la tienda y el proyecto.
-   **Contacto:** Una página de contacto diseñada con CSS, preparada para futuras integraciones.

### Manejo de la Interfaz

-   **Estados Visibles:** La aplicación muestra mensajes claros de estado para el usuario:
    -   `"Cargando productos..."` mientras se realiza la consulta a la API.
    -   Un **mensaje de error claro** si la solicitud a la API falla.
-   **Componentes Reutilizables:** Se utilizan componentes modulares como `Header` y `Footer` para una arquitectura escalable y de fácil mantenimiento.
-   **Navegación Fluida:** La navegación entre las vistas es funcional y directa, permitiendo al usuario moverse sin problemas por la tienda.
-   **Diseño Responsive:** La interfaz se adapta perfectamente tanto a **dispositivos móviles como de escritorio** gracias al uso de CSS.

---

## 🚀 Pasos para la Ejecución del Proyecto

Para clonar y ejecutar este proyecto en tu entorno local, sigue los siguientes pasos.

1.  **Clonar el Repositorio**
    Abre tu terminal y ejecuta el siguiente comando para descargar el proyecto:
    ```bash
    git clone [https://github.com/Maleja1820078954/Tienda_Virtual_React.git](https://github.com/Maleja1820078954/Tienda_Virtual_React.git)
    ```

2.  **Instalar Dependencias**
    Navega al directorio del proyecto e instala todas las dependencias necesarias:
    ```bash
    cd Tienda_Virtual_React
    npm install
    ```

3.  **Iniciar la Aplicación**
    Ejecuta el siguiente comando para iniciar el servidor de desarrollo y ver el proyecto en tu navegador:
    ```bash
    npm run dev
    ```

---

## 📄 Repositorio

-   **Enlace al Repositorio:** `https://github.com/Maleja1820078954/Tienda_Virtual_React.git`
