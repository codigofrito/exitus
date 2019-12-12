import React, {Fragment, Component } from 'react';
import Axios from 'axios';
import {
	Modal,
	ModalDialogMedium,
	ModalContent,
	ModalHeader,
	ModalTitle,
	ModalBody,
	ModalFooter,
	ButtonCloseModal,
	Form,
	FormGroup,
	ButtonPrimary,
	ButtonSecondary,
	Textarea,
	ButtonDanger,
	Table,
	TableColumnHeader,
	TableColumnHeaderCentered,
	TableBody,
	TableRow,
	TableRowClicable,
	TableColumn,
	TableColumnCentered,
	TableHead,
	AlertWarning
} from '../../../../../styles/BootstrapStyled';

class Courses extends Component {
	constructor(props) {
		super(props);
		this.state ={
			courses: [],
			selectedCourses:[]
		};

		this.selectCourse = this.selectCourse.bind(this);
	}

	selectCourse(event){
		if(event.currentTarget.isSelected) {
			event.currentTarget.isSelected = false;
			event.currentTarget.style.background = 'rgb(255,255,255)';
		} else {
			event.currentTarget.isSelected = true;
			event.currentTarget.style.background = 'rgba(188, 243, 144,0.9)';
		}
		
	}

	componentDidMount() {
		Axios.post('http://localhost:3001/courses')
			.then(result => {
				this.setState({courses: result.data.resultado});
			});
	}

	render(){
		return (
			<Fragment>
				<Table>
					<TableHead>
						<TableRow>
							<TableColumnHeaderCentered columnGrid="col-sm-4">Curso</TableColumnHeaderCentered>
							<TableColumnHeaderCentered columnGrid="col-sm-4">Filial</TableColumnHeaderCentered>
							<TableColumnHeaderCentered columnGrid="col-sm-4">Área</TableColumnHeaderCentered>
						</TableRow>
					</TableHead>

					<TableBody>
						{this.state.courses.map(course => {
							return (
								<Fragment>
									<TableRowClicable id={course.id} className="add-course-to-egress" isSelected={false} onClick={this.selectCourse}>
										<TableColumnCentered columnGrid="col-sm-4">
											{course.nome_curso}
										</TableColumnCentered>

										<TableColumnCentered columnGrid="col-sm-4">
											{course.nome_filial}
										</TableColumnCentered>

										<TableColumnCentered columnGrid="col-sm-4">
											{course.area}
										</TableColumnCentered>
									</TableRowClicable>
								</Fragment>
							);
						})}
					</TableBody>
				</Table>
			</Fragment>
		);
	}
}

export default class extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.addCourse = this.addCourses.bind(this);
	}

	addCourses() {
		const courses = document.querySelectorAll('.add-course-to-egress');
		let coursesSelected = [];
		courses.forEach(course => {
			if(course.isSelected) {
				coursesSelected.push(course);
			}
		});

		const coursesList = coursesSelected.map(course => {
			return {
				id: course.id,
				nomeCurso: course.childNodes[0].innerHTML,
				nomeFilial: course.childNodes[1].innerHTML,
				area: course.childNodes[2].innerHTML
			};
		});

		return coursesList;
	}

	componentDidUpdate() {
		
	}

	componentDidMount() {

	}

	render() {
		return (
			<Modal id="modalCriarPergunta">
				<ModalDialogMedium>
					<ModalContent>
						<ModalHeader>
							<ModalTitle>Adicionar cursos</ModalTitle>
							<ButtonCloseModal
								type="button"
								data-dismiss="modal"
							>
								<span aria-hidden="true">&times;</span>
							</ButtonCloseModal>
						</ModalHeader>
						<ModalBody>
							<Form id="modalCriarPergunta">
								<FormGroup>
									<Courses id="select-courses-table"/>
								</FormGroup>
							</Form>
						</ModalBody>

						<ModalFooter>

							<ButtonSecondary
								type="button"
								data-dismiss="modal"
							>
                				Cancelar
							</ButtonSecondary>

							<ButtonPrimary type="button" onClick={ () => {
								this.props.confirmCoursesSelected(this.addCourses());
							}
							}
							>Adicionar selecionados</ButtonPrimary>
						</ModalFooter>
					</ModalContent>
				</ModalDialogMedium>
			</Modal>
		);
	}
}
