import { Navbar, Nav } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import styles from './Style';
import { useProfileUser } from '../../Context';
import { APIUsers } from '../../Services/Axios/baseService';
import ModalMessage from '../ModalMessage';

const NavbarComp = () => {
  const { user, token, setToken } = useProfileUser();
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const handleCloseMessage = () => setShowMessage(false);
  const handleShowMessage = () => setShowMessage(true);

  useEffect(() => {
    if (user) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    const logoutUser = () => {
      try {
        localStorage.clear();
        setToken(localStorage.getItem('@App:token'));
        APIUsers.defaults.headers = null;
      } catch (error) {
        setMessage('Não foi possivel realizar o logout.');
        handleShowMessage();
        console.error(error);
      }
    };
    if (user.role === 'admin') {
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
                  <Nav.Link as={Link} to="/demanda" style={styles.navbarText}>
                    Criar Demandas
                  </Nav.Link>
                  <Nav.Link as={Link} to="/demandas" style={styles.navbarText}>
                    Demandas
                  </Nav.Link>
                  <Navbar.Brand as={Link} to="/login" onClick={logoutUser}>
                    <FiLogOut />
                  </Navbar.Brand>
                </Nav>
              </Navbar.Collapse>
            )}
          <ModalMessage
            show={showMessage}
            handleClose={handleCloseMessage}
            message={message}
          />
        </Navbar>
      );
    }
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
                <Nav.Link as={Link} to="/cliente" style={styles.navbarText}>
                  Novo cliente
                </Nav.Link>
                <Nav.Link as={Link} to="/clientes" style={styles.navbarText}>
                  Clientes
                </Nav.Link>
                <Nav.Link as={Link} to="/categorias" style={styles.navbarText}>
                  Categorias
                </Nav.Link>
                <Nav.Link as={Link} to="/demanda" style={styles.navbarText}>
                  Criar Demandas
                </Nav.Link>
                <Nav.Link as={Link} to="/demandas" style={styles.navbarText}>
                  Demandas
                </Nav.Link>
                <Navbar.Brand as={Link} to="/login" onClick={logoutUser}>
                  <FiLogOut />
                </Navbar.Brand>
              </Nav>
            </Navbar.Collapse>
          )}
        <ModalMessage
          show={showMessage}
          handleClose={handleCloseMessage}
          message={message}
        />
      </Navbar>
    );
  }
  return (
    <Navbar expand="lg" variant="dark" clickfixed="top" fixed="top" style={styles.navbar}>
      <Navbar.Brand>
        <h1 style={styles.navbarText}>Logo</h1>
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavbarComp;
