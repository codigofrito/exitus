import React, { Component, Fragment } from 'react';
import { Helmet } from "react-helmet";
import Authenticate from '../../../auth';

import { Container, Row } from "../../../styles/BootstrapStyled";
import { Content } from "../../../styles/customGlobalStyled";

import NavigationCard from "../../../components/NavigationCard"

import EntrevistaImg from "../../../assets/icones/entrevista.png"
import HistoricoImg from "../../../assets/icones/historico.png"

import TitleBar from "../../../components/TitleBar";

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tituloAba : "Início - Egresso",
            tituloBarra : "Bem-vindo(a), " + JSON.parse(Authenticate.User()).nome.toUpperCase(),
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
                        <Row>
                            <NavigationCard
                                tituloCard="Responder Entrevistas"
                                descricaoCard="Responda às entrevistas destinadas a você com base nos seus cursos."
                                fontColor="#fff"
                                backgroundColor="#2092ed"
                                backgroundImage={EntrevistaImg}
                                location="/ResponderEntrevista"
                            />

                            <NavigationCard
                                tituloCard="Meu Histórico"
                                descricaoCard="Visualize toda sua jornada em nossa Instituição!"
                                fontColor="#fff"
                                backgroundColor="#6f95b4"
                                backgroundImage={HistoricoImg}
                                location="/MeuHistorico"
                            />

                        </Row>
                    </Content>
                </Container>

            </Fragment>
        );
    }
}