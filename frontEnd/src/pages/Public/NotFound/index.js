import React, { Component } from 'react';

import { NotFoundParent } from "./styles";

import { Container } from "../../../styles/BootstrapStyled";
import { Content } from "../../../styles/customGlobalStyled";

class NotFound extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <NotFoundParent>
                        <div class="notfound">
                            <div class="notfound-404">
                                <h3>Oops! Página não  encontrada</h3>
                                <h1><span>4</span><span>0</span><span>4</span></h1>
                            </div>
                            <h2>Infelizmente essa página não existe em nosso sistema!</h2>
                        </div>
                    </NotFoundParent>
                </Content>
            </Container >
        );
    }
}

export default NotFound;
