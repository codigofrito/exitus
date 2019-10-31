const express = require('express');
const routes = express.Router();

const PessoaController = require('./controllers/PessoaController');
const EgressoController = require('./controllers/EgressoController');
const EgressoPossuiCursoController = require('./controllers/EgressoPossuiCursoController')
const EgressoParticiouCursoController = require('./controllers/EgressoParticipouEntrevistaController');
const ModeradorController = require('./controllers/ModeradorController');
const EntrevistaController = require('./controllers/EntrevistaController');
const PerguntaController = require('./controllers/PerguntaController');
const AlternativaController = require('./controllers/AlternativaController');
const CursoController = require('./controllers/CursoController');

//===PessoaController.js Routes===//
routes.post('/person', PessoaController.store);
routes.get('/people', PessoaController.index);
routes.get('/person', PessoaController.show);
routes.delete('/person', PessoaController.destroy);
routes.put('/person', PessoaController.update);
//===-------------------------===//

//===EgressoController.js Routes===//
routes.post('/egress', EgressoController.store);
routes.get('/graduates', EgressoController.index);
routes.get('/egress', EgressoController.show);
routes.delete('/egress', EgressoController.destroy);
routes.put('/egress', EgressoController.update);
//===-------------------------===//

//===EgressoPossuiCursoController.js Routes===//
routes.post('/courseEgress', EgressoPossuiCursoController.store);
routes.get('/courseGraduates', EgressoPossuiCursoController.index);
routes.get('/courseEgress', EgressoPossuiCursoController.show);
routes.delete('/courseEgress', EgressoPossuiCursoController.destroy);
routes.put('/courseEgress', EgressoPossuiCursoController.update);
//===-------------------------===//

//===EgressoParticiouCursoController.js Routes===//
routes.post('/egressInterviews', EgressoParticiouCursoController.store);
routes.get('/graduatesInterviews', EgressoParticiouCursoController.index);
routes.get('/egressInterviews', EgressoParticiouCursoController.show);
routes.delete('/egressInterviews', EgressoParticiouCursoController.destroy);
routes.put('/egressInterviews', EgressoParticiouCursoController.update);
//===-------------------------===//

//===ModeradorController.js Routes===//
routes.post('/moderator', ModeradorController.store);
routes.get('/moderators', ModeradorController.index);
routes.get('/moderator', ModeradorController.show);
routes.delete('/moderator', ModeradorController.destroy);
routes.put('/moderator', ModeradorController.update);
//===-------------------------===//

//===EntrevistaController.js Routes===//
routes.post('/interview', EntrevistaController.store);
routes.get('/interviews', EntrevistaController.index);
routes.get('/interview', EntrevistaController.show);
routes.delete('/interview', EntrevistaController.destroy);
routes.put('/interview', EntrevistaController.update);
//===-------------------------===//

//===PerguntaController.js Routes===//
routes.post('/question', PerguntaController.store);
routes.get('/questions', PerguntaController.index);
routes.get('/question', PerguntaController.show);
routes.delete('/question', PerguntaController.destroy);
routes.put('/question', PerguntaController.update);
//===-------------------------===//

//===AlternativaController.js Routes===//
routes.post('/alternative', AlternativaController.store);
routes.get('/alternatives', AlternativaController.index);
routes.get('/alternative', AlternativaController.show);
routes.delete('/alternative', AlternativaController.destroy);
routes.put('/alternative', AlternativaController.update);
//===-------------------------===//

//===CursoController.js Routes===//
routes.post('/course', CursoController.store);
routes.get('/courses', CursoController.index);
routes.get('/course', CursoController.show);
routes.delete('/course', CursoController.destroy);
routes.put('/course', CursoController.update);
//===-------------------------===//

module.exports = routes;