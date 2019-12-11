import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import TitleBar from '../../../components/TitleBar';

import {
	Input,
	Form,
	FormGroup,
	FormRow,
	ButtonPrimary,
	ButtonSuccessLink
} from '../../../styles/BootstrapStyled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import TableCourses from './TableCourses';
import ModalAdicionarCurso from './ModalAdicionarCurso';


import { Container } from '../../../styles/BootstrapStyled';
import { Content } from '../../../styles/customGlobalStyled';

const PlusIcon = <FontAwesomeIcon icon={faPlusCircle} />;



class CadastroEgresso extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			cpf: '',
			nome: '',
			sobrenome: '',
			data_nascimento: '',
			email: '',
			celular: '',
			cursos:
                [
                	{
                		id: '1',
                		nomeCurso: 'SISTEMAS DE INFORMAÇÂO',
                		concluiu: true,
                		anoInicio: '2010',
                		anoTermino: '2014'
                	},
                	{
                		id: '3',
                		nomeCurso: 'ENGENHARIA CIVIL',
                		concluiu: true,
                		anoInicio: '2015',
                		anoTermino: '2019'
                	}
                ]
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const elementName = event.target.id;
		const elementvalue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

		this.setState({
			[elementName]: elementvalue
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state);
	}


	addCourse(event) {


	}

	render() {
		return (
			<Fragment>

				<TitleBar titulo="Cadastrar/Editar Egresso" descricao="Cadastre ou edite o Egresso" />
				<Helmet>
					<title> Egressos </title>
					<meta name="description" content="Cadastre ou edite o Egresso" />
				</Helmet>

				<Container>
					<Content>

						<h2>Cadastrar Egresso</h2>

						<Form onSubmit={this.handleSubmit}>

							<FormRow>

								<FormGroup columnGrid={'col-xl-3 col-lg-3 col-md-5'}>
									<label htmlFor="cpf">Nome:</label>
									<Input onChange={this.handleChange} id="nome" type="text" placeholder="" />
								</FormGroup>

								<FormGroup columnGrid={'col-xl-4 col-lg-4 col-md-7'}>
									<label htmlFor="cpf">Sobrenome:</label>
									<Input onChange={this.handleChange} id="sobrenome" type="text" placeholder="" />
								</FormGroup>

								<FormGroup columnGrid={'col-xl-2 col-lg-2 col-md-6'}>
									<label htmlFor="cpf">Data Nasc.:</label>
									<Input onChange={this.handleChange} id="dataNascimento" type="text" placeholder="" />
								</FormGroup>

								<FormGroup columnGrid={'col-xl-3 col-lg-3 col-md-6'}>
									<label htmlFor="cpf">CPF:</label>
									<Input onChange={this.handleChange} id="cpf" type="text" placeholder="" />
								</FormGroup>

							</FormRow>

							<FormRow>

								<FormGroup columnGrid={'col-lg-10'}>
									<label htmlFor="cpf">Email:</label>
									<Input onChange={this.handleChange} id="email" type="text" placeholder="" />
								</FormGroup>

								<FormGroup columnGrid={'col-lg-2'}>
									<label htmlFor="cpf">Tel. Contato:</label>
									<Input onChange={this.handleChange} id="celular" type="text" placeholder="" />
								</FormGroup>

							</FormRow>
							<hr />
							<FormRow>
								<ButtonSuccessLink href="#modalAdicionarCurso" role="button" data-toggle="modal" > {PlusIcon} Inserir Curso</ButtonSuccessLink>

							</FormRow>
							<hr />

							<TableCourses dataTable={this.state, this.state.cursos} />

							<ButtonPrimary>Salvar</ButtonPrimary>

						</Form>

						<ModalAdicionarCurso />
					</Content>
				</Container>

			</Fragment>
		);
	}
}

export default CadastroEgresso;

