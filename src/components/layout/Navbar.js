import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import ihublogo from './assets/ihublogo.png'

function Menubar() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src='https://www.ihubiitmandi.in/wp-content/uploads/2023/10/z.png'
              width="90"
              height="90"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/GetDataServer.js">Home</Nav.Link>
            <Nav.Link href="/GetDataServer.js">Graph</Nav.Link>
            <Nav.Link href="#pricing">About us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Menubar;
