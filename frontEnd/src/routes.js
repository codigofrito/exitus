import React from 'react';

import Home from './pages/Home';
import Egressos from './pages/Egressos';
import CadastroEgresso from './pages/CadastroEgresso';
import Entrevistas from './pages/Entrevistas';
import CadastroEntrevista from './pages/CadastroEntrevista';
import Relatorios from './pages/Relatorios';
import NotFound from './pages/NotFound';

import { Route, Switch } from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRouter';

const Routes = () => (
	<Switch>
		<Route exact path={['/', '/home']} component={Home} />
		<PrivateRoute exact path="/Egressos" component={Egressos} />
		<PrivateRoute exact path="/CadastroEgresso" component={CadastroEgresso} />
		<PrivateRoute exact path="/Entrevistas" component={Entrevistas} />
		<PrivateRoute exact path="/CadastroEntrevista" component={CadastroEntrevista} />
		<PrivateRoute exact path="/Relatorios" component={Relatorios} />
		<Route path="*" component={NotFound} />
	</Switch>
);

export default Routes;

