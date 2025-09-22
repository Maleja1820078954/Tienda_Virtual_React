import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import "./Contact.css";

function Contact() {
  const form = useRef();

  // 1. Usar el estado de React para controlar los valores de los inputs
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: '',
  });

  const sendEmail = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    emailjs
      .sendForm('service_69d3pxb', 'template_qlb4gcb', form.current, {
        publicKey: 'iPEFzdN5ODaWQ4o3C',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // 2. Limpiar los campos después de un envío exitoso
          setFormData({
            nombre: '',
            correo: '',
            asunto: '',
            mensaje: '',
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  // 3. Crear una función para manejar los cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-container">
        <h2>Contáctanos</h2>
        <p>
          ¿Tienes alguna duda o sugerencia? Estamos aquí para ayudarte. Escríbenos
          y te responderemos a la brevedad.
        </p>
        <form ref={form} onSubmit={sendEmail} className="field">
          <h3>Envíanos un mensaje</h3>
          {/* 4. Usar la función de cambio en cada input */}
          <input 
            type="text" 
            placeholder="Nombre" 
            name="nombre" 
            value={formData.nombre} 
            onChange={handleInputChange} 
            required 
          />
          <input 
            type="email" 
            placeholder="Correo electrónico" 
            name="correo" 
            value={formData.correo} 
            onChange={handleInputChange} 
            required 
          />
          <input 
            type="text" 
            placeholder="Asunto" 
            name="asunto" 
            value={formData.asunto} 
            onChange={handleInputChange} 
            required 
          />
          <textarea 
            placeholder="Mensaje" 
            name="mensaje" 
            value={formData.mensaje} 
            onChange={handleInputChange} 
            required
          />
          <button type="submit">Enviar</button>
        </form>
        <Link to="/" className="back-button">⬅ Volver al inicio</Link>
      </div>
    </div>
  );
};

export default Contact;