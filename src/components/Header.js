import React from "react";
import logo from "./images/Group2358.png"
import user from "./images/user.svg"
import cart from "./images/shopping-cart-dark-grey.svg"
import deliveryLogo from "./images/delivery.png"

import {
  Navbar,
  Container,
  Form,
  Button,
  FormControl,
  Nav,
} from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container >
          <Navbar.Brand href="#"><img alt="heder logo" src={logo} className="me-4"/>  <img alt="Delivery logo" src={deliveryLogo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link> */}
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
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-5"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <div className="userLogo ms-5" >
              <img src={user} alt="User_logo" />
            </div>
            <div className="userLogo ms-5" >
              <img src={cart} alt="Cart" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
