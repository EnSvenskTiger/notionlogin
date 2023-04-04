import React from 'react';
import { Navbar, NavDropdown, Button, Container, Nav} from 'react-bootstrap';
import './header.css';
import Form from 'react-bootstrap/Form';
import Image from './Image';

function Header({ showImage = true }) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/Header">Menu</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/welcome">Report time</Nav.Link>
              <Nav.Link href="/Blocks">My projects</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showImage && <Image />}
    </>
  );
}

export default Header;

