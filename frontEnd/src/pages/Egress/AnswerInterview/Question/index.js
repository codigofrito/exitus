import React, { Component, Fragment } from 'react';

import { Card, CardBody } from "../../../../styles/BootstrapStyled";

import { Input, CustomInput, CustomRadio } from "../../../../styles/BootstrapStyled"
import { FormGroup } from '@material-ui/core';


export default class extends Component {

    constructor(props) {

        super(props);

    }

    render() {
        return (
            <Fragment>
                <Card>
                    <CardBody>

                        <h2>{this.props.question.pergunta}</h2>

                        {this.props.question.alternativas.map((alternative, index) => {

                            return (
                                <Fragment>
                                    <FormGroup columnGrid={"col-lg-6"}>
                                        <CustomRadio key={index}>
                                            <CustomInput type="radio" class="custom-control-input" id={"pergunta" + alternative.id} name={"alternativa" + alternative.id_pergunta} />
                                            <label class="custom-control-label" for={"pergunta" + alternative.id} > {alternative.alternativa}</label>
                                        </CustomRadio>
                                    </FormGroup>
                                </Fragment>
                            );
                        })}

                    </CardBody>
                </Card>
                <br />
            </Fragment>
        );
    }
}
