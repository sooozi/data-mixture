import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div className="HomePage">
      <Navbar className="navbar" bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Project with Noona 💕</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/BoxPage">BoxPage</Nav.Link>
            <Nav.Link href="/RpsPage">RpsPage</Nav.Link>
            <Nav.Link href="/WeatherAppPage">WeatherAppPage</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="cont-wrap">
        <h1>HomePage</h1>
      </div>
    </div>
  )
}

export default HomePage
