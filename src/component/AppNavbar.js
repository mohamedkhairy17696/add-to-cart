import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { langContext } from "../contexts/language";
const AppNavbar = () => {
  const cart = useSelector((state) => state.cart);
  const { lang } = useContext(langContext);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="navbar-brand">
                Products
              </Link>
              <Link to="/cart" className="navbar-brand">
                Cart-{cart.length}
              </Link>
              <Link to="/lang" className="navbar-brand">
                Lang-{lang}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
