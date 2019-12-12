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
		if (this.props.dataTable.length == 0) {
			return (
				<AlertWarning>
					<strong>Essa entrevista ainda não possui perguntas, adicione ao menos uma antes de salvar.</strong>
				</AlertWarning>
			);

		} else {
			return (
				<Fragment>
					<Table>
						<TableHead>
							<TableRow>
								<TableColumnHeaderCentered columnGrid="col-sm-1"> # </TableColumnHeaderCentered>
								<TableColumnHeader columnGrid="col-sm-9"> Perguntas </TableColumnHeader>
								<TableColumnHeaderCentered columnGrid="col-sm-2">Alternativas </TableColumnHeaderCentered>
							</TableRow>
						</TableHead>

						<TableBody>	{this.props.dataTable.map((question, index) => {
							return (
								<Fragment>
									<TableRowClicable
										key={index}
										onClick={() => { this.props.setQuestionSelected(index) }}
										data-toggle="modal"
										href="#modalCriarPergunta"
										alternativas={question.alternativas}
									>
										<TableColumnCentered columnGrid="col-sm-1">{index + 1}</TableColumnCentered>
										<TableColumn columnGrid="col-sm-9">	{question.pergunta}	</TableColumn>
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
