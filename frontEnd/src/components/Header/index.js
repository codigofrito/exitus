import React from 'react';

import { isAuthenticated } from '../../auth';

import logo from '../../assets/logo-exteded-v1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import ModalLogin from '../ModalLogin';

import { Container, NavBar } from "../../styles/BootstrapStyled";

import { Link } from 'react-router-dom';

import { AppHeader } from "./styles";

import AuthenticatedMenu from "./AuthenticatedMenu";
import UnauthenticatedMenu from "./UnauthenticatedMenu";


const menuIcon = <FontAwesomeIcon icon={faBars} />

const Menu = () => { return isAuthenticated() ? (<AuthenticatedMenu />) : (<UnauthenticatedMenu />)}

class Header extends React.Component {  
  render(){
    return (
      <AppHeader>
        <Container>
          <NavBar>
            <Link className="navbar-brand" to="/"><img src={logo} height="45" alt="Exitus" id="logo" draggable="false" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              {menuIcon}
            </button>
            <Menu />
          </NavBar>
        </Container>
        <ModalLogin />
      </AppHeader>
    );
  }
}

export default Header;