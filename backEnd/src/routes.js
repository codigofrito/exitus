const express = require('express');
const routes = express.Router();
const autenticacao = require('./middlewares/auth');


const PessoaController = require('./controllers/PessoaController');
const EgressoController = require('./controllers/EgressoController');
const EgressoPossuiCursoController = require('./controllers/EgressoPossuiCursoController');
const EgressoParticiouCursoController = require('./controllers/EgressoParticipouEntrevistaController');
const ModeradorController = require('./controllers/ModeradorController');
const EntrevistaController = require('./controllers/EntrevistaController');
const PerguntaController = require('./controllers/PerguntaController');
const AlternativaController = require('./controllers/AlternativaController');
const CursoController = require('./controllers/CursoController');
const FilialController = require('./controllers/FilialController');
const RespostaEgressoController = require('./controllers/RespostaEgressoController');
const ViewEgressoController = require('./controllers/ViewEgressoController');
const ViewModeradorController = require('./controllers/ViewModeradorController');
const ViewRespostaEgressoController = require('./controllers/ViewRespostaEgressoController');
const AutenticacaoController = require('./controllers/AutenticacaoController');

const QuestionarioController = require('./controllers/QuestionarioController');

//=== === ===PessoaController.js Routes=== === ===//
routes.post('/register/person', autenticacao.moderador, PessoaController.store);
routes.post('/people', autenticacao.moderador, PessoaController.index);
routes.post('/find/person', autenticacao.moderador, PessoaController.show);
routes.delete('/remove/person', autenticacao.moderador, PessoaController.destroy);
routes.put('/update/person', autenticacao.moderador, PessoaController.update);
//=== === ===--------------------------=== === ===//

//=== === ===EgressoController.js Routes=== === ===//
routes.post('/register/egress', EgressoController.store);
routes.post('/graduates', autenticacao.moderador, EgressoController.index);
routes.post('/find/egress', autenticacao.moderador, EgressoController.show);
routes.delete('/remove/egress', autenticacao.moderador, EgressoController.destroy);
routes.put('/update/egress', autenticacao.moderador, EgressoController.update);
//=== === ===---------------------------=== === ===//

//=== === ===EgressoPossuiCursoController.js Routes=== === ===//
routes.post('/register/courseEgress', autenticacao.moderador, EgressoPossuiCursoController.store);
routes.post('/courseGraduates', EgressoPossuiCursoController.index);
routes.post('/find/courseEgress', EgressoPossuiCursoController.show);
routes.delete('/remove/courseEgress', autenticacao.moderador, EgressoPossuiCursoController.destroy);
routes.put('/update/courseEgress', autenticacao.moderador, EgressoPossuiCursoController.update);
//=== === ===--------------------------------------=== === ===//

//=== === ===EgressoParticiouCursoController.js Routes=== === ===//
routes.post('/register/egressInterviews', EgressoParticiouCursoController.store);
routes.post('/graduatesInterviews', autenticacao.moderador, EgressoParticiouCursoController.index);
routes.post('/find/egressInterviews', autenticacao.moderador, EgressoParticiouCursoController.show);
routes.delete('/remove/egressInterviews', autenticacao.moderador, EgressoParticiouCursoController.destroy);
routes.put('/update/egressInterviews', autenticacao.moderador, EgressoParticiouCursoController.update);
//=== === ===-----------------------------------------=== === ===//

//=== === ===ModeradorController.js Routes=== === ===//
routes.post('/register/moderator', ModeradorController.store);
routes.post('/moderators', ModeradorController.index);
routes.post('/find/moderator', ModeradorController.show);
routes.delete('/remove/moderator', ModeradorController.destroy);
routes.put('/update/moderator', ModeradorController.update);
//=== === ===-----------------------------=== === ===//

//=== === ===EntrevistaController.js Routes=== === ===//
routes.post('/register/interview', autenticacao.moderador, EntrevistaController.store);
routes.post('/interviews', EntrevistaController.index);
routes.post('/find/interview', EntrevistaController.show);
routes.delete('/remove/interview', autenticacao.moderador, EntrevistaController.destroy);
routes.put('/update/interview', autenticacao.moderador, EntrevistaController.update);
//=== === ===------------------------------=== === ===//

//=== === ===PerguntaController.js Routes=== === ===//
routes.post('/register/question', autenticacao.moderador, PerguntaController.store);
routes.post('/questions', PerguntaController.index);
routes.post('/find/question', PerguntaController.show);
routes.delete('/remove/question', autenticacao.moderador, PerguntaController.destroy);
routes.put('/update/question', autenticacao.moderador, PerguntaController.update);
//=== === ===----------------------------=== === ===//

//=== === ===AlternativaController.js Routes=== === ===//
routes.post('/register/alternative', autenticacao.moderador, AlternativaController.store);
routes.post('/alternatives', AlternativaController.index);
routes.post('/find/alternative', AlternativaController.show);
routes.delete('/remove/alternative', autenticacao.moderador, AlternativaController.destroy);
routes.put('/update/alternative', autenticacao.moderador, AlternativaController.update);
//=== === ===-------------------------------=== === ===//

//=== === ===CursoController.js Routes=== === ===//
routes.post('/register/course', autenticacao.moderador, CursoController.store);
routes.post('/courses', CursoController.index);
routes.post('/find/course', CursoController.show);
routes.delete('/remove/course', autenticacao.moderador, CursoController.destroy);
routes.put('/update/course', autenticacao.moderador, CursoController.update);
//=== === ===-------------------------=== === ===//

//=== === ===RespostaEgressoController.js Routes=== === ===//
routes.post('/register/egressAnswer', autenticacao.egresso, RespostaEgressoController.store);
routes.post('/egressAnswers', autenticacao.moderador, RespostaEgressoController.index);
routes.delete('/remove/egressAnswer', autenticacao.moderador, RespostaEgressoController.destroy);
routes.put('/update/egressAnswer', autenticacao.moderador, RespostaEgressoController.update);
//=== === ===-------------------------=== === ===//

//=== === ===FilialController.js Routes=== === ===//
routes.post('/register/branch', autenticacao.moderador, autenticacao.moderador, FilialController.store);
routes.post('/branches', FilialController.index);
routes.post('/find/branch', FilialController.show);
routes.delete('/remove/branch', autenticacao.moderador, autenticacao.moderador, FilialController.destroy);
routes.put('/update/branch', autenticacao.moderador, autenticacao.moderador, FilialController.update);
//=== === ===-------------------------=== === ===//

//=== === ===ViewEgressoControllerController.js Routes=== === ===//
routes.post('/viewGraduates', ViewEgressoController.index);
routes.post('/find/viewEgress', ViewEgressoController.show);
//=== === ===-------------------------=== === ===//

//=== === ===ViewEgressoControllerController.js Routes=== === ===//
routes.post('/viewModerators', autenticacao.moderador, autenticacao.moderador, ViewModeradorController.index);
routes.post('/find/viewModerator', autenticacao.moderador, autenticacao.moderador, ViewModeradorController.show);
//=== === ===-------------------------=== === ===//

//=== === ===ViewRespostaEgressoController.js Routes=== === ===//
routes.post('/viewEgressAnswers', ViewRespostaEgressoController.index);
routes.post('/find/viewEgressAnswer', ViewRespostaEgressoController.show);
//=== === ===-------------------------=== === ===//

//=== === ===AutenticacaoController.js Routes=== === ===//
routes.post('/auth', AutenticacaoController.authenticate);
//=== === ===-------------------------=== === ===//

routes.post('/token', autenticacao.egresso, (request, response) => {
	response.status(200).json({token: true});
});
routes.post('/questionario', QuestionarioController.show);


module.exports = routes;