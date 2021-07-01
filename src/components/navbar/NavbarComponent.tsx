import React, { useContext } from 'react'
import { Button, Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import logo from '../../logo.svg'

import NavbarStyles from './Navbar.module.css'

export default function NavbarComponent() {
    const { isAuth, authEvent } = useContext(AuthContext);
    const history = useHistory();

    function handleLogout() {  //aca simulo la llamada a la api para loguearse
        authEvent('logout')
        history.push('/');
    }

    return (
        <>
            <Navbar bg="dark" expand="md" variant="dark" className={NavbarStyles.navbar}>
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt=""
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block"
                    />{' '}React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        {isAuth &&
                            <>
                                <Nav.Link as={Link} to="/usuario">Mi Perfil</Nav.Link>
                                <NavDropdown title="APPS" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/apps/todo">ToDo List</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={Link} to="/apps">Ver Todas</NavDropdown.Item>
                                </NavDropdown>
                            </>
                        }
                        <Nav.Link as={Link} to="/about">Nosotros</Nav.Link>
                        {!isAuth
                            ? <Nav.Link as={Link} to="/login" className="nav-link btn btn-outline-secondary">LOGIN</Nav.Link>
                            : <Nav.Link as={Button} variant="outline-secondary" onClick={() => handleLogout()}>SALIR</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
