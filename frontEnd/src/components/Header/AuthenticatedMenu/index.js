import React from 'react';

import { logout, getUser } from '../../../auth';

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
					<a className="nav-link" onClick={() => logout()}>Sair</a>
				</NavbarItem>
			</NavbarNavigation>
			<label> {JSON.parse(getUser()).nome.toUpperCase() + ' ' + JSON.parse(getUser()).sobrenome.toUpperCase()} </label>
		</NavbarCollapse>
	);
}

export default AuthenticatedMenu;
