import {Navbar, Nav} from 'react-bootstrap';
import React from 'react'
import logo from '../../Assets/logopcgo.png';
import styles from './style';



const NavbarComp = () => {
    return(
        <Navbar fixed = 'top' style = {styles.navbar}>
            <Navbar.Brand href="#home"><img style = {styles.navbarLogo} src={logo} alt={'Polícia Civil de Goiás'}/></Navbar.Brand>
            <Nav className="ml-auto">
            <Nav.Link style = {styles.navbarText}>Login</Nav.Link>
            <Nav.Link style = {styles.navbarText}>Cadastro</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavbarComp;