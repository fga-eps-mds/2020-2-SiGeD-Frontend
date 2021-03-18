import { Navbar, Nav } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logopcgo.png';
import styles from './style';

const NavbarComp = () => (
  <Navbar expand="lg" variant="dark" clickfixed="top" fixed="top" style={styles.navbar}>
    <Navbar.Brand><img style={styles.navbarLogo} src={logo} alt="Polícia Civil de Goiás" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-police" />
    <Navbar.Collapse id="navbar-police">
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/" style={styles.navbarText}>
          Login
        </Nav.Link>
        <Nav.Link as={Link} to="/cadastro" style={styles.navbarText}>
          Cadastro
        </Nav.Link>
        <Nav.Link as={Link} to="/usuarios" style={styles.navbarText}>
          Usuários
        </Nav.Link>
        <Nav.Link as={Link} to="/cliente" style={styles.navbarText}>
          Novo cliente
        </Nav.Link>
        <Nav.Link as={Link} to="/clientes" style={styles.navbarText}>
          Clientes
        </Nav.Link>
        <Nav.Link as={Link} to="/categorias" style={styles.navbarText}>
          Categorias
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarComp;
