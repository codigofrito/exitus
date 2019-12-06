import React from 'react';

import { Link } from 'react-router-dom';

function AuthenticatedMenu() {

    return (
        <div className="collapse navbar-collapse navbar-light" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contato">Contato</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/sobre">Sobre</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/sair">Sair</Link>
                </li>
            </ul>
            INFORMAÇÕES DO USUÁRIO
        </div>

    );
}

export default AuthenticatedMenu;
