import React, { Fragment, Component } from 'react';
import { Helmet } from "react-helmet";

import { Container } from "../../styles/BootstrapStyled";
import { Content } from "../../styles/customGlobalStyled";


class Relatorio extends Component {

    render(){
        return (
            <Fragment>
                <Container>
                    <Content>
                        <Helmet>
                            <title>Relatorio</title>
                            <meta name="description" content="" />
                        </Helmet>
                                       
                    </Content>
                </Container>
            </Fragment>
        );
    }
}

export default Relatorio;
