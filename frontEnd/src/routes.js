import React from 'react';

import Home from './pages/Home/index.jsx';
import CadastroEgresso from './pages/CadastroEgresso/index.jsx';
import CadastroEntrevista from './pages/CadastroEntrevista/index.jsx';
import CadastroPergunta from './pages/CadastroPergunta/index.jsx';
import NotFound from './pages/NotFound/index.jsx';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRoute.jsx';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <PrivateRoute exact path="/CadastroEgresso" component={CadastroEgresso} />
            <PrivateRoute exact path="/CadastroEntrevista" component={CadastroEntrevista} />
            <PrivateRoute exact path="/CadastroPergunta" component={CadastroPergunta} />

            <Route path="*" component={NotFound} />
            
        </Switch>
    </BrowserRouter>
);

export default Routes;

