import React, { Component } from 'react';

import { isAuthenticated } from '../../auth';

import HomePublico from "./HomePublico"
import HomeModerador from "./HomeModerador"


const HomeAtual = () => { return isAuthenticated() ? (<HomeModerador/>) : (<HomePublico/>); };

class Home extends Component {

    render(){
        return (
            <HomeAtual/>
        );
    }
}

export default Home;
