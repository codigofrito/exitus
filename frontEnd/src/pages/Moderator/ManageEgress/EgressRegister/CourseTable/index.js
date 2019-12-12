import React, { Fragment, Component } from 'react';

import {
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

export default class extends Component {


	render() {
		if (this.props.dataTable.length === 0) {
			return (
				<Fragment>
					<AlertWarning>
						<strong>Esse egresso ainda não possui cursos.</strong>
					</AlertWarning>
					<br />
					<hr />
					<br />
				</Fragment>

			);

		} else {
			return (
				<Fragment>
					<Table>
						<TableHead>
							<TableRow>
								<TableColumnHeader columnGrid="col-sm-4"> Curso </TableColumnHeader>
								<TableColumnHeaderCentered columnGrid="col-sm-4"> Inicio </TableColumnHeaderCentered>
								<TableColumnHeaderCentered columnGrid="col-sm-4"> Termino </TableColumnHeaderCentered>
							</TableRow>
						</TableHead>

						<TableBody>	{this.props.dataTable.map((course, index) => {
							return (
								<Fragment>
									<TableRowClicable
										key={index}
									>
										<TableColumnCentered columnGrid="col-sm-4">{course.nomeCurso}</TableColumnCentered>
										<TableColumnCentered columnGrid="col-sm-4">{course.nomeFilial} </TableColumnCentered>
										<TableColumnCentered columnGrid="col-sm-4">{course.area} </TableColumnCentered>
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
}
