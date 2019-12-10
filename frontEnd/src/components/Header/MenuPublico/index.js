import React from 'react';

import { Link } from 'react-router-dom';

import { ButtonPrimary } from '../../../styles/BootstrapStyled';

function UnauthenticatedMenu() {

	return (
		<div className="collapse navbar-collapse" id="navbarCollapse">
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
			</ul>
			<ButtonPrimary href="#modalLogin" role= "button" data-toggle= "modal">Login</ButtonPrimary>
		</div>


	);
}

export default UnauthenticatedMenu;
