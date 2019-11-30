import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import { BrowserRouter } from 'react-router-dom';

import Routes from '../../routes';

import { Container, Content } from "../../styles/global-styled-components";

function App() {
    return (
        <div id="page">

            <BrowserRouter>
                <Header />
                <Container>
                    <Content>
                        <Routes />
                    </Content>
                </Container>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
