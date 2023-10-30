import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Uno from "../../assets/Uno.png";
import Dos from "../../assets/Dos.png";
import Tres from "../../assets/Tres.png";
import "../proyectos/Proyectos.css";
import github from "../../assets/github.png";

function MyProyectos() {
  return (
    <div className="proyects-container">
      <h1 className="proyects-titulo">PROYECTS</h1>
      <div className="cards-container">
        <Card style={{ width: "18rem" }} className="style-card">
          <Card.Img src={Uno} alt="Teezy" />
          <Card.Body>
            <Card.Title>Teezy&Co</Card.Title>
            <Card.Text>E-commerce de tienda de ropa</Card.Text>
            <Button
              variant="outline-light"
              className="proyectos-boton"
              href="https://github.com/AgustinRack"
            >
              <img src={github} alt="GitHub" />
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="style-card">
          <Card.Img src={Dos} alt="Inmobiliaria" />
          <Card.Body>
            <Card.Title>House Of Developer</Card.Title>
            <Card.Text>Inmobiliaria</Card.Text>
            <Button
              variant="outline-light"
              className="proyectos-boton"
              href="https://github.com/AgustinRack"
            >
              <img src={github} alt="GitHub" className="btn-primary" />
            </Button>
          </Card.Body>
        </Card>{" "}
        <Card style={{ width: "18rem" }} className="style-card">
          <Card.Img src={Tres} alt="TMDB" />
          <Card.Body>
            <Card.Title>TMDB</Card.Title>
            <Card.Text>Plataforma de peliculas</Card.Text>
            <Button
              variant="outline-light"
              className="proyectos-boton"
              href="https://github.com/AgustinRack"
            >
              <img src={github} alt="GitHub" />
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div></div>
      <div className="linea3"></div>
    </div>
  );
}

export default MyProyectos;
