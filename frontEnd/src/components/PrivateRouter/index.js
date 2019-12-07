import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Authentication from '../../auth';

export const PrivateRoute = ({ component: Component, ...rest }) => (

	<Route {...rest} render={
		props => Authentication().isAuthenticated ? ( <Component {...props} />) : <Redirect to={{ pathname: '/', state: { from: props.localtion } }} />
	} />

);
