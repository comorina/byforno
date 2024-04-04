import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Navabar/style.css";
import { NavDropdown } from "react-bootstrap";

function NavabarComponent() {
  return (
    <div style={{height: 'fit-content'}} className="fixed-top">
      <Navbar expand="lg" bg="black" data-bs-theme="dark"  style={{ paddingLeft: "5%"}}>
          <Navbar.Brand href="#home" className="logo-name">
            ByForno
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navItem-hover-effect">
              <Nav.Link href="#home" className="navItem">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="navItem">
                about
              </Nav.Link>
              <Nav.Link href="#services" className="navItem">
                services
              </Nav.Link>
              <Nav.Link href="#works" className="navItem">
                works
              </Nav.Link>
              <Nav.Link href="#contactus" className="navItem">
                contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavabarComponent;
