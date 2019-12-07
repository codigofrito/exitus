import React from 'react';

import Home from './pages/Home';
import CadastroEgresso from './pages/CadastroEgresso';
import CadastroEntrevista from './pages/CadastroEntrevista';
import CadastroPergunta from './pages/CadastroPergunta';
import NotFound from './pages/NotFound';

import { Route, Switch } from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRouter';

const Routes = () => (
        <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <PrivateRoute exact path="/CadastroEgresso" component={CadastroEgresso} />
            <PrivateRoute exact path="/CadastroEntrevista" component={CadastroEntrevista} />
            <PrivateRoute exact path="/CadastroPergunta" component={CadastroPergunta} />
            <PrivateRoute exact path="/sair" component={CadastroPergunta} />
            <Route path="*" component={NotFound} />
        </Switch>
);

export default Routes;

