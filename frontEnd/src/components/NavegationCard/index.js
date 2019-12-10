import React, { Component } from 'react';

import { CardBody } from '../../styles/BootstrapStyled';

import { ColumnCard, Card } from "./styles";

class NavigationCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (

                <ColumnCard>
                    <Card fontColor={this.props.fontColor} backgroundColor={this.props.backgroundColor} backgroundImage={this.props.backgroundImage} to={this.props.location}>
                        <CardBody>
                            <h4>{this.props.tituloCard}</h4>
                            <p>{this.props.descricaoCard}</p>
                        </CardBody>
                    </Card>
                </ColumnCard>

        );
    }
}

export default NavigationCard;
