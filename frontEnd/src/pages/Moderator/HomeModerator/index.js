import React, { Component, Fragment } from 'react';
import { Helmet } from "react-helmet";
import Authenticate from '../../../auth';


import { Container, Row } from "../../../styles/BootstrapStyled";
import { Content } from "../../../styles/customGlobalStyled";

import NavigationCard from "../../../components/NavigationCard"

import EntrevistaImg from "../../../assets/icones/entrevista.png"
import EgressoImg from "../../../assets/icones/egresso.png"
import RelatorioImg from "../../../assets/icones/relatorio.png"

import TitleBar from "../../../components/TitleBar";

class HomeModerador extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tituloAba : "Início - Moderador",
            tituloBarra : "Bem-vindo(a), " + JSON.parse(Authenticate.User()).nome.toUpperCase(),
            descricaoPagina : "Aqui você terá acesso às principais funcionalidades do nosso sistema"
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
                                tituloCard="Gerencie Egressos"
                                descricaoCard="Insira, edite e monitore informações dos egressos"
                                fontColor="#fff"
                                backgroundColor="#0d6cb8"
                                backgroundImage={EgressoImg}
                                location="/Egressos"
                            />

                            <NavigationCard
                                tituloCard="Gerencie Entrevistas"
                                descricaoCard="Crie Entrevistas, insira novas perguntas e envie para os egressos."
                                fontColor="#fff"
                                backgroundColor="#2092ed"
                                backgroundImage={EntrevistaImg}
                                location="/Entrevistas"
                            />

                            <NavigationCard
                                tituloCard="Relatórios"
                                descricaoCard="Gere relatorio a partir dos dados coletados dos egresso"
                                fontColor="#fff"
                                backgroundColor="#6f95b4"
                                backgroundImage={RelatorioImg}
                                location="/Relatorios"
                            />

                        </Row>
                    </Content>
                </Container>

            </Fragment>
        );
    }
}

export default HomeModerador;

