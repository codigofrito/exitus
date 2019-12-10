import React, { Component } from 'react';

import { CardBodyRight } from '../../styles/BootstrapStyled';

import { ColumnCard, Card } from "./styles";

class NavigationCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (

                <ColumnCard>
                    <Card fontColor={this.props.fontColor} backgroundColor={this.props.backgroundColor} backgroundImage={this.props.backgroundImage} to={this.props.location}>
                        <CardBodyRight>
                            <h4>{this.props.tituloCard}</h4>
                            <p>{this.props.descricaoCard}</p>
                        </CardBodyRight>
                    </Card>
                </ColumnCard>

        );
    }
}

export default NavigationCard;
