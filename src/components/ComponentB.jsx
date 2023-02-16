import React, { useState } from 'react';

const ComponentB = (props) => {
  const [conectado, setConectado] = useState(props.contacto.conectado);

  const handleConectarClick = () => {
    setConectado(true);
  }

  const handleDesconectarClick = () => {
    setConectado(false);
  }

  const contacto = props.contacto;

  return (
    <div>
      <h1>{contacto.nombre} {contacto.apellido}</h1>
      <p>Email: {contacto.email}</p>
      {conectado
        ? <div>
            <button onClick={handleDesconectarClick}>Desconectar</button>
            <p>Contacto En Línea</p>
          </div>
        : <div>
            <button onClick={handleConectarClick}>Conectar</button>
            <p>Contacto No Disponible</p>
          </div>
      }
    </div>
  );
}

export default ComponentB;
