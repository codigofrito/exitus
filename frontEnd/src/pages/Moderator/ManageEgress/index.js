import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

import TitleBar from '../../../components/TitleBar';

import {
	FormRow,
	ButtonSuccessLink
} from '../../../styles/BootstrapStyled';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import EgressesTable from './EgressesTable';
import EgressRegister from './EgressRegister';

import { Container } from '../../../styles/BootstrapStyled';
import { Content } from '../../../styles/customGlobalStyled';


const PlusIcon = <FontAwesomeIcon icon={faPlusCircle} />;

export default class extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tituloAba: "Gerenciar Egressos",
			tituloBarra: "Gerenciar Egressos",
			descricaoPagina: "Cadastre e gerencie os egressos do sistema."
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
						<h2>Egressos:</h2>	
						<hr/>			
						<FormRow>
							<ButtonSuccessLink data-toggle="collapse" data-target="#modal-maneger-egress"> {PlusIcon} NOVO EGRESSO </ButtonSuccessLink>
						</FormRow>
						<hr/>
						<EgressRegister />

						<EgressesTable dataTable={this.state.entrevistas} />

					</Content>
				</Container>
			</Fragment>

		);
	}
}


