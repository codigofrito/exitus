import React from 'react';

import { Container } from "../../styles/BootstrapStyled";

import { AppFooter } from "./styles";

const fundationYear = 2019;
const currentYear = new Date().getFullYear();

let copyRightYears = currentYear <= fundationYear ? fundationYear : fundationYear + " - " + currentYear;

class Footer extends React.Component {
    render() {
        return (
            <AppFooter>
                <Container>
                    © Exitus - {copyRightYears}
                </Container>
            </AppFooter>
        );
    }
}

export default Footer;
