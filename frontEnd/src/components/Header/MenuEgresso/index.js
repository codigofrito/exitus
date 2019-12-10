import React from 'react';

import { logout, getCurrentUser } from '../../../auth';

import { NavbarCollapse, NavbarItem, NavbarNavigation, NavLink } from '../../../styles/BootstrapStyled';

import { Link } from 'react-router-dom';

function AuthenticatedMenu() {

	return (
		<NavbarCollapse id="navbarCollapse">
			<NavbarNavigation>
				<NavbarItem>
					<NavLink to="/">Inicio</NavLink>
				</NavbarItem>			
				<NavbarItem>
					<NavLink to="/responderEntrevistas">Entrevistas</NavLink>
				</NavbarItem>				
				<NavbarItem>
					<NavLink onClick={() => logout()}>Sair</NavLink>
				</NavbarItem>
			</NavbarNavigation>
			<label> {JSON.parse(getCurrentUser()).nome.toUpperCase() + ' ' + JSON.parse(getCurrentUser()).sobrenome.toUpperCase()} </label>
		</NavbarCollapse>
	);
}

export default AuthenticatedMenu;
