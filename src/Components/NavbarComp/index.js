import {Navbar, FormControl, Form, Nav, Button} from 'react-bootstrap';
import colors from '../../Constants/colors';
import React from 'react'
import logo from '../../Assets/logopcgo.png';

const NavbarComp = () => {
    return(
        <>
        <Navbar fixed = 'top' style = {{backgroundColor: colors.primary}}>
            <Navbar.Brand href="#home"><img style = {{marginLeft: "2vh", height: "8vh"}} src={logo}/></Navbar.Brand>
            <Nav className="ml-auto">
            <Nav.Link style = {{fontSize: "3vh", marginRight: "2vh", color: colors.secondary}}>Login</Nav.Link>
            <Nav.Link style = {{fontSize: "3vh", color: colors.secondary}}>Cadastro</Nav.Link>
            </Nav>
        </Navbar>
        </>
    )
}

export default NavbarComp;