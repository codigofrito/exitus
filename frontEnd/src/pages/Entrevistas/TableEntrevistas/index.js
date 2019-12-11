import React, { Fragment, Component } from 'react';
import Axios from 'axios';
import localStorage from 'local-storage';
import {
	Table,
	TableColumnHeader,
	TableRow,
	TableRowClicable,
	TableColumn,
	TableHead,
	TableBody
} from '../../../styles/BootstrapStyled';

class TableCourses extends Component {
	constructor(props) {
		super(props);
		this.state = {
			interviews: []
		};
	}

	editarCurso(event) {
		alert(event);
	}

	componentDidMount() {
		Axios.post('http://localhost:3001/find/interview', {
			cpf_moderador: localStorage.get('user').cpf
		}).then(result => {
			console.log(result.data.resultado);
			this.setState({interviews: result.data.resultado});
		}
		);
	}

	render() {

		return (
			<Table>
				<TableHead>
					<TableRow>
						<TableColumnHeader columnGrid="col-sm-1">#</TableColumnHeader>
						<TableColumnHeader columnGrid="col-sm-4">Título da Entrevista</TableColumnHeader>
						<TableColumnHeader columnGrid="col-sm-5">Descrição da Entrevista</TableColumnHeader>
						<TableColumnHeader columnGrid="col-sm-2">Criação</TableColumnHeader>
					</TableRow>
				</TableHead>

				<TableBody>
					{this.state.interviews.map((entrevista, index) => {
						return (
							<Fragment>
								<TableRowClicable key={index} onClick={() => this.editarCurso(entrevista.id)}>
									<TableColumn columnGrid="col-sm-1">{index + 1}</TableColumn>
									<TableColumn columnGrid="col-sm-4">{entrevista.titulo}</TableColumn>
									<TableColumn columnGrid="col-sm-5">{entrevista.descricao}</TableColumn>
									<TableColumn columnGrid="col-sm-2">{entrevista.createdAt}</TableColumn>
								</TableRowClicable>
							</Fragment>
						);
					})}
				</TableBody>
			</Table>
		);
	}
}

export default TableCourses;

