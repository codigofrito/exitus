import React from 'react';

import logo from '../../assets/logo-exteded-v1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import ModalLogin from '../ModalLogin';

import { Container } from "../../styles/global-styled-components";

import { Link } from 'react-router-dom';


import { NavBar, AppHeader } from "./styles";

const menuIcon = <FontAwesomeIcon icon={faBars} />


function Header() {

  return (
    <AppHeader>
      <Container>
        <NavBar>
          <Link className="navbar-brand" to="/"><img src={logo} height="45" alt="Exitus" id="logo" /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            {menuIcon}
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Inicio <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Contato</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Sobre</Link>
              </li>
            </ul>
            <a href="#modalLogin" role="button" className="btn btn-primary btn-lg" data-toggle="modal">Login</a>
          </div>
        </NavBar>
      </Container>
      <ModalLogin />
    </AppHeader>
  );
}

export default Header;
