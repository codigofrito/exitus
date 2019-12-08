import React, { Component } from "react";

import { BoxBanner, BoxContent, ButtonLeft, ButtonRight } from "./styles"

import { Container } from '../../../styles/BootstrapStyled';

class BannerRotativo extends Component {

    editarPergunta(event) {
        alert(event);
    }

    render() {
        return (
            <div>
                <BoxBanner>
                    <Container>
                        <BoxContent>
                            <ButtonLeft />
                            <ButtonRight />
                        </BoxContent>
                    </Container>
                </BoxBanner>
            </div>
        );
    };
}

export default BannerRotativo;


