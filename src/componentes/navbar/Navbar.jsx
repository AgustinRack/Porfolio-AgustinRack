import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

function MyNavbar() {
  return (
    <Navbar expand="sm" className="color-navbar fixed-top">
      <Container>
        <Nav.Link className="colorLetras1" href="/#navbar">
          Agustin Rack
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <Nav.Link className="colorLetras" href="/#about-me">
              About Me
            </Nav.Link>
            <Nav.Link className="colorLetras" href="/#proyects">
              Projetct
            </Nav.Link>
            <Nav.Link className="colorLetras" href="/#skill">
              Skill
            </Nav.Link>
            <Nav.Link className="colorLetras" href="/#contactos">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className="linea"></div>
    </Navbar>
  );
}

export default MyNavbar;
