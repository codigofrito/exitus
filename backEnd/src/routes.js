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
routes.post('/register/egress', EgressoController.store);
routes.get('/graduates', EgressoController.index);
routes.get('/find/egress', EgressoController.show);
routes.delete('/remove/egress', EgressoController.destroy);
routes.put('/update/egress', EgressoController.update);
//=== === ===---------------------------=== === ===//

//=== === ===EgressoPossuiCursoController.js Routes=== === ===//
routes.post('/register/courseEgress', EgressoPossuiCursoController.store);
routes.get('/courseGraduates', EgressoPossuiCursoController.index);
routes.get('/find/courseEgress', EgressoPossuiCursoController.show);
routes.delete('/remove/courseEgress', EgressoPossuiCursoController.destroy);
routes.put('/update/courseEgress', EgressoPossuiCursoController.update);
//=== === ===--------------------------------------=== === ===//

//=== === ===EgressoParticiouCursoController.js Routes=== === ===//
routes.post('/register/egressInterviews', EgressoParticiouCursoController.store);
routes.get('/graduatesInterviews', EgressoParticiouCursoController.index);
routes.get('/find/egressInterviews', EgressoParticiouCursoController.show);
routes.delete('/remove/egressInterviews', EgressoParticiouCursoController.destroy);
routes.put('/update/egressInterviews', EgressoParticiouCursoController.update);
//=== === ===-----------------------------------------=== === ===//

//=== === ===ModeradorController.js Routes=== === ===//
routes.post('/register/moderator', ModeradorController.store);
routes.get('/moderators', ModeradorController.index);
routes.get('/find/moderator', ModeradorController.show);
routes.delete('/remove/moderator', ModeradorController.destroy);
routes.put('/update/moderator', ModeradorController.update);
//=== === ===-----------------------------=== === ===//

//=== === ===EntrevistaController.js Routes=== === ===//
routes.post('/register/interview', EntrevistaController.store);
routes.get('/interviews', EntrevistaController.index);
routes.get('/find/interview', EntrevistaController.show);
routes.delete('/remove/interview', EntrevistaController.destroy);
routes.put('/update/interview', EntrevistaController.update);
//=== === ===------------------------------=== === ===//

//=== === ===PerguntaController.js Routes=== === ===//
routes.post('/register/question', PerguntaController.store);
routes.get('/questions', PerguntaController.index);
routes.get('/find/question', PerguntaController.show);
routes.delete('/remove/question', PerguntaController.destroy);
routes.put('/update/question', PerguntaController.update);
//=== === ===----------------------------=== === ===//

//=== === ===AlternativaController.js Routes=== === ===//
routes.post('/register/alternative', AlternativaController.store);
routes.get('/alternatives', AlternativaController.index);
routes.get('/find/alternative', AlternativaController.show);
routes.delete('/remove/alternative', AlternativaController.destroy);
routes.put('/update/alternative', AlternativaController.update);
//=== === ===-------------------------------=== === ===//

//=== === ===CursoController.js Routes=== === ===//
routes.post('/register/course', CursoController.store);
routes.get('/courses', CursoController.index);
routes.get('/find/course', CursoController.show);
routes.delete('/remove/course', CursoController.destroy);
routes.put('/update/course', CursoController.update);
//=== === ===-------------------------=== === ===//

//=== === ===RespostaEgressoController.js Routes=== === ===//
routes.post('/register/egressAnswer', RespostaEgressoController.store);
routes.get('/egressAnswers', RespostaEgressoController.index);
routes.delete('/remove/egressAnswer', RespostaEgressoController.destroy);
routes.put('/update/egressAnswer', RespostaEgressoController.update);
//=== === ===-------------------------=== === ===//

//=== === ===FilialController.js Routes=== === ===//
routes.post('/register/branch', FilialController.store);
routes.get('/branches', FilialController.index);
routes.get('/find/branch', FilialController.show);
routes.delete('/remove/branch', FilialController.destroy);
routes.put('/update/branch', FilialController.update);
//=== === ===-------------------------=== === ===//

//=== === ===ViewEgressoControllerController.js Routes=== === ===//
routes.get('/viewGraduates', ViewEgressoController.index);
routes.get('/find/viewEgress', ViewEgressoController.show);
//=== === ===-------------------------=== === ===//

//=== === ===ViewEgressoControllerController.js Routes=== === ===//
routes.get('/viewModerators', ViewModeradorController.index);
routes.get('/find/viewModerator', ViewModeradorController.show);
//=== === ===-------------------------=== === ===//

//=== === ===ViewRespostaEgressoController.js Routes=== === ===//
routes.get('/viewEgressAnswers', ViewRespostaEgressoController.index);
routes.get('/find//////viewEgressAnswer', ViewRespostaEgressoController.show);
//=== === ===-------------------------=== === ===//

//=== === ===AutenticacaoController.js Routes=== === ===//
routes.get('/auth/egress', AutenticacaoController.athenticate.egresso);
routes.get('/auth/moderator', AutenticacaoController.athenticate.moderador);
//=== === ===-------------------------=== === ===//

module.exports = routes;