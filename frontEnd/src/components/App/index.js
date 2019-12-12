import React from 'react';

import LightTheme from '../../styles/themes/LightTheme';
import Header from '../Header';
import Footer from '../Footer';

import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Routes from '../../routes';

function App() {
    return (
        <div id="page">
            <ThemeProvider theme={LightTheme}>
                <Router>
                    <Header />
                    <Routes />
                    <Footer />
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
