import React from 'react';

import Authenticate from '../../../auth';

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
					<NavLink onClick={() => Authenticate.Logout()}>Sair</NavLink>
				</NavbarItem>
			</NavbarNavigation>
			<label> {JSON.parse(Authenticate.User()).nome.toUpperCase() + ' ' + JSON.parse(Authenticate.User()).sobrenome.toUpperCase()} </label>
		</NavbarCollapse>
	);
}

export default AuthenticatedMenu;
