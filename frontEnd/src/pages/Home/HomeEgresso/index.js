import React, { Fragment, Component } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import BannerRotativo from "./BannerRotativo";

import { Container } from "../../styles/BootstrapStyled";
import { Content } from "../../styles/customGlobalStyled";


class HomeEgresso extends Component {

    render(){
        return (
            <Fragment>
                <BannerRotativo />
                <Container>
                    <Content>
                        <Helmet>
                            <title> Início - Egresso </title>
                            <meta name="description" content="Página Inicial do Sistema de Egressos Exitus" />
                        </Helmet>
                        <h1>Bem vindo, Egresso!</h1>
                 
                    </Content>
                </Container>
            </Fragment>
        );
    }
}

export default HomeEgresso;
