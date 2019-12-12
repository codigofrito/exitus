import React from 'react';

import Home from './pages/Home';
import Egressos from './pages/Moderator/ManageEgress';
import CadastroEgresso from './pages/Moderator/CadastroEgresso';
import Entrevistas from './pages/Moderator/ManageInterviews';
import CadastroEntrevista from './pages/Moderator/ManageInterviews/InterviewRegister';
import Relatorios from './pages/Moderator/Reports';
import MeuHistorico from './pages/Egress/AcademicRecord';
import EntrevistasDisponiveis from './pages/Egress/AvaliableInterviews';
import ResponderEntrevista from './pages/Egress/AnswerInterview';
import NotFound from './pages/Public/NotFound';
import Sobre from "./pages/Public/Sobre/index";
import { Route, Switch } from 'react-router-dom';

import { RouterGuard } from './routeGuard';

const Routes = () => (
	<Switch>
		<Route exact path={['/', '/home']} component={Home} />
		<RouterGuard exact path="/Egressos" userTypeAllowed={['moderator']} component={Egressos} />
		<RouterGuard exact path="/CadastroEgresso" userTypeAllowed={['moderator']} component={CadastroEgresso} />
		<RouterGuard exact path="/Entrevistas" userTypeAllowed={['moderator']} component={Entrevistas} />
		<RouterGuard exact path="/CadastroEntrevista" userTypeAllowed={['moderator']} component={CadastroEntrevista} />
		<RouterGuard exact path="/Relatorios" userTypeAllowed={['moderator']} component={Relatorios} />
		<RouterGuard exact path="/EntrevistasDisponiveis" userTypeAllowed={['egress']} component={EntrevistasDisponiveis} />
		<RouterGuard exact path="/MeuHistorico" userTypeAllowed={['egress']} component={MeuHistorico} />
		<Route path="/ReponderEntrevista/:id" component={ResponderEntrevista} />
		<Route path="/ReponderEntrevista" component={ResponderEntrevista} />
		<Route path="/Sobre" component={Sobre}/>
		<Route path="*" component={NotFound} />
	</Switch>
);

export default Routes;

