import React, { Fragment, Component } from 'react';
import { Helmet } from "react-helmet";
import BannerRotativo from "../BannerRotativo";

import { Container } from "../../../styles/BootstrapStyled";
import { Content } from "../../../styles/customGlobalStyled";


class HomePublico extends Component {

    render(){
        return (
            <Fragment>
                <BannerRotativo />
                <Container>
                    <Content>
                        <Helmet>
                            <title> Exitus - Início </title>
                            <meta name="description" content="Página Inicial do Sistema de Egressos Exitus" />
                        </Helmet>
                        <h1>Links de teste</h1>
                    </Content>
                </Container>
            </Fragment>
        );
    }
}

export default HomePublico;
