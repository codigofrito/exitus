import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

import TitleBar from '../../../components/TitleBar';

import {
	FormRow,
	ButtonSuccess
} from '../../../styles/BootstrapStyled';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import TableEntrevistas from './TableInterviews';

import { Container } from '../../../styles/BootstrapStyled';
import { Content } from '../../../styles/customGlobalStyled';


const PlusIcon = <FontAwesomeIcon icon={faPlusCircle} />;

export default class extends Component {

	constructor(props) {
		super(props);
		this.state = {
			entrevistas:
                [
                	{
                		id: '1',
                		cpfModerador: '79856412367',
                		titulo: 'Primeira entrevista',
                		descricao: 'Entrevista de teste',
                		createdAt: '2019-12-09 00:14:31',
                		updatedAt: '2019-12-09 00:14:31'
                	},

                	{
                		id: '2',
                		cpfModerador: '79856412367',
                		titulo: 'Segunda entrevista',
                		descricao: 'Entrevista de teste 2',
                		createdAt: '2019-12-09 00:14:31',
                		updatedAt: '2019-12-09 00:14:31'
                	},

                ]
		};	
	}



	render() {
		return (

			<Fragment>

				<TitleBar titulo="Minhas Entrevistas" descricao="Gerencie todas as entrevistas que você criou ou crie outras se necessário." />
               
				<Helmet>
					<title>Entrevistas</title>
					<meta name="description" content="" />
				</Helmet>

				<Container>
					<Content>
						<FormRow>
							<ButtonSuccess to="/CadastroEntrevista"> {PlusIcon} Cadastrar Nova Entrevista </ButtonSuccess>
						</FormRow>
						<hr />
						<TableEntrevistas dataTable={this.state.entrevistas} />
					</Content>
				</Container>
			</Fragment>

		);
	}
}


