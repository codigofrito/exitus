import React, { Fragment, Component } from 'react';
import { Helmet } from "react-helmet";

import TitleBar from "../../../components/TitleBar";

import { Container } from "../../../styles/BootstrapStyled";
import { Content } from "../../../styles/customGlobalStyled";


class Relatorio extends Component {

    render() {
        return (
            <Fragment>
                
                <TitleBar titulo="Relatórios" descricao="Gere os relatórios precisos com base nos dados coletados das entrevistas." />

                <Helmet>
                    <title>Relatórios</title>
                    <meta name="description" content="Gere relatórios precisos com base nos dados coletados das entrevistas." />
                </Helmet>

                <Container>
                    <Content>


                    </Content>
                </Container>
            </Fragment>
        );
    }
}

export default Relatorio;
