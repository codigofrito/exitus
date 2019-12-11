import React, { Component, Fragment } from 'react';
import { Helmet } from "react-helmet";

import { Container } from "../../../styles/BootstrapStyled";
import { Content } from "../../../styles/customGlobalStyled";

import TitleBar from "../../../components/TitleBar";

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tituloAba : "Egresso - Historico",
            tituloBarra : "Meu Histórico",
            descricaoPagina : "Aqui você terá acesso às principais funcionalidades do nosso sistema."
        }
    }

    render() {
        return (
            <Fragment>
                <TitleBar titulo={this.state.tituloBarra} descricao={this.state.descricaoPagina} />

                <Helmet>
                    <title>{this.state.tituloAba}</title>
                    <meta name="description" content={this.state.descricao} />
                </Helmet>

                <Container>
                    <Content>
                        
                    </Content>
                </Container>

            </Fragment>
        );
    }
}