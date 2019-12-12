import React, { Component, Fragment } from 'react';

import { Container, Card, CardBody, Textarea } from '../../../../styles/BootstrapStyled';


export default class extends Component {

	constructor(props) {

		super(props);
		console.log(this.props);

	}

	render() {
		return (
			<Fragment>
				<Card>
					<CardBody>
						<h2>{this.props.question.pergunta}</h2>

						<ul>

							{this.props.question.alternativas.map((alternative, index) => {
								return (
									<li>
										<label key={index}>
											<input type="radio" value="pl"/>
											{alternative.alternativa}
										</label>

									</li>
								);
							})}
						</ul>

					</CardBody>
				</Card>
				<br />
			</Fragment>
		);
	}
}
