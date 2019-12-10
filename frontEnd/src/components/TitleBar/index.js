import React, { Component, Fragment } from 'react';

import { Container } from "../../styles/BootstrapStyled";
import { Content } from "../../styles/customGlobalStyled";


import fundo from "../../assets/fundo.svg";


import { BgImageBox, Ondas, Titulo, Descricao } from "./styles";

class TitleBar extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <BgImageBox>
                    <Container>
                        <Content>
                            <Titulo>{this.props.titulo.toUpperCase()}</Titulo>
                            <Descricao>{this.props.descricao}</Descricao>
                        </Content>
                    </Container>
                    <Ondas draggable="false" src={fundo} />

                </BgImageBox>

            </Fragment>

        );
    }
}

export default TitleBar;
