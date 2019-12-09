import React from 'react';

import { isAuthenticated } from '../../auth';

import logo from '../../assets/logo-exteded-v1.svg';
import ModalLogin from '../ModalLogin';

import { Container, Navbar, NavbarBrand, NavbarToggler } from '../../styles/BootstrapStyled';

import { Link } from 'react-router-dom';

import { AppHeader } from './styles';

import AuthenticatedMenu from './AuthenticatedMenu';
import UnauthenticatedMenu from './UnauthenticatedMenu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const MenuIcon = <FontAwesomeIcon icon={faBars} />

const Menu = () => { return isAuthenticated() ? (<AuthenticatedMenu />) : (<UnauthenticatedMenu />); };


class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
		  this.onRouteChanged();
		}
	  }
	
	  onRouteChanged() {
		alert("ROUTE CHANGED");
	  }

	render() {

		return (
			<AppHeader>
				<Container>
					<Navbar>
						<NavbarBrand>
							<Link to="/"><img src={logo} height="45" alt="Exitus" id="logo" draggable="false" /></Link>
						</NavbarBrand>
						<NavbarToggler type="button" data-toggle="collapse" data-target="#navbarCollapse">
							{MenuIcon}
						</NavbarToggler>
						<Menu />
					</Navbar>
				</Container>
				<ModalLogin/>
			</AppHeader>
		);
	}
}

export default Header;