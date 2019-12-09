import React from 'react';
import { Helmet } from "react-helmet";

import {
    FormRow,
    ButtonSuccess
} from "../../styles/BootstrapStyled";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import TableEntrevistas from './TableEntrevistas';

import { Container } from "../../styles/BootstrapStyled";
import { Content } from "../../styles/customGlobalStyled";


const PlusIcon = <FontAwesomeIcon icon={faPlusCircle} />


class ListaEntrevistas extends React.Component {

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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const elementName = event.target.id;
        const elementvalue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        this.setState({
            [elementName]: elementvalue
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }


    render() {
        return (
            <Container>
                <Content>
                    <Helmet>
                        <title> Listar Entrevistas </title>
                        <meta name="description" content="" />
                    </Helmet>

                    <h2>Listar Entrevistas</h2>


                    <FormRow>
                        <ButtonSuccess to="/CadastroEntrevista"> {PlusIcon} Cadastrar Nova Entrevista </ButtonSuccess>
                    </FormRow>

                    <hr />

                    <TableEntrevistas dataTable={this.state.entrevistas} />

                </Content>
            </Container>
        );
    }
}

export default ListaEntrevistas;

