import React, { Fragment, Component } from 'react';
import Axios from 'axios';
import localStorage from 'local-storage';
import moment from 'moment'
import { Redirect, Switch } from 'react-router-dom';

import {
	Table,
	TableColumnHeader,
	TableRow,
	TableRowClicable,
	TableColumn,
	TableHead,
	TableBody,
	AlertWarning
} from '../../../../styles/BootstrapStyled';

export class Entrevista extends React.Component {

	handleOnClick = () => {
  // some action...
  // then redirect
  this.setState({redirect: true});
}

render() {
  if (this.state.redirect) {
    return <Redirect push to="/sample" />;
  }

  return <button onClick={this.handleOnClick} type="button">Button</button>;
}
}


export default class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			interviews: []
		};
	}

	componentDidMount() {
		Axios.post('http://localhost:3001/interviews', {},
			{ headers: { token: `bearer ${localStorage.get('TOKEN_KEY')}` } }
		).then(result => {
			console.log(result.data.resultado);
			this.setState({ interviews: result.data.resultado });
		}
		);
	}

	render() {

		if (this.state.interviews.length <= 0) {

			return (
				<AlertWarning>
					<strong>Você ainda não cadastrou nenhuma entrevista!</strong>
				</AlertWarning>
			);

		} else {

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
									<TableRowClicable key={index} onClick={() => this.responderEntrevista(window.location.href="/ReponderEntrevista/" + entrevista.id)}>
										<TableColumn columnGrid="col-sm-1">{index + 1}</TableColumn>
										<TableColumn columnGrid="col-sm-4">{entrevista.titulo}</TableColumn>
										<TableColumn columnGrid="col-sm-5">{entrevista.descricao}</TableColumn>
										<TableColumn columnGrid="col-sm-2">{moment(entrevista.createdAt).format("DD/MM/YYYY")}</TableColumn>
									</TableRowClicable>
								</Fragment>
							);
						})}
					</TableBody>
				</Table>
			);
		}
	}
}

