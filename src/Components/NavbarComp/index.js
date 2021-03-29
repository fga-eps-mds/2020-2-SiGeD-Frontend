import { Navbar, Nav } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import styles from './Style';
import { useProfileUser } from '../../Context';
import { APIUsers } from '../../Services/Axios/baseService';

const NavbarComp = () => {
  const { token, setToken } = useProfileUser();

  const logoutUser = () => {
    try {
      localStorage.removeItem('@App:token', token);
      setToken(localStorage.getItem('@App:token'));
      APIUsers.defaults.headers = null;
    } catch (error) {
      alert('Não foi possivel realizar o logout.');
      console.error(error);
    }
  };

  return (

    <Navbar expand="lg" variant="dark" clickfixed="top" fixed="top" style={styles.navbar}>
      <Navbar.Brand>
        <h1 style={styles.navbarText}>Logo</h1>
      </Navbar.Brand>
      { token && <Navbar.Toggle aria-controls="navbar-police" />}
      { token
        && (
          <Navbar.Collapse id="navbar-police">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/cadastro" style={styles.navbarText}>
                Cadastro
              </Nav.Link>
              <Nav.Link as={Link} to="/usuarios" style={styles.navbarText}>
                Usuários
              </Nav.Link>
              <Nav.Link as={Link} to="/setores" style={styles.navbarText}>
                Setores
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
              <Navbar.Brand as={Link} to="/" onClick={logoutUser}>
                <FiLogOut />
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        )}
    </Navbar>
  );
};

export default NavbarComp;
