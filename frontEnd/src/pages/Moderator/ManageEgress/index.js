import React, { Fragment, Component } from 'react';
import { Helmet } from "react-helmet";

import ModalManagerEgress from "./"

import TitleBar from "../../../components/TitleBar";

import EgressesTable from "./EgressesTable"

import { Container, FormRow, ButtonSuccessLink } from "../../../styles/BootstrapStyled";
import { Content } from "../../../styles/customGlobalStyled";

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tituloAba: "Gerenciar Egressos",
            tituloBarra: "Gerenciar Egressos",
            descricaoPagina: "Cadastre e gerencie os egressos do sistema."
        };
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
                        <h2>Egressos:</h2>
                        <EgressesTable />
                        <FormRow>
                            <ButtonSuccessLink data-toggle="collapse" data-target="#modal-manager-esgress">NOVA ENTREVISTA</ButtonSuccessLink>
                        </FormRow>
                    </Content>
                </Container>

                <ModalManagerEgress/>


            </Fragment>

        );
    }
}
