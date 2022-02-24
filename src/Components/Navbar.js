import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-5">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item mx-5">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item mx-5">
                                <a className="nav-link" href="#">Find Hospital</a>
                            </li>
                            <li className="nav-item mx-5">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
