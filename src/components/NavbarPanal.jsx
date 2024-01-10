import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavbarPanal = () => {
  const cartProducts = useSelector(state => state.cart)



  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container fluid>
        <Navbar.Brand href="#">Shopify</Navbar.Brand>
       <Nav>
            <Nav.Link to="/" as={Link}>
              Product
            </Nav.Link>
            {/* <Nav.Link href="#action2">Link</Nav.Link> */}
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
            Link
          </Nav.Link> */}
          </Nav>
          <Navbar.Toggle  />
       
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                <Nav.Link to="/carts" as={Link}> My Cart {cartProducts.length}</Nav.Link>
            </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarPanal;
