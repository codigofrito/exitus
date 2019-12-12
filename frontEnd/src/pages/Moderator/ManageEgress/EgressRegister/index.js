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
			qcourseSelected: '',
			modalDisplay: false,
			editModeStatus: false,
			editModeName: 'Salvar Curso',
			cursos: []
		};

		this.handleCourseSelected = this.handleCourseSelected.bind(this);
		this.handleFieldChange = this.handleFieldChange.bind(this);
		this.handleModalDisplayingChange = this.handleModalDisplayingChange.bind(this);
		this.handleCreateCourse = this.handleCreateCourse.bind(this);
		this.handleSaveInterview = this.handleSaveInterview.bind(this);
		this.handleUpdateCourse = this.handleUpdateCourse.bind(this);
		this.handleRemoveCourse = this.handleRemoveCourse.bind(this);
		this.processCourse = this.processCourse.bind(this);
	}

	async handleSaveInterview(event) {
		event.preventDefault();
		if (this.state.cursos.length > 0) {
			await Axios.post(
				'http://localhost:3001/register/interview',
				{
					cpf_moderador: localStorage.get('user').cpf,
					titulo: this.state.interviewTitle,
					descricao: this.state.interviewDescription,
					cursos: this.state.cursos.map(pergunta => {
						return pergunta.pergunta;
					}),
					alternativas: this.state.cursos.map(pergunta => {
						return pergunta.alternativas;
					})
				},
				{ headers: { token: `bearer ${localStorage.get('TOKEN_KEY')}` } }
			);
			document.querySelector('#new-interview').dataToggle = 'collpase';
			this.setState({ cursos: [] });
		}
	}

	handleCreateCourse(newCourse) {
		this.state.cursos.push(this.processCourse(newCourse));
		this.setState({ cursos: this.state.cursos });
	}

	handleUpdateCourse(question) {
		const cursos = this.state.cursos;
		cursos[this.state.qcourseSelectedId] = this.processCourse(question);
		this.setState({ cursos: cursos });
	}

	handleRemoveCourse() {
		const cursos = this.state.cursos;
		cursos.splice(this.state.qcourseSelectedId, 1);
		this.setState({ cursos: cursos });
	}

	processCourse(fields) {
		const Course = {
			pergunta: '',
			alternativas: []
		};
		fields.forEach((element, index) => {
			if (index === 0) {
				Course.pergunta = element.value;
			} else {
				if (element.value && element.value !== '') {
					Course.alternativas.push(element.value);
				}
			}
		});

		return Course;
	}

	handleCourseSelected(id) {
		this.setState({ qcourseSelected: this.state.cursos[id] });
		this.setState({ qcourseSelectedId: id });
		this.setState({ modalDisplay: true });
		this.setState({ editModeStatus: true, editModeName: 'Salvar alterações' });
	}

	handleFieldChange(event) {
		this.setState(JSON.parse(`{"${event.target.id}":"${event.target.value}"}`));
	}

	handleModalDisplayingChange(displayStatus) {
		this.setState({ modalDisplay: displayStatus });
		if (!displayStatus) {
			this.setState({ qcourseSelected: '' });
		}
	}

	render() {
		return (
			<Collapse id="modal-maneger-egress">

				<Form onSubmit={this.handleSaveInterview}>

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
							{plusIcon} ADICIONAR CURSO
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

				<ModalManageCourse
					question={this.state.courseSelected}
					createCourse={this.handleCreateCourse}
					updateCourse={this.handleUpdateCourse}
					removeCourse={this.handleRemoveCourse}
					setModalDisplaying={this.handleModalDisplayingChange}
					display={this.state.modalDisplay}
					editModeStatus={this.state.editModeStatus}
					editModeName={this.state.editModeName}
				/>
			</Collapse>
		);
	}
}



export default CadastroEntrevista;
