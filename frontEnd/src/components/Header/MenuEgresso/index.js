import React from 'react';

import Authenticate from '../../../auth';

import { NavbarCollapse, NavbarItem, NavbarNavigation, NavLink, Row } from '../../../styles/BootstrapStyled';

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
			<div>
				<Row>
				<label className="hidden-lg-only">
					{JSON.parse(Authenticate.User()).nome.toUpperCase() + ' ' + JSON.parse(Authenticate.User()).sobrenome.toUpperCase()}
				</label>
				</Row>			
				
			</div>
		</NavbarCollapse>
	);
}

export default AuthenticatedMenu;
