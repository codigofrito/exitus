import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import {
	FormGroup,
	Form,
	Collapse,
	Input,
	Textarea,
	ButtonPrimary,
	ButtonSuccess,
	FormRow
} from '../../../../styles/BootstrapStyled';

import ModalManageCourse from './ModalManageCourse';
import TableCourses from './CourseTable';
import Axios from 'axios';
import localStorage from 'local-storage';

const plusIcon = <FontAwesomeIcon icon={faPlusCircle} />;

class CadastroEntrevista extends Component {
	constructor(props) {

		super(props);
		this.state = {
			cursos: []
		};

		this.handleFieldChange = this.handleFieldChange.bind(this);
		this.handleCourses = this.handleCourses.bind(this);
		this.registerEgress = this.registerEgress.bind(this);
	}

	handleFieldChange(event) {
		this.setState(JSON.parse(`{"${event.target.id}":"${event.target.value}"}`));
	}

	handleCourses(courses) {
		console.log(courses);
		this.setState({cursos: courses});
	}

	async registerEgress(event) {
		event.preventDefault();
		await Axios.post(
			'http://localhost:3001/register/person',
			{
				nome: this.state.nome,
				cpf: this.state.cpf,
				sobrenome: this.state.sobrenome,
				data_nascimento: this.state.dataNascimento,
				email: this.state.email,
				celular:this.state.celular,
			}
		).then(r => {console.log(r);});

		await Axios.post('http://localhost:3001/register/egress', {
			cpf: this.state.cpf,
			senha: '123456789'
		}).then(r => {console.log(r);});

		await this.state.cursos
			.forEach(async curso => {
				console.log(curso.id, this.state.cpf);
				await Axios.post('http://localhost:3001/register/courseEgress', {
					id_curso: curso.id,
					cpf_egresso: this.state.cpf
				}).then(r => {
					console.log(r);
				}).catch(err => {console.log(err);});
			});
			
	}

	render() {
		return (
			<Collapse id="modal-maneger-egress">

				<Form onSubmit={this.registerEgress}>

					<FormRow>

						<FormGroup columnGrid={'col-xl-3 col-lg-3 col-md-5'}>
							<label htmlFor="nome">Nome:</label>
							<Input
								onChange={this.handleFieldChange}								
								type="text"
								id="nome"
								placeholder="Nome do egresso"
								required
							/>
						</FormGroup>

						<FormGroup columnGrid={'col-xl-4 col-lg-4 col-md-7'}>
							<label htmlFor="sobrenome">Sobrenome:</label>
							<Input
								onChange={this.handleFieldChange}								
								type="text"
								id="sobrenome"
								placeholder="sobrenome do egresso"
								required
							/>
						</FormGroup>

						<FormGroup columnGrid={'col-xl-2 col-lg-2 col-md-6'}>
							<label htmlFor="dataNascimento">Data Nasc.:</label>
							<Input
								onChange={this.handleFieldChange}								
								type="text"
								id="dataNascimento"
								placeholder=""
								required
							/>
						</FormGroup>

						<FormGroup columnGrid={'col-xl-3 col-lg-3 col-md-6'}>
							<label htmlFor="cpf">CPF:</label>
							<Input
								onChange={this.handleFieldChange}								
								type="text"
								id="cpf"
								placeholder=""
								required
							/>
						</FormGroup>

					</FormRow>

					<FormRow>

						<FormGroup columnGrid={'col-lg-10'}>
							<label htmlFor="cpf">Email:</label>
							<Input
								onChange={this.handleFieldChange}								
								type="text"
								id="email"
								placeholder=""
								required
							/>
						</FormGroup>

						<FormGroup columnGrid={'col-lg-2'}>
							<label htmlFor="cpf">Tel. Contato:</label>
							<Input
								onChange={this.handleFieldChange}								
								type="text"
								id="celular"
								placeholder=""
								required
							/>
						</FormGroup>

					</FormRow>					

					<br />

					<FormGroup>
						<ButtonSuccess
							type="button"
							data-toggle="modal"
							href="#modalCriarPergunta"
							onClick={event => {
								event.preventDefault();
								this.setState({
									editModeStatus: false,
									editModeName: 'Salvar pergunta'
								});
							}}
						>
							{plusIcon} ADICIONAR / EDITAR CURSOS
						</ButtonSuccess>
					</FormGroup>

					<br />

					<TableCourses
						dataTable={this.state.cursos}
						setCourseSelected={this.handleCourseSelected}
					/>

					<br />

					<FormGroup>
						<ButtonPrimary
							data-toggle="collapse"
							data-target="#new-interview"
							type="submit"
						>
							SALVAR EGRESSO
						</ButtonPrimary>
					</FormGroup>
				</Form>

				<ModalManageCourse confirmCoursesSelected={this.handleCourses}/>
			</Collapse>
		);
	}
}



export default CadastroEntrevista;
