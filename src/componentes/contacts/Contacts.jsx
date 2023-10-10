import React from "react";
import "../contacts/Contacts.css";
import linkedin from "../../assets/contactos/linkedin.png";
import gitHub from "../../assets/contactos/gitHub.png";
import whatsApp from "../../assets/contactos/whatsApp.png";
import email from "../../assets/contactos/email.png";

function Contactos() {
  return (
    <div>
      <div className="contacts-container">
        <div className="contact">
          <h1 className="contacto">CONTACTOS</h1>
          <div className="contactos-icon">
            <div>
              <img src={email} alt="email" className="linkedin" />
            </div>
            <div>
              <img src={linkedin} alt="linkedin" className="linkedin" />
            </div>
            <div>
              <img src={gitHub} alt="gitHub" className="linkedin" />
            </div>
            <div>
              <img src={whatsApp} alt="whatsApp" className="linkedin" />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>&copy; 2023 Agustin Rack. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Contactos;
