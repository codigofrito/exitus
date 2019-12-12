import React, { Fragment, Component } from 'react';

import {
	Table,
	TableColumnHeader,
	TableRow,
	TableRowClicable,
	TableColumn,
	TableHead,
	TableBody
} from '../../../../styles/BootstrapStyled';

class TableCourses extends Component {

	editarCurso(event) {
		alert(event);
	}

	render() {

		return (
			<Table>
				<TableHead>
					<TableRow>
						<TableColumnHeader columnGrid="col-sm-1">#</TableColumnHeader>
						<TableColumnHeader columnGrid="col-sm-9">Nome do Curso</TableColumnHeader>
						<TableColumnHeader columnGrid="col-sm-1">Início</TableColumnHeader>
						<TableColumnHeader columnGrid="col-sm-1">Término</TableColumnHeader>
					</TableRow>
				</TableHead>

				<TableBody>
					{this.props.dataTable.cursos.map((curso, index) => {
						return (
							<Fragment>
								<TableRowClicable key={index} onClick={() => this.editarCurso(curso.id)}>
									<TableColumn columnGrid="col-sm-1">{index + 1}</TableColumn>
									<TableColumn columnGrid="col-sm-9">{curso.nomeCurso}</TableColumn>
									<TableColumn columnGrid="col-sm-1">{curso.anoInicio}</TableColumn>
									<TableColumn columnGrid="col-sm-1">{curso.anoTermino}</TableColumn>
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

