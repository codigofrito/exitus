import React, { Component, Fragment } from 'react';
import { Helmet } from "react-helmet";

import { Container, Row, CardBody } from "../../../styles/BootstrapStyled";
import { Content } from "../../../styles/customGlobalStyled";
import { ColumnCard, CardEgressos, CardEntrevistas, CardRelatorios } from "./styles";

import TitleBar from "../../../components/TitleBar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'


const egressoIcon = <FontAwesomeIcon icon={faUserGraduate} />


class HomeModerador extends Component {

    render() {
        return (
           <Fragment>
            <TitleBar titulo="Página Inicial - Moderador" descricao="Essa página é o ponto de partida para ter acesso às principais funções do nosso Sistema."/>
            <Container>
                <Content>
                    <Helmet>
                        <title> Início - Moderador </title>
                        <meta name="description" content="Página Inicial do Sistema de Egressos Exitus" />
                    </Helmet>

                    <Row>
                        <ColumnCard>
                            <CardEgressos to="/Egressos">
                                <CardBody>
                                    <h4>Egressos</h4>
                                    <p >Insira, edite e monitore informações dos egressos</p>
                                </CardBody>
                            </CardEgressos>
                        </ColumnCard>
                        <ColumnCard>
                            <CardEntrevistas to="/Entrevistas" class="after-loop-item card border-0 card-snippets shadow-lg">
                                <CardBody>
                                    <h4>Entrevistas</h4>
                                    <p >Crie Entrevistas, insira novas perguntas e envie para os egressos.</p>
                                </CardBody>
                            </CardEntrevistas>
                        </ColumnCard>
                        <ColumnCard>
                            <CardRelatorios to="/Relatorios" class="after-loop-item card border-0 card-guides shadow-lg">
                                <CardBody>
                                    <h4>Relatorios</h4>
                                    <p class="w-75">Gere relatorio a partir dos dados coletados dos egresso</p>
                                </CardBody>
                            </CardRelatorios>
                        </ColumnCard>
                    </Row>
                </Content>
            </Container>

            </Fragment>
        );
    }
}

export default HomeModerador;
