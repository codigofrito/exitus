import React, { Component } from 'react';

import Authenticate from '../../auth';

import HomePublico from './HomePublico';
import HomeModerador from './HomeModerador';
import HomeEgresso from './HomeEgresso';


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
