import React from 'react';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

import Routes from '../routes';

function App() {
    return (
        <div id="page">
            <Header />
            <Routes />
            <Footer />
        </div>
    );
}

export default App;
