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
								<TableColumnHeaderCentered columnGrid="col-sm-1"> # </TableColumnHeaderCentered>
								<TableColumnHeader columnGrid="col-sm-7"> Curso </TableColumnHeader>
								<TableColumnHeaderCentered columnGrid="col-sm-2"> Inicio </TableColumnHeaderCentered>
								<TableColumnHeaderCentered columnGrid="col-sm-2"> Termino </TableColumnHeaderCentered>
							</TableRow>
						</TableHead>

						<TableBody>	{this.props.dataTable.map((question, index) => {
							return (
								<Fragment>
									<TableRowClicable
										key={index}
										onClick={() => { this.props.setCourseSelected(index); }}
										data-toggle="modal"
										href="#modal-maneger-egress"
										alternativas={question.alternativas}
									>
										<TableColumnCentered columnGrid="col-sm-1">{index + 1}</TableColumnCentered>
										<TableColumn columnGrid="col-sm-7">	{question.pergunta}	</TableColumn>
										<TableColumnCentered columnGrid="col-sm-2">{question.alternativas.length} </TableColumnCentered>
										<TableColumnCentered columnGrid="col-sm-2">{question.alternativas.length} </TableColumnCentered>
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
