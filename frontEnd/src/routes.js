import React from 'react';

import Home from './pages/Home';
import Egressos from './pages/Egressos';
import CadastroEgresso from './pages/CadastroEgresso';
import Entrevistas from './pages/Entrevistas';
import CadastroEntrevista from './pages/CadastroEntrevista';
import Relatorios from './pages/Relatorios';
import MeuHistorico from './pages/Egresso/MeuHistorico';
import ResponderEntrevista from './pages/Egresso/ResponderEntrevista';
import NotFound from './pages/NotFound';

import { Route, Switch } from 'react-router-dom';

import { RouterGuard } from './RouterGuard';

const Routes = () => (
	<Switch>
		<Route exact path={['/', '/home']} component={Home} />
		<RouterGuard exact path="/Egressos" userTypeAllowed={['moderator']} component={Egressos} />
		<RouterGuard exact path="/CadastroEgresso" userTypeAllowed={['moderator']} component={CadastroEgresso} />
		<RouterGuard exact path="/Entrevistas" userTypeAllowed={['moderator']} component={Entrevistas} />
		<RouterGuard exact path="/CadastroEntrevista" userTypeAllowed={['moderator']} component={CadastroEntrevista} />
		<RouterGuard exact path="/Relatorios" userTypeAllowed={['moderator']} component={Relatorios} />
		<RouterGuard exact path="/ResponderEntrevista" userTypeAllowed={['egress']} component={ResponderEntrevista} />
		<RouterGuard exact path="/MeuHistorico" userTypeAllowed={['egress']} component={MeuHistorico} />
		<Route path="*" component={NotFound} />
	</Switch>
);

export default Routes;

