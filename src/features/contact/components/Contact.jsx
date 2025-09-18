import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  // 1. Define el estado inicial para cada campo del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });

  // 2. Maneja los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 3. Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Aquí iría el código para enviar los datos al backend
    console.log("Datos del formulario a enviar:", formData);
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-container">
        <h2>Contáctanos</h2>
        <p>
          ¿Tienes alguna duda o sugerencia? Estamos aquí para ayudarte. Escríbenos
          y te responderemos a la brevedad.
        </p>

        {/* 4. Asocia las funciones al formulario y los inputs */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Envíanos un mensaje</h3>
          <input 
            type="text" 
            placeholder="Nombre" 
            name="nombre" // ¡Importante! Añade el atributo 'name'
            value={formData.nombre}
            onChange={handleChange}
            required 
          />
          <input 
            type="email" 
            placeholder="Correo electrónico" 
            name="correo" // ¡Importante! Añade el atributo 'name'
            value={formData.correo}
            onChange={handleChange}
            required 
          />
          <input 
            type="text" 
            placeholder="Asunto" 
            name="asunto" // ¡Importante! Añade el atributo 'name'
            value={formData.asunto}
            onChange={handleChange}
            required 
          />
          <textarea 
            placeholder="Mensaje" 
            name="mensaje" // ¡Importante! Añade el atributo 'name'
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </form>

        <Link to="/" className="back-button">⬅ Volver al inicio</Link>
      </div>
    </div>
  );
}

export default Contact;