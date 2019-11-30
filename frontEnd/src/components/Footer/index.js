import React from 'react';

import { Container } from "../../styles/global-styled-components";

import { AppFooter } from "./styles";

const fundationYear = 2019;
const currentYear = new Date().getFullYear();

let copyRightPeriod = currentYear <= fundationYear ? fundationYear : fundationYear + " - " + currentYear;

function Footer() {
    return (

        <AppFooter>
            <Container>
                <div id="copyright">
                    © Exitus - {copyRightPeriod}
                </div>
            </Container>
        </AppFooter>

    );
}

export default Footer;
