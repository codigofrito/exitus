import React, { Fragment, Component } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import BannerRotativo from "../BannerRotativo";

import { Container } from "../../../styles/BootstrapStyled";
import { Content } from "../../../styles/customGlobalStyled";


class HomeModerador extends Component {

    render(){
        return (
            <Fragment>
                <BannerRotativo />
                <Container>
                    <Content>
                        <Helmet>
                            <title> Início - Moderador </title>
                            <meta name="description" content="Página Inicial do Sistema de Egressos Exitus" />
                        </Helmet>
                        <h1>Links de teste</h1>
                        <Link to="/CadastroEgresso"> Cadastro Egresso </Link><br />
                        <Link to="/CadastroEntrevista"> Cadastro Entrevista </Link><br />
                        <Link to="/CadastroPergunta"> Cadastro Pergunta </Link><br />
                    </Content>
                </Container>
            </Fragment>
        );
    }
}

export default HomeModerador;
