import React from 'react';

import { logout, getCurrentUser } from '../../../auth';

import { NavbarCollapse, NavbarItem, NavbarNavigation } from '../../../styles/BootstrapStyled';

import { Link } from 'react-router-dom';

function AuthenticatedMenu() {

	return (
		<NavbarCollapse id="navbarCollapse">
			<NavbarNavigation>
				<NavbarItem>					
					<Link className="nav-link" to="/">Inicio</Link>
				</NavbarItem>
				<NavbarItem>
					<Link className="nav-link" to="/contato">Contato</Link>
				</NavbarItem>
				<NavbarItem className="nav-item">
					<Link className="nav-link" to="/sobre">Sobre</Link>
				</NavbarItem>
				<NavbarItem className="nav-item">
					<Link className="nav-link" onClick={() => logout()}>Sair</Link>
				</NavbarItem>
			</NavbarNavigation>
			<label> {JSON.parse(getCurrentUser()).nome.toUpperCase() + ' ' + JSON.parse(getCurrentUser()).sobrenome.toUpperCase()} </label>
		</NavbarCollapse>
	);
}

export default AuthenticatedMenu;
