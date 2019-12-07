import React from 'react';

import { isAuthenticated } from '../../auth';

import logo from '../../assets/logo-exteded-v1.svg';
import ModalLogin from '../ModalLogin';

import { Container, Navbar, NavbarBrand } from '../../styles/BootstrapStyled';

import { Link } from 'react-router-dom';

import { AppHeader } from './styles';

import AuthenticatedMenu from './AuthenticatedMenu';
import UnauthenticatedMenu from './UnauthenticatedMenu';

const Menu = () => {return isAuthenticated() ? (<AuthenticatedMenu/>) : (<UnauthenticatedMenu/>);};

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isAuthenticated: '',
			user: '',
		};
		this.handleAuthentication = this.handleAuthentication.bind(this);
		this.handleLogoff = this.handleLogoff.bind(this);
	}

	handleAuthentication(authentication, user) {
		this.setState({ isAuthenticated: authentication, user: user });
	}

	handleLogoff() {
		this.setState({ isAuthenticated: false, user: {} });
	}

	render() {
		return (
			<AppHeader>
				<Container>
					<Navbar>
						<NavbarBrand>
							<Link to="/"><img src={logo} height="45" alt="Exitus" id="logo" draggable="false" /></Link>
						</NavbarBrand>
						<Menu/>
					</Navbar>
				</Container>
				<ModalLogin authentication={this.handleAuthentication} />
			</AppHeader>
		);
	}
}

export default Header;