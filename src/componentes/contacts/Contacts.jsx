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
          <h1 className="contacto">CONTACTS</h1>
          <div className="contactos-icon">
            <div>
              <a href="https://outlook.live.com/mail/0/">
                <img src={email} alt="email" className="linkedin" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/agustinrack-desarrollador-fullstack/">
                <img src={linkedin} alt="linkedin" className="linkedin" />
              </a>
            </div>
            <div>
              <a href="https://github.com/AgustinRack">
                <img src={gitHub} alt="gitHub" className="linkedin" />
              </a>
            </div>
            <div>
              <a href="https://web.whatsapp.com/">
                <img src={whatsApp} alt="whatsApp" className="linkedin" />
              </a>
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
