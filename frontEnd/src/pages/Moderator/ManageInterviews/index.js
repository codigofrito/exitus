import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

import TitleBar from '../../../components/TitleBar';

import {
	FormRow,
	ButtonSuccessLink
} from '../../../styles/BootstrapStyled';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import InterviewsTable from './InterviewsTable';
import InterviewRegister from './InterviewRegister';

import { Container } from '../../../styles/BootstrapStyled';
import { Content } from '../../../styles/customGlobalStyled';


const PlusIcon = <FontAwesomeIcon icon={faPlusCircle} />;

export default class extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tituloAba: "Gerenciar Entrevistas",
			tituloBarra: "Gerenciar Entrevistas",
			descricaoPagina: "Crie, edite e distribua suas entrevistas para os egressos."
		};
	}



	render() {
		return (

			<Fragment>

				<TitleBar titulo={this.state.tituloBarra} descricao={this.state.descricaoPagina} />

				<Helmet>
					<title>{this.state.tituloAba}</title>
					<meta name="description" content={this.state.descricao} />
				</Helmet>
				<Container>
					<Content>	
						<h2>Minhas Entrevistas:</h2>	
						<hr/>			
						<FormRow>
							<ButtonSuccessLink data-toggle="collapse" data-target="#new-interview"> {PlusIcon} NOVA ENTREVISTA </ButtonSuccessLink>
						</FormRow>
						<hr/>
						<InterviewRegister />
						<InterviewsTable dataTable={this.state.entrevistas} />

					</Content>
				</Container>
			</Fragment>

		);
	}
}


