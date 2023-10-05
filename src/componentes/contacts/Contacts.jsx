import React from "react";
import Form from "react-bootstrap/Form";
import "../contacts/Contacts.css";

function Contactos() {
  return (
    <div>
      <div className="contacts-container">
        <div className="contact">
          <h1>CONTACTOS</h1>
        </div>
        <div className="formulario-container">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-contenido">Nombre</Form.Label>
              <Form.Control
                type="name"
                placeholder="Nombre"
                className="holder"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-contenido"> Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Escribe tu mail"
                className="holder"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-contenido">
                Example textarea
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Escribir mensaje"
                className="holder"
              />
            </Form.Group>
          </Form>
        </div>
      </div>
      <footer>
        <p>&copy; 2023 Agustin Rack. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Contactos;
