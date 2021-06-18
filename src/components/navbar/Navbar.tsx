import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props: any) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top flex-column" id="mainNav">
                <div className="container">
                    <Link to="/" className="navbar-brand">Start Bootstrap</Link>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-0 mx-lg-1">
                                <Link to="/" className="nav-link py-3 px-0 px-lg-3 rounded">Home</Link>
                            </li>
                            {props.auth && <li className="nav-item mx-0 mx-lg-1">
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
                        {!props.auth && <li className="nav-item mx-0 mx-lg-1">
                            <Link to="/login" className="nav-link py-3 px-0 px-lg-3 rounded">LOGIN</Link>
                        </li>}
                        {props.auth && <li className="nav-item mx-0 mx-lg-1">
                            <Link to="/logout" className="nav-link py-3 px-0 px-lg-3 rounded">LOGOUT</Link>
                        </li>}
                    </ul>
                </div>
            </nav>
        </>
    )
}