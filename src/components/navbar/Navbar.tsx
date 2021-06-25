import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

export default function Navbar() {
    const { isAuth, authEvent } = useContext(AuthContext);
    const history = useHistory();

    function handleLogout() {  //aca simulo la llamada a la api para loguearse
        authEvent('logout')
        history.push('/');
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase flex-column py-2">
                <div className="container">
                    <Link to="/" className="navbar-brand">Start Bootstrap</Link>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-0 mx-lg-1">
                                <Link to="/" className="nav-link py-3 px-0 px-lg-3 rounded">Home</Link>
                            </li>
                            {isAuth && <li className="nav-item mx-0 mx-lg-1">
                                <Link to="/todo" className="nav-link py-3 px-0 px-lg-3 rounded">Mi App TODO</Link>
                            </li>}
                            <li className="nav-item mx-0 mx-lg-1">
                                <Link to="/about" className="nav-link py-3 px-0 px-lg-3 rounded">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <ul className="d-flex navbar-nav ms-auto">
                        {!isAuth &&
                            <li className="nav-item mx-0 mx-lg-1">
                                <Link to="/login" className="nav-link py-3 px-0 px-lg-3 rounded">LOGIN</Link>
                            </li>}
                        {isAuth &&
                            <li className="nav-item mx-0 mx-lg-1">
                                <Button onClick={() => handleLogout()} variant="link" className="nav-link py-3 px-0 px-lg-3 rounded">LOGOUT</Button>
                            </li>}
                    </ul>
                </div>
            </nav>
        </>
    )
}
