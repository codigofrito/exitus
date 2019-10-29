import React from 'react';

import '../styles/main.css';
import logo from '../assets/logo-exteded-v1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import ModalLogin from './ModalLogin';

const menuIcon = <FontAwesomeIcon icon={faBars} />

function Header() {
  return (

    <header id="app-header">

      <div className="container clearfix">
        <nav className="navbar navbar-expand-md navbar-light">
          <a className="navbar-brand" href="/"><img src={logo} className="noselect" height="45" alt="Exitus" id="logo" /></a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            {menuIcon}
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Inicio <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contato</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Sobre</a>
              </li>
            </ul>
            <a href="#modalLogin" role="button" class="btn btn-primary btn-lg" data-toggle="modal">Login</a>
          </div>
        </nav>

      </div>
      <ModalLogin/>

    </header>

  );
}

export default Header;
