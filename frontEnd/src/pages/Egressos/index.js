import React, { Fragment, Component } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

import { Container } from "../../styles/BootstrapStyled";
import { Content } from "../../styles/customGlobalStyled";



class Egressos extends Component {

    render(){
        return (
            <Fragment>
                <Container>
                    <Content>
                        <Helmet>
                            <title> Egressos </title>
                            <meta name="description" content="" />
                        </Helmet>
                        <Link to="/CadastroEgresso">Cadastro Egresso</Link>
                 
                    </Content>
                </Container>
            </Fragment>
        );
    }
}

export default Egressos;
