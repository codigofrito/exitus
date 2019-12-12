import React, { Component, Fragment } from 'react';
import { Helmet } from "react-helmet";
import Axios from 'axios';
import localStorage from 'local-storage';

import { Container, ButtonSuccessLink, ButtonPrimary, Form } from "../../../styles/BootstrapStyled";
import { Content } from "../../../styles/customGlobalStyled";

import Question from "./Question"

import TitleBar from "../../../components/TitleBar";

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tituloAba: "Responder Entrevista",
            tituloBarra: "Responder Entrevista",
            descricaoPagina: "Esse questionario foi direcionado a você, ficaremos gratos em ter sua colaboração.",
            interview: {
                titulo: "",
                descricao: "",
                perguntas: []
            }
        }
    }


    componentDidMount() {

        const idEntrevista = this.props.match.params.id

        Axios.post('http://localhost:3001/questionario', { id: 1 }
        ).then(result => {
            this.setState({ interview: result.data.Questionario });
            console.log(this.state.interview);
        }
        );


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
                        <Form>
                            <Fragment>
                                {this.state.interview.perguntas.map((question, index) => {
                                    return (
                                        <Fragment>
                                            <Question idPergunta={index} question={question} key={index} />
                                        </Fragment>
                                    );
                                })}

                            </Fragment>
                        </Form>
                        <ButtonPrimary>Salvar</ButtonPrimary>
                    </Content>
                </Container>

            </Fragment>
        );
    }
}