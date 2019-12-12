import React, { Component } from 'react';

import Authenticate from '../../auth';

import HomePublico from '../Public/HomePublic';
import HomeModerador from '../Moderator/HomeModerator';
import HomeEgresso from '../Egress/HomeEgress';


const HomeAtual = () => { return Authenticate.isAuthenticated() 
	? (Authenticate.UserType() == 'moderator'? (<HomeModerador/>) : (<HomeEgresso/>))
	: (<HomePublico/>);
};

class Home extends Component {

	render(){
		return (
			<HomeAtual/>
		);
	}
}

export default Home;
