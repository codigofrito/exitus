import React from 'react';


import logo from '../../assets/logo-exteded-v1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ModalLogin from '../ModalLogin';

import { Container, NavBar } from '../../styles/BootstrapStyled';

import { Link } from 'react-router-dom';

import { AppHeader } from './styles';

import AuthenticatedMenu from './AuthenticatedMenu';
import UnauthenticatedMenu from './UnauthenticatedMenu';


const menuIcon = <FontAwesomeIcon icon={faBars} />;
const Menu = (props) => {return props.authenticated ? (<AuthenticatedMenu user={props.user}/>) : (<UnauthenticatedMenu />);};

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isAuthenticated: '',
			user: '',
			Menu: '',
		};
		this.handleAuthentication = this.handleAuthentication.bind(this);
	} 
  
	handleAuthentication (authentication, user) {
		this.setState({isAuthenticated: authentication, user: user});
	}
  
	render(){
		return (
			<AppHeader>
				<Container>
					<NavBar>
						<Link className="navbar-brand" to="/"><img src={logo} height="45" alt="Exitus" id="logo" draggable="false" /></Link>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
							{menuIcon}
						</button>
						<Menu authenticated={this.state.isAuthenticated} user={this.state.user}/>
					</NavBar>
				</Container>
				<ModalLogin authentication={this.handleAuthentication}/>
			</AppHeader>
		);
	}
}

export default Header;