import React, { Fragment, Component } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

import TitleBar from "../../../components/TitleBar";

import { Container } from "../../../styles/BootstrapStyled";
import { Content } from "../../../styles/customGlobalStyled";

class Egressos extends Component {

    render() {
        return (

            <Fragment>

                <TitleBar titulo="Egressos" descricao="Cadastre e gerencie os egressos do sistema" />
                <Helmet>
                    <title> Egressos </title>
                    <meta name="description" content="Cadastre e gerencie os egressos do sistema" />
                </Helmet>

                <Container>
                    <Content>

                        <Link to="/CadastroEgresso">Cadastro Egresso</Link>

                    </Content>
                </Container>
            </Fragment>
        );
    }
}

export default Egressos;
