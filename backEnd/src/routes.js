const express = require('express');
const routes = express.Router();

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

//=== === ===PessoaController.js Routes=== === ===//
routes.post('/register/person', PessoaController.store);
routes.get('/people', PessoaController.index);
routes.get('/find/person', PessoaController.show);
routes.delete('/remove/person', PessoaController.destroy);
routes.put('/update/person', PessoaController.update);
//=== === ===--------------------------=== === ===//

//=== === ===EgressoController.js Routes=== === ===//
routes.post('/egress', EgressoController.store);
routes.get('/graduates', EgressoController.index);
routes.get('/egress', EgressoController.show);
routes.delete('/remove/egress', EgressoController.destroy);
routes.put('/egress', EgressoController.update);
//=== === ===---------------------------=== === ===//

//=== === ===EgressoPossuiCursoController.js Routes=== === ===//
routes.post('/register/courseEgress', EgressoPossuiCursoController.store);
routes.get('/courseGraduates', EgressoPossuiCursoController.index);
routes.get('/find/courseEgress', EgressoPossuiCursoController.show);
routes.delete('/remove/courseEgress', EgressoPossuiCursoController.destroy);
routes.put('/update/courseEgress', EgressoPossuiCursoController.update);
//=== === ===--------------------------------------=== === ===//

//=== === ===EgressoParticiouCursoController.js Routes=== === ===//
routes.post('/egressInterviews', EgressoParticiouCursoController.store);
routes.get('/graduatesInterviews', EgressoParticiouCursoController.index);
routes.get('/egressInterviews', EgressoParticiouCursoController.show);
routes.delete('/egressInterviews', EgressoParticiouCursoController.destroy);
routes.put('/egressInterviews', EgressoParticiouCursoController.update);
//=== === ===-----------------------------------------=== === ===//

//=== === ===ModeradorController.js Routes=== === ===//
routes.post('/moderator', ModeradorController.store);
routes.get('/moderators', ModeradorController.index);
routes.get('/moderator', ModeradorController.show);
routes.delete('/moderator', ModeradorController.destroy);
routes.put('/moderator', ModeradorController.update);
//=== === ===-----------------------------=== === ===//

//=== === ===EntrevistaController.js Routes=== === ===//
routes.post('/interview', EntrevistaController.store);
routes.get('/interviews', EntrevistaController.index);
routes.get('/interview', EntrevistaController.show);
routes.delete('/interview', EntrevistaController.destroy);
routes.put('/interview', EntrevistaController.update);
//=== === ===------------------------------=== === ===//

//=== === ===PerguntaController.js Routes=== === ===//
routes.post('/question', PerguntaController.store);
routes.get('/questions', PerguntaController.index);
routes.get('/question', PerguntaController.show);
routes.delete('/question', PerguntaController.destroy);
routes.put('/question', PerguntaController.update);
//=== === ===----------------------------=== === ===//

//=== === ===AlternativaController.js Routes=== === ===//
routes.post('/alternative', AlternativaController.store);
routes.get('/alternatives', AlternativaController.index);
routes.get('/alternative', AlternativaController.show);
routes.delete('/alternative', AlternativaController.destroy);
routes.put('/alternative', AlternativaController.update);
//=== === ===-------------------------------=== === ===//

//=== === ===CursoController.js Routes=== === ===//
routes.post('/course', CursoController.store);
routes.get('/courses', CursoController.index);
routes.get('/course', CursoController.show);
routes.delete('/course', CursoController.destroy);
routes.put('/course', CursoController.update);
//=== === ===-------------------------=== === ===//

//=== === ===RespostaEgressoController.js Routes=== === ===//
routes.post('/egressAnswer', RespostaEgressoController.store);
routes.get('/egressAnswers', RespostaEgressoController.index);
routes.delete('/egressAnswer', RespostaEgressoController.destroy);
routes.put('/egressAnswer', RespostaEgressoController.update);
//=== === ===-------------------------=== === ===//

//=== === ===FilialController.js Routes=== === ===//
routes.post('/branch', FilialController.store);
routes.get('/branches', FilialController.index);
routes.get('/branch', FilialController.show);
routes.delete('/branch', FilialController.destroy);
routes.put('/branch', FilialController.update);
//=== === ===-------------------------=== === ===//

//=== === ===ViewEgressoControllerController.js Routes=== === ===//
routes.get('/viewGraduates', ViewEgressoController.index);
routes.get('/viewEgress', ViewEgressoController.show);
//=== === ===-------------------------=== === ===//

//=== === ===ViewEgressoControllerController.js Routes=== === ===//
routes.get('/viewModerators', ViewModeradorController.index);
routes.get('/viewModerator', ViewModeradorController.show);
//=== === ===-------------------------=== === ===//

//=== === ===ViewRespostaEgressoController.js Routes=== === ===//
routes.get('/viewEgressAnswers', ViewRespostaEgressoController.index);
routes.get('/viewEgressAnswer', ViewRespostaEgressoController.show);
//=== === ===-------------------------=== === ===//

//=== === ===AutenticacaoController.js Routes=== === ===//
routes.get('/auth/egress', AutenticacaoController.athenticate.egresso);
routes.get('/auth/moderator', AutenticacaoController.athenticate.moderador);
//=== === ===-------------------------=== === ===//

module.exports = routes;