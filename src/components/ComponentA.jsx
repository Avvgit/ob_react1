import React from 'react';
import ComponentB from './ComponentB';
import Contact from '../models/contact';

class ComponentA extends React.Component {
  render() {
    const contacto = new Contact('Ale', 'Vera', 'avv@example.com', true);

    return (
      <div>
        <h1>{contacto.nombre} {contacto.apellido}</h1>
        <p>Email: {contacto.email}</p>
        <ComponentB contacto={contacto} />
      </div>
    );
  }
}

export default ComponentA;
