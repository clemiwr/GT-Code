import React from 'react';
import "../style/Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
  return (
      <Navbar bg="light" className="d-flex flex-column" style={{width: '240px', position: 'fixed', height: '100vh'}}>
          <Navbar.Brand href="#home">BrandName</Navbar.Brand>
          <Nav className="flex-column">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#anotherLink">Another Link</Nav.Link>
          </Nav>
      </Navbar>
  );
}

export default Navbar;